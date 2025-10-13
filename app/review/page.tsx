"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, Clock, FileText, TrendingUp, Award } from "lucide-react";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function ReviewPage() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleFormClose = (open: boolean) => {
    if (!open) {
      setIsFormOpen(false);
      setTimeout(() => {
        router.push('/');
      }, 200);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Policy Review</h1>
            </div>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side - Information Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hero Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}>
                  Get Your Free LIC Policy Review
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Make informed decisions about your LIC policy with our comprehensive, 
                  transparent analysis - completely free, no hidden charges.
                </p>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                <Award className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-sm text-green-800 font-medium">
                  Trusted by thousands of Indians for unbiased policy analysis
                </p>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span>What You&apos;ll Get</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Naitri Score (0-5)</h4>
                    <p className="text-sm text-gray-600">Overall rating based on return, liquidity, and risk</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Analysis</h4>
                    <p className="text-sm text-gray-600">Today, 3 years, 6 years, and at maturity projections</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Benchmark Comparison</h4>
                    <p className="text-sm text-gray-600">Compare with Inflation, Bank FD, and Mutual Funds</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Recommendations</h4>
                    <p className="text-sm text-gray-600">Actionable insights from Naitri, your financial friend</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Downloadable PDF Report</h4>
                    <p className="text-sm text-gray-600">Take your comprehensive report anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Trust Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100% Free Forever</p>
                    <p className="text-sm text-gray-600">No hidden charges, ever</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Unbiased Analysis</p>
                    <p className="text-sm text-gray-600">We don&apos;t sell products</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quick & Easy</p>
                    <p className="text-sm text-gray-600">Get results in under 3 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-900 mb-1">Your Privacy Matters</p>
                  <p>Your policy information is secure and will only be used to generate your personalized review report. We never share your data with third parties.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <PolicyReviewForm 
              open={isFormOpen} 
              onOpenChange={handleFormClose}
            />
          </div>
        </div>
      </div>

      {/* Footer Trust Badges */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-sm text-gray-600 mt-1">Free Analysis</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-600">~46</p>
              <p className="text-sm text-gray-600 mt-1">LIC Plans Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">&lt;3min</p>
              <p className="text-sm text-gray-600 mt-1">Quick Review</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-600">₹0</p>
              <p className="text-sm text-gray-600 mt-1">No Hidden Fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

