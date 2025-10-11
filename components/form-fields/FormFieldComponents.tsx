/**
 * Reusable Form Field Components
 * Consistent styling across all form fields
 */

import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Control, FieldValues, Path } from "react-hook-form";

interface SelectFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  errors: any;
  required?: boolean;
}

export function SelectField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  options,
  errors,
  required = true,
}: SelectFieldProps<T>) {
  const error = errors[name];
  const hasValue = control._formValues[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[#231f20] font-semibold text-sm mb-2 block">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <select
              {...field}
              className={cn(
                "w-full h-12 px-4 border-2 rounded-lg transition-all duration-200 text-base bg-white cursor-pointer",
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                  : hasValue && !error
                  ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                  : "border-gray-200 focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10",
                !field.value && "text-gray-400"
              )}
            >
              <option value="" disabled className="text-gray-400">
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value} className="text-[#231f20]">
                  {option.label}
                </option>
              ))}
            </select>
          </FormControl>
          {error && (
            <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{error.message}</span>
            </div>
          )}
          {field.value && !error && (
            <div className="flex items-center gap-1.5 mt-1.5 text-green-600 animate-in slide-in-from-top-1">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">Selected</span>
            </div>
          )}
        </FormItem>
      )}
    />
  );
}

interface NumberFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  errors: any;
  required?: boolean;
  prefix?: string;
}

export function NumberField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  errors,
  required = true,
  prefix,
}: NumberFieldProps<T>) {
  const error = errors[name];
  const hasValue = control._formValues[name];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-[#231f20] font-semibold text-sm mb-2 block">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <div className="relative">
            {prefix && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                {prefix}
              </span>
            )}
            <FormControl>
              <Input
                type="number"
                placeholder={placeholder}
                {...field}
                className={cn(
                  "h-12 border-2 rounded-lg transition-all duration-200 text-base",
                  prefix && "pl-10",
                  error
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10 bg-red-50/50"
                    : hasValue && !error
                    ? "border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/10"
                    : "border-gray-200 focus:border-[#231f20] focus:ring-2 focus:ring-[#231f20]/10"
                )}
              />
            </FormControl>
            {field.value && !error && (
              <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-4 top-1/2 -translate-y-1/2" />
            )}
          </div>
          {error && (
            <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">{error.message}</span>
            </div>
          )}
        </FormItem>
      )}
    />
  );
}

