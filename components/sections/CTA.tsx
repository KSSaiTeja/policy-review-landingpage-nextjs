"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Shield, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Is Your Insurance Policy Really <span className="text-[rgb(0,150,138)]">Worth It?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take our 2-minute assessment to discover if your policy is growing your money or just eating it away. Get instant recommendations.
            </p>
            <button className="bg-[rgb(2,54,125)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgb(1,40,95)] transition-all duration-300 inline-flex items-center gap-2">
              Check My Policy FREE
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 flex items-center justify-center">
              {/* Investment Personality Icons */}
              <div className="relative w-64 h-64">
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>

                {/* Policy Analysis Types */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">4%</span>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">12%</span>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">MF</span>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-xs font-bold">FD</span>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                  <line x1="128" y1="0" x2="128" y2="64" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="128" y1="192" x2="128" y2="256" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="0" y1="128" x2="64" y2="128" stroke="#e5e7eb" strokeWidth="2" />
                  <line x1="192" y1="128" x2="256" y2="128" stroke="#e5e7eb" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}