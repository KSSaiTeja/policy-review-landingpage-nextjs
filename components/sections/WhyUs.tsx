"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    title: "100% FREE",
    subtitle: "₹0",
    subtitleText: "Forever",
    description: "No charges, no hidden fees - completely transparent analysis",
    features: [
      "Complete Policy Analysis",
      "Overall Score (out of 5)",
      "Return Timeline (Till Date, 3yr, 6yr, Maturity)",
      "FD & MF Comparisons",
      "Inflation Impact Analysis",
    ],
    linkText: "Review Now →",
  },
  {
    title: "First Movers",
    subtitle: "No. 1",
    subtitleText: "Platform",
    description: "India's first dedicated transparent policy review platform",
    features: [
      "Analyzing ~46 LIC Plans (2015-2024)",
      "AI Assistant - Naitri",
      "Actionable Recommendations",
      "Customer-First Approach",
      "Not Product-Sellers, Solution-Providers",
    ],
    linkText: "Try Now →",
  },
  {
    title: "Trusted",
    subtitle: "₹47L Cr",
    subtitleText: "Market",
    description: "Helping Indians navigate ₹47 Lakh Crore insurance market",
    features: [
      "Unbiased Analysis",
      "Clear Exit & Continue Scenarios",
      "Exact Actionable Numbers",
      "Mission: Financial Awareness",
      "Building India's Most Trusted Platform",
    ],
    linkText: "Get Started →",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-subheading text-[#797979] mb-3">
            India&apos;s First Transparent Policy Review Platform
          </p>
          <h3 className="section-heading text-3xl md:text-4xl lg:text-5xl text-[#231f20]">
            Why PolicyReview.co.in?
          </h3>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative bg-white shadow-[0px_10px_22px_2px_rgb(244,244,244)] rounded-[20px] p-10 overflow-hidden"
            >
              {/* Plan Name */}
              <div className="mb-4">
                <p className="text-lg text-[#231f20] mb-0">{reason.title}</p>
              </div>
              
              {/* Price */}
              <div className="mb-4">
                <p className="text-[#231f20] mb-0">
                  <span className="text-3xl md:text-4xl font-bold">{reason.subtitle}</span> {reason.subtitleText}
                </p>
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <p className="text-[#231f20] mb-0">{reason.description}</p>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 relative pl-8 text-[#231f20]">
                      <span className="absolute left-0 top-1.5 w-6 h-6 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <Link
                href="/review"
                className="relative inline-block text-[#231f20] text-base no-underline group cursor-pointer bg-transparent border-none p-0"
              >
                {reason.linkText}
                <span className="absolute left-0 bottom-0 w-[45%] h-[1px] bg-[#231f20] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

