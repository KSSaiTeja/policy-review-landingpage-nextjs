"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--teal-9) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--gray-9) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Is Your Insurance Policy Really{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Growing Your Money?
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Get a <strong>FREE transparent review</strong> of your insurance policy. Know your real returns, compare with FD & Mutual Funds, and make informed decisions that could save you <strong>₹2-5 lakhs</strong>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/review"
              className="btn-primary text-lg px-8 py-4"
            >
              Review My Policy FREE
            </Link>
            <button className="btn-outline text-lg px-8 py-4">
              Learn More
            </button>
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-gray-600">Policies Reviewed</div>
              <div className="text-sm text-teal-600 font-medium mt-1">Save ₹2-5 Lakhs</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">₹500 Cr+</div>
              <div className="text-gray-600">Assets Analyzed</div>
              <div className="text-sm text-teal-600 font-medium mt-1">Average 8-12% Returns</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
              <div className="text-sm text-teal-600 font-medium mt-1">10,000+ Reviews</div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
          >
            <div className="text-sm text-gray-500 font-medium">Trusted by</div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                SEBI
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                IRDAI
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
                AMFI
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gray-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
