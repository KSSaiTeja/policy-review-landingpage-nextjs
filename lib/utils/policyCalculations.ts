/**
 * Policy Calculation Utilities
 * 
 * Pure functions for policy-related calculations
 * All calculation logic should be here for easy testing
 */

import { PolicyData, PolicyCalculationInput } from "@/types/policy";
import { differenceInYears, addYears } from "date-fns";

/**
 * Calculate maturity date based on policy term
 */
export function calculateMaturityDate(
  purchaseDate: Date,
  policyTerm: number
): Date {
  return addYears(purchaseDate, policyTerm);
}

/**
 * Calculate years elapsed since purchase
 */
export function calculateYearsElapsed(
  purchaseDate: Date,
  currentDate: Date = new Date()
): number {
  return differenceInYears(currentDate, purchaseDate);
}

/**
 * Calculate age at maturity
 */
export function calculateAgeAtMaturity(
  dateOfBirth: Date,
  maturityDate: Date
): number {
  return differenceInYears(maturityDate, dateOfBirth);
}

/**
 * Parse PPT (Premium Payment Term) value
 * PPT can be: "0" (regular), "1" (single), "-3" (term minus 3), etc.
 */
export function calculatePPT(pptString: string, policyTerm: number): number {
  const ppt = pptString.trim();
  
  // Regular premium (pay throughout)
  if (ppt === "0") {
    return policyTerm;
  }
  
  // Single premium
  if (ppt === "1") {
    return 1;
  }
  
  // Limited premium (term minus X years)
  if (ppt.startsWith("-")) {
    const yearsToSubtract = parseInt(ppt.substring(1), 10);
    return Math.max(1, policyTerm - yearsToSubtract);
  }
  
  // Fixed premium period
  const numericPPT = parseInt(ppt, 10);
  return isNaN(numericPPT) ? policyTerm : numericPPT;
}

/**
 * Get survival benefit years for a policy
 */
export function getSurvivalBenefitYears(policy: PolicyData): number[] {
  const years: number[] = [];
  
  for (const [key, value] of Object.entries(policy.SurvivalBenefits)) {
    if (value && !isNaN(Number(key))) {
      years.push(Number(key));
    }
  }
  
  return years.sort((a, b) => a - b);
}

/**
 * Calculate total survival benefits as percentage
 */
export function calculateTotalSurvivalBenefits(policy: PolicyData): number {
  let total = 0;
  
  for (const value of Object.values(policy.SurvivalBenefits)) {
    if (typeof value === "number") {
      total += value;
    }
  }
  
  return total;
}

/**
 * Format currency in Indian format
 */
export function formatIndianCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Placeholder for future premium calculation
 * This will need actuarial tables which can be added later
 */
export function estimatePremium(): number {
  // TODO: Implement actual premium calculation based on actuarial tables
  // For now, return 0 or estimated value
  return 0;
}

/**
 * Placeholder for maturity amount calculation
 */
export function calculateMaturityAmount(): number {
  // TODO: Implement based on guaranteed additions, bonuses, etc.
  return 0;
}

