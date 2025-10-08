/**
 * Form Context for Multi-Step Policy Review Form
 * 
 * Centralizes form state management across all steps
 * Provides clean API for accessing and updating form data
 */

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface FormData {
  // Step 1: Personal Information
  name?: string;
  dateOfBirth?: Date;

  // Step 2: Policy Information
  policyPurchaseDate?: Date;

  // Step 3: Policy Details (to be added)
  planName?: string;
  policyTerm?: number;
  premiumAmount?: number;
  sumAssured?: number;
  premiumFrequency?: string; // "1" = Yearly, "2" = Half-yearly, "3" = Quarterly, "4" = Monthly

  // Additional fields (can be added as needed)
  [key: string]: unknown;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetFormData: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const resetFormData = () => {
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        resetFormData,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
}

