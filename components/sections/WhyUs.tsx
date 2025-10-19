"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "LIC Policy Returns: The Shocking Truth About Your 4-6% Returns",
    description: "Discover why most LIC policies give only 4-6% returns and how you can earn 10-15% with better alternatives. Real numbers, real comparisons.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    category: "Policy Truth",
    categoryColor: "bg-red-100 text-red-800"
  },
  {
    title: "Should You Surrender Your LIC Policy? Complete Guide 2024",
    description: "Learn when to surrender, when to continue, and how to calculate the exact break-even point for your LIC policy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    readTime: "7 min read",
    date: "Dec 12, 2024",
    category: "Policy Guide",
    categoryColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "Mutual Funds vs LIC Policies: Which Gives Better Returns?",
    description: "Detailed comparison showing why mutual funds consistently outperform LIC policies by 5-10% annually. Real case studies included.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    category: "Comparison",
    categoryColor: "bg-green-100 text-green-800"
  }
];

export default function WhyUs() {
  return (
    <section id="tools" className="py-20 bg-white">
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
            POLICYREVIEW SPEAKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mb-8"
          >
            Featured Blogs
          </motion.h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white rounded-lg px-3 py-1 flex items-center gap-2">
                    <div className="w-4 h-4 bg-black rounded"></div>
                    <span className="text-xs font-medium text-black">PolicyReview</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Blogs
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}