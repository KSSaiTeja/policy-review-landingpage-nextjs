"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "IT Professional, Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    review:
      "I was shocked to see my LIC policy was giving just 4% returns when FDs were offering 7%. PolicyReview showed me the real numbers. I surrendered and invested in mutual funds - best decision ever!",
  },
  {
    name: "Priya Sharma",
    role: "Teacher, Bangalore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    review:
      "The AI assistant Naitri helped me understand complex insurance terms. Now I know exactly where my money is going and what returns to expect. Very transparent platform!",
  },
  {
    name: "Amit Patel",
    role: "Business Owner, Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    review:
      "PolicyReview gave me clarity on 3 different LIC policies I had. The comparison with mutual funds was eye-opening. Saved lakhs by making informed decisions.",
  },
  {
    name: "Sneha Reddy",
    role: "Software Engineer, Hyderabad",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    review:
      "Finally, a platform that shows real returns without any hidden agenda. The detailed analysis helped me decide to continue one policy and exit another. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="section-subheading text-[#797979] mb-3">Customer Success Stories</p>
          <h3 className="section-heading text-3xl md:text-4xl lg:text-5xl text-[#231f20]">
            How PolicyReview Helped Indians Make Better Decisions
          </h3>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.04)] p-8 rounded-[20px] relative"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h5 className="text-lg font-bold text-[#231f20] mb-0">{review.name}</h5>
                  <p className="text-sm text-[#77797c] mb-0">{review.role}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-[#231f20] font-light mb-0">{review.review}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

