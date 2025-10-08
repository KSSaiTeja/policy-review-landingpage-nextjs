/**
 * Core Policy Data Types
 * Auto-generated from master-data.json structure
 */

export interface SurvivalBenefits {
  "3"?: number | null;
  "5"?: number | null;
  "6"?: number | null;
  "9"?: number | null;
  "10"?: number | null;
  "11"?: number | null;
  "12"?: number | null;
  "13"?: number | null;
  "14"?: number | null;
  "15"?: number | null;
  "16"?: number | null;
  "17"?: number | null;
  "18"?: number | null;
  "19"?: number | null;
  "20"?: number | null;
  "23"?: number | null;
  "24"?: number | null;
  "25"?: number | null;
  "30"?: number | null;
  "35"?: number | null;
  EndOfPPT?: number | null;
  ">300000"?: number;
  "300000-900000"?: number;
  "Above 900000"?: number;
  "0"?: number;
  "90 Age(Only Basic Sum Assured)"?: number;
  [key: string]: number | null | undefined; // For dynamic year keys
}

export interface PolicyData {
  UIN: string;
  PlanName: string;
  MinEntryAge: number | string;
  MaxEntryAge: number | string;
  MinAgeAtMaturity?: number;
  MaxAgeAtMaturity?: number;
  MinAgeAtEndOfPPT?: number;
  MaxAgeAtEndOfPPT?: number;
  MinAgeForSurvivalBenefit?: number;
  MaxAgeForSurvivalBenefit?: number;
  PPT: string;
  MinPolicyTerm: number;
  MaxPolicyTerm: number;
  MinSumAssured: number | null;
  MaxSumAssured: string | null;
  PaymentOfPremium: string | null;
  SumAssuredMultiples: number | null;
  SurvivalBenefits: SurvivalBenefits;
  MaturityBenefit?: number;
  MaturityBenefitOnPremium?: number | null;
  Module: string;
  FromDate: string;
  ToDate: string | null;
  Option?: string;
  SurrenderBenefit?: string;
  MinDefermentPeriod?: number | null;
  MaxDefermentPeriod?: number | null;
  MinPremium?: number;
  MaxPremium?: string;
  MinAnnuity?: number;
  AnnuityIncreasePercent?: string | null;
  AnnuityMode?: string;
}

export interface PolicyQueryParams {
  uin?: string;
  planName?: string;
  module?: string;
  purchaseDate?: Date;
  entryAge?: number;
  policyTerm?: number;
  isActive?: boolean; // Based on FromDate/ToDate
}

export interface PolicyEligibility {
  eligible: boolean;
  policy: PolicyData | null;
  reasons: string[];
}

export interface PolicyCalculationInput {
  policy: PolicyData;
  purchaseDate: Date;
  dateOfBirth: Date;
  sumAssured?: number;
  premiumAmount?: number;
  policyTerm?: number;
}

