"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    icon: "https://img.icons8.com/fluency/96/form.png",
    title: "1. Enter Your Details",
    description:
      "Provide basic policy information - Purchase date, DOB, plan type, premium amount, and policy term",
  },
  {
    icon: "https://img.icons8.com/fluency/96/combo-chart.png",
    title: "2. Get Smart Analysis",
    description:
      "Our algorithm analyzes your policy returns, compares with FD, Mutual Funds & Inflation",
  },
  {
    icon: "https://img.icons8.com/fluency/96/checked.png",
    title: "3. Make Informed Decisions",
    description:
      "Receive detailed score, return timeline, and actionable insights to maximize your wealth",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-subheading text-[#797979] mb-3">Simple & Transparent</p>
          <h3 className="section-heading text-3xl md:text-4xl lg:text-5xl text-[#231f20]">
            How Policy Review Works
          </h3>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04)] p-12 rounded-[20px] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative pb-8 mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl font-bold text-[#231f20] mb-4">
                {step.title}
              </h4>
              <p className="text-[#231f20] opacity-90 mb-0">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

