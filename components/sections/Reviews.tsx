"use client";

import { motion } from "framer-motion";
import { Heart, Linkedin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "IT Professional",
    company: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "I was shocked to see my insurance policy was giving just 4% returns when FDs were offering 7%. PolicyReview showed me the real numbers. I surrendered and invested in mutual funds - best decision ever! Saved ₹2.5 lakhs in 3 years."
  },
  {
    name: "Priya Sharma",
    title: "Teacher",
    company: "Bangalore",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "The AI assistant Naitri helped me understand complex insurance terms. Now I know exactly where my money is going and what returns to expect. Very transparent platform! My new portfolio gives 12% vs 5% from my old policy."
  },
  {
    name: "Amit Patel",
    title: "Business Owner",
    company: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    quote: "PolicyReview gave me clarity on 3 different insurance policies I had. The comparison with mutual funds was eye-opening. Saved lakhs by making informed decisions. My wealth grew by ₹8 lakhs in 2 years after switching."
  },
  {
    name: "Sneha Reddy",
    title: "Software Engineer",
    company: "Hyderabad",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    quote: "Finally, a platform that shows real returns without any hidden agenda. The detailed analysis helped me decide to continue one policy and exit another. Highly recommended! Increased my returns from 5% to 11%."
  },
  {
    name: "Vikram Singh",
    title: "Bank Manager",
    company: "Pune",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "As a banker, I thought I knew investments. PolicyReview opened my eyes to how much I was losing with my insurance policy. The switch to mutual funds increased my returns by 300%. Thank you for the transparency!"
  },
  {
    name: "Meera Joshi",
    title: "CA",
    company: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    quote: "PolicyReview's detailed return analysis and benchmarking against market alternatives provided the clarity I needed. My clients now get 10-12% returns instead of 4-5% from traditional policies. Game changer!"
  }
];

export default function Reviews() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            TESTIMONIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3"
          >
            Wall of Love <span className="text-[rgb(0,150,138)]">@ PolicyReview</span>
            <Heart className="w-8 h-8 text-red-500 fill-current" />
          </motion.h2>
        </div>

        {/* Single Seamless Testimonials Section */}
        <div 
          className="relative overflow-hidden pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Combined Testimonials with Asymmetric Layout */}
          <div className="flex flex-col gap-8">
            {/* Row 1 - Top Row */}
            <div 
              className="flex gap-6"
              style={{
                animation: isHovered ? 'scrollHorizontal 40s linear infinite paused' : 'scrollHorizontal 40s linear infinite'
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`row1-${testimonial.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-80"
                >
                  {/* Profile */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600 truncate">{testimonial.title}</p>
                      <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                    </div>
                    <Linkedin className="w-4 h-4 text-[rgb(2,54,125)] flex-shrink-0" />
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 - Bottom Row (Offset) */}
            <div 
              className="flex gap-6 ml-40"
              style={{
                animation: isHovered ? 'scrollHorizontal 45s linear infinite paused' : 'scrollHorizontal 45s linear infinite'
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`row2-${testimonial.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-80"
                >
                  {/* Profile */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600 truncate">{testimonial.title}</p>
                      <p className="text-xs text-gray-500 truncate">{testimonial.company}</p>
                    </div>
                    <Linkedin className="w-4 h-4 text-[rgb(2,54,125)] flex-shrink-0" />
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}