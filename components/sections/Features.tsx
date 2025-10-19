"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, PieChart, Shield } from "lucide-react";

const products = [
  {
    title: "Policy Analysis & Scoring",
    returns: "Get detailed policy performance analysis",
    tenure: "Comprehensive review in minutes",
    examples: [
      { name: "Overall Policy Score", rate: "0-5 Rating", period: "Instant" },
      { name: "Return Analysis", rate: "Real vs Expected", period: "Detailed" }
    ],
    icon: TrendingUp,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Alternative Comparison",
    returns: "Compare with better investment options",
    tenure: "See what you're missing",
    examples: [
      { name: "Mutual Funds", rate: "10-15% Returns", amount: "Better than Policy" },
      { name: "Fixed Deposits", rate: "7-8% Returns", amount: "Guaranteed" }
    ],
    icon: PieChart,
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Actionable Recommendations",
    returns: "Clear next steps for your money",
    tenure: "Continue or switch decision",
    examples: [
      { name: "Surrender Analysis", rate: "Break-even Point", period: "Exact Calculation" },
      { name: "Switch Strategy", rate: "Better Alternatives", period: "Step-by-step" }
    ],
    icon: Shield,
    color: "bg-purple-50 border-purple-200"
  }
];

export default function Features() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 uppercase tracking-wider mb-4"
          >
            WHAT WE OFFER?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
          >
            Get Better Returns: Compare Your Policy with <span className="text-[rgb(0,150,138)]">Mutual Funds, FDs, and Bonds</span> for up to <span className="text-[rgb(0,150,138)]">14% returns</span>.
          </motion.h2>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${product.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              {/* Product Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <product.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
              </div>

              {/* Product Details */}
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-600">{product.returns}</p>
                <p className="text-sm text-gray-600">{product.tenure}</p>
              </div>

              {/* Examples */}
              <div className="space-y-3 mb-6">
                {product.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="bg-white rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </div>
                      <div>
                        <p className="font-medium text-black text-sm">{example.name}</p>
                        <p className="text-xs text-gray-500">
                          {example.rate} {example.period && `for ${example.period}`}
                          {example.amount && `for ${example.amount}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full bg-[rgb(2,54,125)] text-white py-3 rounded-lg font-medium hover:bg-[rgb(1,40,95)] transition-all duration-300 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}