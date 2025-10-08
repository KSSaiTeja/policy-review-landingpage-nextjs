"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAgeAtPurchase, useAvailablePlansForUser } from "@/lib/hooks/usePolicyData";
import { policyDataService } from "@/lib/services/PolicyDataService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Form validation schema for Step 1
const step1Schema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    message: "Date of birth is required.",
  }),
});

// Form validation schema for Step 2
const step2Schema = z.object({
  policyPurchaseDate: z.date({
    message: "Policy purchase date is required.",
  }),
});

// Form validation schema for Step 3
const step3Schema = z.object({
  selectedPolicy: z.string().min(1, {
    message: "Please select a policy plan.",
  }),
});

type Step1FormValues = z.infer<typeof step1Schema>;
type Step2FormValues = z.infer<typeof step2Schema>;
type Step3FormValues = z.infer<typeof step3Schema>;

interface PolicyReviewFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PolicyReviewForm({
  open,
  onOpenChange,
}: PolicyReviewFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    step1?: Step1FormValues;
    step2?: Step2FormValues;
    step3?: Step3FormValues;
  }>({});
  const totalSteps = 4;

  const step1Form = useForm<Step1FormValues>({
    resolver: zodResolver(step1Schema),
    mode: "onChange", // Instant validation
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const step2Form = useForm<Step2FormValues>({
    resolver: zodResolver(step2Schema),
    mode: "onChange", // Instant validation
    reValidateMode: "onChange",
    defaultValues: {},
  });

  const step3Form = useForm<Step3FormValues>({
    resolver: zodResolver(step3Schema),
    mode: "onChange", // Instant validation
    reValidateMode: "onChange",
    defaultValues: {
      selectedPolicy: "",
    },
  });

  function onStep1Submit(data: Step1FormValues) {
    console.log("Step 1 data:", data);
    setFormData((prev) => ({ ...prev, step1: data }));
    setCurrentStep(2);
  }

  function onStep2Submit(data: Step2FormValues) {
    console.log("Step 2 data:", data);
    setFormData((prev) => ({ ...prev, step2: data }));
    setCurrentStep(3);
  }

  function onStep3Submit(data: Step3FormValues) {
    console.log("Step 3 data:", data);
    setFormData((prev) => ({ ...prev, step3: data }));
    setCurrentStep(4);
  }

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({});
    step1Form.reset();
    step2Form.reset();
    step3Form.reset();
  };

  const handleClose = () => {
    resetForm();
    onOpenChange(false);
  };

  // Calculate age at purchase for Step 2
  const ageAtPurchase = useAgeAtPurchase(
    formData.step1?.dateOfBirth,
    step2Form.watch("policyPurchaseDate")
  );

  // Get eligible policies for Step 3
  const eligiblePlans = useAvailablePlansForUser(
    formData.step1?.dateOfBirth,
    formData.step2?.policyPurchaseDate
  );

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white shadow-2xl border-0 p-0">
        {/* Header Section - Law of Common Region */}
        <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-6">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-[#231f20] mb-3" style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}>
              Get Your Free Policy Review
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600">
              Let&apos;s analyze your LIC policy and show you the real returns.
            </DialogDescription>
          </DialogHeader>

          {/* Progress Indicator - Visual Feedback (Doherty Threshold) */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-[#231f20]">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#231f20] to-[#3a3a3a] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Step 1: Personal Information - Law of Proximity & Common Region */}
        {currentStep === 1 && (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-8">
              {/* Form Content - Clear Visual Separation */}
              <div className="px-8 py-6 space-y-6 bg-white">
                {/* Section Title - Law of Prägnanz (Clear Communication) */}
                <div className="pb-2">
                  <h3 className="text-xl font-bold text-[#231f20] mb-1" style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif" }}>
                    Personal Information
                  </h3>
                  <p className="text-sm text-gray-500">
                    We need this to personalize your policy review
                  </p>
                </div>

                {/* Form Fields - Grouped by Law of Proximity */}
                <div className="space-y-5">
                  {/* Name Field - Fitts's Law (Large Click Area) */}
                  <FormField
                    control={step1Form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#231f20] font-semibold text-sm mb-2 block">
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              placeholder="e.g., Rajesh Kumar"
                              {...field}
                              className={cn(
                                "h-12 border-2 rounded-lg transition-all duration-200 text-base pr-12",
                                step1Form.formState.errors.name
                                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                                  : field.value && !step1Form.formState.errors.name
                                  ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                                  : "border-gray-200 focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10"
                              )}
                            />
                          </FormControl>
                          {field.value && !step1Form.formState.errors.name && (
                            <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-4 top-1/2 -translate-y-1/2" />
                          )}
                        </div>
                        {step1Form.formState.errors.name && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{step1Form.formState.errors.name.message}</span>
                          </div>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Date of Birth Field - Jakob's Law (Familiar Pattern) */}
                  <FormField
                    control={step1Form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-[#231f20] font-semibold text-sm mb-2">
                          Date of Birth <span className="text-red-500">*</span>
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full h-12 pl-4 pr-12 text-left font-normal border-2 rounded-lg transition-all duration-200 text-base relative",
                                  step1Form.formState.errors.dateOfBirth
                                    ? "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                                    : field.value && !step1Form.formState.errors.dateOfBirth
                                    ? "border-green-500 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                                    : "border-gray-200 hover:border-[#231f20] focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10",
                                  !field.value && "text-gray-400"
                                )}
                              >
                                {field.value ? (
                                  <span className="text-[#231f20]">{format(field.value, "PPP")}</span>
                                ) : (
                                  <span className="text-gray-400">Select your date of birth</span>
                                )}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                  {field.value && !step1Form.formState.errors.dateOfBirth && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  )}
                                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                                </div>
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-4 bg-white shadow-2xl border-2 border-gray-200" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              captionLayout="dropdown"
                              fromYear={1940}
                              toYear={new Date().getFullYear()}
                              className="rounded-lg bg-white"
                            />
                          </PopoverContent>
                        </Popover>
                        {step1Form.formState.errors.dateOfBirth && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{step1Form.formState.errors.dateOfBirth.message}</span>
                          </div>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Helper Text - Postel's Law (Be Liberal in What You Accept) */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Your information is secure and will only be used to generate your policy review.</span>
                  </p>
                </div>
              </div>

              {/* Form Actions - Law of Common Region (Footer Section) */}
              <div className="flex justify-between gap-3 px-8 py-6 bg-gray-50 border-t border-gray-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="h-12 px-6 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition-all duration-200 font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!step1Form.formState.isValid}
                  className="h-12 px-8 bg-[#231f20] text-white hover:bg-[#3a3a3a] rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#231f20]"
                >
                  Continue to Next Step →
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 2: Policy Purchase Date */}
        {currentStep === 2 && (
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-8">
              {/* Form Content */}
              <div className="px-8 py-6 space-y-6 bg-white">
                {/* Section Title */}
                <div className="pb-2">
                  <h3 className="text-xl font-bold text-[#231f20] mb-1" style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif" }}>
                    Policy Information
                  </h3>
                  <p className="text-sm text-gray-500">
                    When did you purchase your LIC policy?
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-5">
                  {/* Policy Purchase Date Field */}
                  <FormField
                    control={step2Form.control}
                    name="policyPurchaseDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-[#231f20] font-semibold text-sm mb-2">
                          Policy Purchase Date <span className="text-red-500">*</span>
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full h-12 pl-4 pr-12 text-left font-normal border-2 rounded-lg transition-all duration-200 text-base relative",
                                  step2Form.formState.errors.policyPurchaseDate
                                    ? "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                                    : field.value && !step2Form.formState.errors.policyPurchaseDate
                                    ? "border-green-500 hover:border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                                    : "border-gray-200 hover:border-[#231f20] focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10",
                                  !field.value && "text-gray-400"
                                )}
                              >
                                {field.value ? (
                                  <span className="text-[#231f20]">{format(field.value, "PPP")}</span>
                                ) : (
                                  <span className="text-gray-400">Select policy purchase date</span>
                                )}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                  {field.value && !step2Form.formState.errors.policyPurchaseDate && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  )}
                                  <CalendarIcon className="w-5 h-5 text-gray-400" />
                                </div>
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-4 bg-white shadow-2xl border-2 border-gray-200" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("2000-01-01")
                              }
                              initialFocus
                              captionLayout="dropdown"
                              fromYear={2000}
                              toYear={new Date().getFullYear()}
                              className="rounded-lg bg-white"
                            />
                          </PopoverContent>
                        </Popover>
                        {step2Form.formState.errors.policyPurchaseDate && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{step2Form.formState.errors.policyPurchaseDate.message}</span>
                          </div>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Age Display - Immediate Feedback */}
                {ageAtPurchase !== null && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6 animate-in slide-in-from-top-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-900 mb-0">Your age at purchase</p>
                        <p className="text-2xl font-bold text-green-700 mb-0">{ageAtPurchase} years</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Helper Text */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>This helps us calculate your policy returns accurately based on the policy tenure.</span>
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-between gap-3 px-8 py-6 bg-gray-50 border-t border-gray-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="h-12 px-6 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition-all duration-200 font-semibold"
                >
                  ← Back
                </Button>
                <Button
                  type="submit"
                  disabled={!step2Form.formState.isValid}
                  className="h-12 px-8 bg-[#231f20] text-white hover:bg-[#3a3a3a] rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#231f20]"
                >
                  Continue to Next Step →
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 3: Select Policy Plan */}
        {currentStep === 3 && (
          <Form {...step3Form}>
            <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-8">
              {/* Form Content */}
              <div className="px-8 py-6 space-y-6 bg-white">
                {/* Section Title */}
                <div className="pb-2">
                  <h3 className="text-xl font-bold text-[#231f20] mb-1" style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif" }}>
                    Select Your Policy Plan
                  </h3>
                  <p className="text-sm text-gray-500">
                    Choose the LIC policy plan you purchased
                  </p>
                </div>

                {/* Policy Count Info */}
                {eligiblePlans.length > 0 && (
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
                    <p className="text-sm text-purple-900 font-medium mb-0">
                      ✓ {eligiblePlans.length} eligible {eligiblePlans.length === 1 ? 'plan' : 'plans'} found based on your age and purchase date
                    </p>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-5">
                  {/* Policy Selection Field */}
                  <FormField
                    control={step3Form.control}
                    name="selectedPolicy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#231f20] font-semibold text-sm mb-2 block">
                          Policy Plan <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className={cn(
                              "w-full h-12 px-4 border-2 rounded-lg transition-all duration-200 text-base bg-white cursor-pointer",
                              step3Form.formState.errors.selectedPolicy
                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                                : field.value && !step3Form.formState.errors.selectedPolicy
                                ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                                : "border-gray-200 focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10",
                              !field.value && "text-gray-400"
                            )}
                          >
                            <option value="" disabled className="text-gray-400">
                              Select your policy plan
                            </option>
                            {eligiblePlans.map((planName) => {
                              // Get policy to show module
                              const policies = policyDataService.getPoliciesByPlanName(planName);
                              const moduleNumber = policies[0]?.Module || "";
                              
                              return (
                                <option key={planName} value={planName} className="text-[#231f20]">
                                  {planName} ({moduleNumber})
                                </option>
                              );
                            })}
                          </select>
                        </FormControl>
                        {step3Form.formState.errors.selectedPolicy && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{step3Form.formState.errors.selectedPolicy.message}</span>
                          </div>
                        )}
                        {field.value && !step3Form.formState.errors.selectedPolicy && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-green-600 animate-in slide-in-from-top-1">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">Policy plan selected</span>
                          </div>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Show selected policy module as badge */}
                  {step3Form.watch("selectedPolicy") && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Module Classification:</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[#231f20] text-white">
                          {policyDataService.getPoliciesByPlanName(step3Form.watch("selectedPolicy"))[0]?.Module}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* No Eligible Policies */}
                {eligiblePlans.length === 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-900 flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>No eligible policies found for your age and purchase date. Please verify your information.</span>
                    </p>
                  </div>
                )}

                {/* Helper Text */}
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-900 flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>We&apos;ve filtered the policies based on your age at purchase and the policy availability dates.</span>
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-between gap-3 px-8 py-6 bg-gray-50 border-t border-gray-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="h-12 px-6 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition-all duration-200 font-semibold"
                >
                  ← Back
                </Button>
                <Button
                  type="submit"
                  disabled={!step3Form.formState.isValid || eligiblePlans.length === 0}
                  className="h-12 px-8 bg-[#231f20] text-white hover:bg-[#3a3a3a] rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#231f20]"
                >
                  Continue to Next Step →
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <div className="space-y-0">
            <div className="px-8 py-6 bg-white">
              <div className="max-w-md mx-auto">
                {/* Section Title */}
                <div className="text-center pb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#231f20] mb-2" style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}>
                    Review Your Information
                  </h3>
                  <p className="text-sm text-gray-500">
                    Please verify your details before submitting
                  </p>
                </div>

                {/* Summary */}
                <div className="space-y-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-600">Full Name:</span>
                    <span className="text-base font-medium text-[#231f20]">{formData.step1?.name || "N/A"}</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-600">Date of Birth:</span>
                    <span className="text-base font-medium text-[#231f20]">
                      {formData.step1?.dateOfBirth ? format(formData.step1.dateOfBirth, "PPP") : "N/A"}
                    </span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-600">Policy Purchase Date:</span>
                    <span className="text-base font-medium text-[#231f20]">
                      {formData.step2?.policyPurchaseDate ? format(formData.step2.policyPurchaseDate, "PPP") : "N/A"}
                    </span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-gray-600">Selected Policy:</span>
                    <span className="text-base font-medium text-[#231f20]">{formData.step3?.selectedPolicy || "N/A"}</span>
                  </div>
                  {formData.step3?.selectedPolicy && (
                    <>
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-semibold text-gray-600">Module:</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-[#231f20] text-white">
                          {policyDataService.getPoliciesByPlanName(formData.step3.selectedPolicy)[0]?.Module}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-between gap-3 px-8 py-6 bg-gray-50 border-t border-gray-100">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(3)}
                className="h-12 px-6 border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 rounded-lg transition-all duration-200 font-semibold"
              >
                ← Back
              </Button>
              <Button
                onClick={() => {
                  console.log("Final form data:", formData);
                  // TODO: Submit to API
                  handleClose();
                }}
                className="h-12 px-8 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Submit Review Request
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

