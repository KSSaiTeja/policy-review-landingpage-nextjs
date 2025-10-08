/**
 * React Hooks for Policy Data Access
 * 
 * Provides clean, React-friendly interface to PolicyDataService
 */

import { useMemo } from "react";
import { policyDataService } from "@/lib/services/PolicyDataService";
import { PolicyData, PolicyQueryParams } from "@/types/policy";

/**
 * Hook to get all unique plan names
 */
export function useAvailablePlans() {
  return useMemo(() => {
    return policyDataService.getUniquePlanNames();
  }, []);
}

/**
 * Hook to get eligible policies based on user data
 */
export function useEligiblePolicies(params: PolicyQueryParams) {
  return useMemo(() => {
    return policyDataService.getEligiblePolicies(params);
  }, [params]);
}

/**
 * Hook to find best matching policy
 */
export function useBestMatchingPolicy(
  dateOfBirth: Date | undefined,
  purchaseDate: Date | undefined,
  planName?: string
) {
  return useMemo(() => {
    if (!dateOfBirth || !purchaseDate) {
      return { eligible: false, policy: null, reasons: ["Missing required information"] };
    }
    return policyDataService.findBestMatchingPolicy(dateOfBirth, purchaseDate, planName);
  }, [dateOfBirth, purchaseDate, planName]);
}

/**
 * Hook to get available plans for user based on DOB and purchase date
 */
export function useAvailablePlansForUser(
  dateOfBirth: Date | undefined,
  purchaseDate: Date | undefined
) {
  return useMemo(() => {
    if (!dateOfBirth || !purchaseDate) {
      return [];
    }
    return policyDataService.getAvailablePlansForUser(dateOfBirth, purchaseDate);
  }, [dateOfBirth, purchaseDate]);
}

/**
 * Hook to validate sum assured against policy limits
 */
export function useValidateSumAssured(policy: PolicyData | null, sumAssured: number) {
  return useMemo(() => {
    if (!policy) {
      return { valid: false, message: "No policy selected" };
    }
    return policyDataService.validateSumAssured(policy, sumAssured);
  }, [policy, sumAssured]);
}

/**
 * Hook to calculate age at purchase
 */
export function useAgeAtPurchase(
  dateOfBirth: Date | undefined,
  purchaseDate: Date | undefined
) {
  return useMemo(() => {
    if (!dateOfBirth || !purchaseDate) {
      return null;
    }
    return policyDataService.calculateAgeAtPurchase(dateOfBirth, purchaseDate);
  }, [dateOfBirth, purchaseDate]);
}

