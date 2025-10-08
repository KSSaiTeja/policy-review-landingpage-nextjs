/**
 * PolicyDataService
 * 
 * A singleton service that provides efficient access to policy master data.
 * Implements caching, indexing, and query optimization.
 * 
 * Benefits:
 * - Single source of truth for policy data
 * - Efficient querying with indexed lookups
 * - Type-safe with full TypeScript support
 * - Easy to test and mock
 * - Cacheable and performant
 */

import masterData from "@/master-data.json";
import { PolicyData, PolicyQueryParams, PolicyEligibility } from "@/types/policy";
import { isWithinInterval, parseISO } from "date-fns";

class PolicyDataService {
  private policies: PolicyData[];
  private policyByUINCache: Map<string, PolicyData[]>;
  private policyByPlanNameCache: Map<string, PolicyData[]>;
  private policyByModuleCache: Map<string, PolicyData[]>;

  constructor() {
    this.policies = masterData as PolicyData[];
    this.policyByUINCache = new Map();
    this.policyByPlanNameCache = new Map();
    this.policyByModuleCache = new Map();
    this.buildIndexes();
  }

  /**
   * Build indexes for faster lookups
   * O(n) on initialization, O(1) on subsequent lookups
   */
  private buildIndexes(): void {
    this.policies.forEach((policy) => {
      // Index by UIN
      if (!this.policyByUINCache.has(policy.UIN)) {
        this.policyByUINCache.set(policy.UIN, []);
      }
      this.policyByUINCache.get(policy.UIN)!.push(policy);

      // Index by Plan Name
      if (!this.policyByPlanNameCache.has(policy.PlanName)) {
        this.policyByPlanNameCache.set(policy.PlanName, []);
      }
      this.policyByPlanNameCache.get(policy.PlanName)!.push(policy);

      // Index by Module
      if (!this.policyByModuleCache.has(policy.Module)) {
        this.policyByModuleCache.set(policy.Module, []);
      }
      this.policyByModuleCache.get(policy.Module)!.push(policy);
    });
  }

  /**
   * Get all policies
   */
  getAllPolicies(): PolicyData[] {
    return this.policies;
  }

  /**
   * Get unique plan names for dropdown/selection
   */
  getUniquePlanNames(): string[] {
    return Array.from(this.policyByPlanNameCache.keys()).sort();
  }

  /**
   * Get policies by UIN (O(1) lookup)
   */
  getPoliciesByUIN(uin: string): PolicyData[] {
    return this.policyByUINCache.get(uin) || [];
  }

  /**
   * Get policies by Plan Name (O(1) lookup)
   */
  getPoliciesByPlanName(planName: string): PolicyData[] {
    return this.policyByPlanNameCache.get(planName) || [];
  }

  /**
   * Get policies by Module (O(1) lookup)
   */
  getPoliciesByModule(module: string): PolicyData[] {
    return this.policyByModuleCache.get(module) || [];
  }

  /**
   * Check if a policy was active on a given purchase date
   */
  isPolicyActiveOnDate(policy: PolicyData, purchaseDate: Date): boolean {
    const fromDate = parseISO(policy.FromDate);
    const toDate = policy.ToDate ? parseISO(policy.ToDate) : new Date();

    try {
      return isWithinInterval(purchaseDate, {
        start: fromDate,
        end: toDate,
      });
    } catch {
      return false;
    }
  }

  /**
   * Parse age value (handles "90 Days", "90 days", numbers, "40 Year")
   */
  private parseAge(age: number | string): number {
    if (typeof age === "number") return age;
    if (typeof age === "string") {
      const lowerAge = age.toLowerCase();
      
      // Handle "90 Days", "90 days" - convert to years (90 days ≈ 0.25 years)
      if (lowerAge.includes("day")) {
        const daysMatch = age.match(/\d+/);
        const days = daysMatch ? parseInt(daysMatch[0], 10) : 90;
        return days / 365; // Convert days to years (e.g., 90/365 ≈ 0.25)
      }
      
      // Handle "40 Year" or just extract number
      const numMatch = age.match(/\d+/);
      return numMatch ? parseInt(numMatch[0], 10) : 0;
    }
    return 0;
  }

  /**
   * Check if age is within policy entry age range
   */
  isAgeEligible(policy: PolicyData, age: number): boolean {
    const minAge = this.parseAge(policy.MinEntryAge);
    const maxAge = this.parseAge(policy.MaxEntryAge);
    return age >= minAge && age <= maxAge;
  }

  /**
   * Check if policy term is valid for the policy
   */
  isPolicyTermValid(policy: PolicyData, term: number): boolean {
    return term >= policy.MinPolicyTerm && term <= policy.MaxPolicyTerm;
  }

  /**
   * Get eligible policies based on user's data
   * This is the main query function
   */
  getEligiblePolicies(params: PolicyQueryParams): PolicyData[] {
    let filteredPolicies = this.policies;

    // Filter by UIN
    if (params.uin) {
      filteredPolicies = this.getPoliciesByUIN(params.uin);
    }

    // Filter by Plan Name
    if (params.planName) {
      filteredPolicies = filteredPolicies.filter(
        (p) => p.PlanName === params.planName
      );
    }

    // Filter by Module
    if (params.module) {
      filteredPolicies = filteredPolicies.filter(
        (p) => p.Module === params.module
      );
    }

    // Filter by Purchase Date (active policies only)
    if (params.purchaseDate) {
      filteredPolicies = filteredPolicies.filter((p) =>
        this.isPolicyActiveOnDate(p, params.purchaseDate!)
      );
    }

    // Filter by Entry Age
    if (params.entryAge !== undefined) {
      filteredPolicies = filteredPolicies.filter((p) =>
        this.isAgeEligible(p, params.entryAge!)
      );
    }

    // Filter by Policy Term
    if (params.policyTerm !== undefined) {
      filteredPolicies = filteredPolicies.filter((p) =>
        this.isPolicyTermValid(p, params.policyTerm!)
      );
    }

    // Filter by active status
    if (params.isActive !== undefined && params.isActive) {
      const today = new Date();
      filteredPolicies = filteredPolicies.filter((p) =>
        this.isPolicyActiveOnDate(p, today)
      );
    }

    return filteredPolicies;
  }

  /**
   * Find the best matching policy configuration
   * Returns the most recent variant if multiple matches
   */
  findBestMatchingPolicy(
    dateOfBirth: Date,
    purchaseDate: Date,
    planName?: string
  ): PolicyEligibility {
    const age = this.calculateAgeAtPurchase(dateOfBirth, purchaseDate);
    const reasons: string[] = [];

    const eligiblePolicies = this.getEligiblePolicies({
      purchaseDate,
      entryAge: age,
      planName,
    });

    if (eligiblePolicies.length === 0) {
      if (!planName) {
        reasons.push("No policies available for your purchase date and age");
      } else {
        reasons.push(`${planName} is not available for your purchase date or age`);
      }
      return { eligible: false, policy: null, reasons };
    }

    // Sort by FromDate to get the most recent variant
    eligiblePolicies.sort((a, b) => {
      return parseISO(b.FromDate).getTime() - parseISO(a.FromDate).getTime();
    });

    return {
      eligible: true,
      policy: eligiblePolicies[0],
      reasons: [],
    };
  }

  /**
   * Get available plan names for a given purchase date and age
   */
  getAvailablePlansForUser(dateOfBirth: Date, purchaseDate: Date): string[] {
    const age = this.calculateAgeAtPurchase(dateOfBirth, purchaseDate);
    const eligiblePolicies = this.getEligiblePolicies({
      purchaseDate,
      entryAge: age,
    });

    // Get unique plan names
    const planNames = new Set(eligiblePolicies.map((p) => p.PlanName));
    return Array.from(planNames).sort();
  }

  /**
   * Calculate age at purchase with exact month/day adjustment
   * Logic: Calculate years difference between purchase date and birth date
   * Adjust for month/day: if purchase month < birth month, or same month but purchase day < birth day, subtract 1 year
   */
  calculateAgeAtPurchase(dateOfBirth: Date, purchaseDate: Date): number {
    const birthYear = dateOfBirth.getFullYear();
    const birthMonth = dateOfBirth.getMonth(); // 0-11
    const birthDay = dateOfBirth.getDate();
    
    const purchaseYear = purchaseDate.getFullYear();
    const purchaseMonth = purchaseDate.getMonth(); // 0-11
    const purchaseDay = purchaseDate.getDate();
    
    // Calculate initial year difference
    let age = purchaseYear - birthYear;
    
    // Adjust if birthday hasn't occurred yet in the purchase year
    if (purchaseMonth < birthMonth || (purchaseMonth === birthMonth && purchaseDay < birthDay)) {
      age = age - 1;
    }
    
    return age;
  }

  /**
   * Validate if sum assured is within policy limits
   */
  validateSumAssured(policy: PolicyData, sumAssured: number): {
    valid: boolean;
    message?: string;
  } {
    if (!policy.MinSumAssured) {
      return { valid: true };
    }

    if (sumAssured < policy.MinSumAssured) {
      return {
        valid: false,
        message: `Minimum sum assured is ₹${policy.MinSumAssured.toLocaleString("en-IN")}`,
      };
    }

    if (
      policy.SumAssuredMultiples &&
      sumAssured % policy.SumAssuredMultiples !== 0
    ) {
      return {
        valid: false,
        message: `Sum assured must be in multiples of ₹${policy.SumAssuredMultiples.toLocaleString("en-IN")}`,
      };
    }

    return { valid: true };
  }
}

// Export singleton instance
export const policyDataService = new PolicyDataService();

