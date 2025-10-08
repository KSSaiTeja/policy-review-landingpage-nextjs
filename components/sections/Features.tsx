"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    heading: "Comprehensive Policy Score & Analysis",
    subheading: "Get a complete picture of your LIC policy performance with our detailed analysis",
    items: [
      {
        title: "Overall Policy Score (out of 5)",
        description: "Instant rating based on return, liquidity, and safety parameters of your policy",
      },
      {
        title: "Return Timeline Analysis",
        description: "See your returns till date, 3 years, 6 years, and projected at maturity",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    imagePosition: "left",
  },
  {
    heading: "Smart Comparisons & Actionable Insights",
    subheading: "Compare your policy with alternative investment options and get clear recommendations",
    items: [
      {
        title: "Benchmark Comparisons",
        description: "See how your policy stacks against Fixed Deposits, Mutual Funds & Inflation rates",
      },
      {
        title: "AI Assistant - Naitri",
        description: "Get personalized recommendations from our AI assistant for better financial decisions",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imagePosition: "right",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white relative">
      {features.map((feature, featureIndex) => (
        <div key={featureIndex} className="relative mb-20 last:mb-0">
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${feature.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1 relative"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.heading}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl text-[#231f20]"
                  style={{ fontFamily: "var(--font-lora), 'Lora', serif", fontWeight: 400 }}
                >
                  {feature.heading}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[#231f20]"
                >
                  {feature.subheading}
                </motion.p>
                <ul className="space-y-6 mt-8">
                  {feature.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + itemIndex * 0.1 }}
                    >
                      <h4 className="text-xl font-semibold text-[#231f20] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#231f20]">{item.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

