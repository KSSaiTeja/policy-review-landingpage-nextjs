"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function CTA() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[20px] bg-[#FBEFE7] px-4 md:px-24">
            <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-0">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-square md:aspect-auto md:h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                    alt="Free Policy Review"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl text-[#231f20]" style={{ fontFamily: "var(--font-lora), 'Lora', serif", fontWeight: 400 }}>
                  100% Free Policy Review - No Hidden Charges
                </h3>
                <p className="text-[#231f20]">
                  Analyze your LIC policy completely FREE <br className="hidden md:block" />
                  Transparent, unbiased, and customer-first approach
                </p>
                <button
                  onClick={() => setFormOpen(true)}
                  className="miwlo-btn-pill inline-block cursor-pointer"
                >
                  Review My Policy Now →
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Review Form Dialog */}
      <PolicyReviewForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
}

