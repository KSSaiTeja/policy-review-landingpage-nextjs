"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart, Smartphone, BarChart, Users } from "lucide-react";

const features = [
  {
    title: "Most Insurance Policies Give Only 4-6% Returns",
    description: "While you could earn 10-15% with better alternatives",
    visual: (
      <div className="bg-gray-100 rounded-xl p-4 h-32 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-1">4-6%</div>
          <div className="text-sm text-gray-600">Your Insurance Policy</div>
          <div className="text-xs text-gray-500">Actual Returns</div>
        </div>
      </div>
    ),
    icon: BarChart3
  },
  {
    title: "Compare Returns: Policy vs Better Options",
    description: "See how much more you could earn with alternatives",
    visual: (
      <div className="bg-gray-100 rounded-xl p-4 h-32 flex items-center justify-center">
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Insurance Policy</span>
            <div className="w-12 h-4 bg-red-300 rounded"></div>
            <span className="text-sm font-medium">5%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Mutual Funds</span>
            <div className="w-20 h-4 bg-blue-400 rounded"></div>
            <span className="text-sm font-medium">12%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Bonds</span>
            <div className="w-18 h-4 bg-green-400 rounded"></div>
            <span className="text-sm font-medium">10%</span>
          </div>
        </div>
      </div>
    ),
    icon: TrendingUp
  },
  {
    title: "Diversify Your Portfolio for Better Returns",
    description: "Spread risk across multiple high-return investments",
    visual: (
      <div className="bg-gray-100 rounded-xl p-4 h-32 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">MF</span>
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">FD</span>
          </div>
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">S</span>
          </div>
        </div>
      </div>
    ),
    icon: PieChart
  }
];

export default function HowItWorks() {
  return (
    <section id="about" className="py-20 bg-white">
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
            WHAT IS POLICYREVIEW?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
          >
            Your Insurance Policy vs Better Alternatives: <span className="text-[rgb(0,150,138)]">See the Real Numbers</span>
          </motion.h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Visual */}
              <div className="mb-4">
                {feature.visual}
              </div>

              {/* Content */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[rgb(2,54,125)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[rgb(1,40,95)] transition-all duration-300"
          >
            Review My Policy FREE
          </motion.button>
        </div>
      </div>
    </section>
  );
}