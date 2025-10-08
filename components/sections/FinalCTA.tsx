"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function FinalCTA() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[20px] bg-[#FBEFE7] px-4 md:px-24 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-3xl md:text-4xl text-[#231f20]" style={{ fontFamily: "var(--font-lora), 'Lora', serif", fontWeight: 400 }}>
                  Ready to Review Your LIC Policy?
                </h3>
                <p className="text-[#231f20]">
                  Join thousands of Indians making <br className="hidden md:block" />
                  informed financial decisions
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center md:justify-end"
              >
                <button
                  onClick={() => setFormOpen(true)}
                  className="miwlo-btn-pill inline-block text-center cursor-pointer"
                >
                  Review Your Policy FREE Now →
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

