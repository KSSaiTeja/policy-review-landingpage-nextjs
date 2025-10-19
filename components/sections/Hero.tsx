"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Play, QrCode } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 leading-tight">
              Is Your Insurance Policy Really{" "}
              <span className="text-[rgb(0,150,138)]">
                Growing Your Money?
              </span>
            </h1>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[rgb(0,150,138)]">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Get 8% to 12.5% better returns than your current policy</span>
              </div>
              <div className="flex items-center gap-3 text-[rgb(0,150,138)]">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Compare with Mutual Funds, FDs, and better alternatives</span>
              </div>
              <div className="flex items-center gap-3 text-[rgb(0,150,138)]">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">100% FREE analysis - No hidden charges, ever</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <Link
                href="/review"
                className="bg-[rgb(2,54,125)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgb(1,40,95)] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
              >
                Review My Policy FREE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>50,000+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Hidden Charges</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Why PolicyReview?</h3>
                  <p className="text-gray-600">See the Truth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">₹0</div>
              <div className="text-sm text-gray-600">Cost - Completely FREE</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">50,000+</div>
              <div className="text-sm text-gray-600">Policies Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">₹47L Cr</div>
              <div className="text-sm text-gray-600">Insurance Market Analyzed</div>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
                <div className="text-sm text-gray-600">Get Started Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}