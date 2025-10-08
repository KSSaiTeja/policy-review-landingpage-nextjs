"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import PolicyReviewForm from "@/components/PolicyReviewForm";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const navItems = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#why-us", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-[100px]">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-gray-900">
              PolicyReview
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#231f20] text-lg capitalize hover:text-[#231f20] transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#231f20] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => setFormOpen(true)}
                className="miwlo-btn-pill cursor-pointer"
              >
                Review My Policy - FREE
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <Link href="/" className="text-lg font-bold text-gray-900">
              PolicyReview
            </Link>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFormOpen(true)}
                className="bg-[#231f20] text-white text-sm px-4 py-2 rounded-full hover:bg-transparent hover:text-[#231f20] border-2 border-transparent hover:border-[#231f20] transition-all duration-300 cursor-pointer"
              >
                Review FREE
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-gray-900 transition-colors py-3"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Policy Review Form Dialog */}
      <PolicyReviewForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
}

