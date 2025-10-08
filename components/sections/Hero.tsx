"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function Hero() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px] pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#231f20] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-lora), 'Lora', serif" }}
            >
              Is Your LIC Policy Really Growing <br className="hidden md:block" />Your Money??
            </motion.h3>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg text-[#231f20] mb-10 max-w-3xl mx-auto"
            >
              Get a FREE transparent review of your LIC policy. Know your real returns, <br className="hidden md:block" />
              compare with FD & Mutual Funds, and make informed decisions.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <button
                onClick={() => setFormOpen(true)}
                className="miwlo-btn-pill inline-block cursor-pointer"
              >
                Review My Policy FREE →
              </button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 relative aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Policy Analysis Dashboard"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Review Form Dialog */}
      <PolicyReviewForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
}

