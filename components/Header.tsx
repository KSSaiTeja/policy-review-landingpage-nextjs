"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#products", label: "Our Service" },
    { href: "#about", label: "About Us" },
    { href: "#naitri", label: "Naitri" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="PolicyReview" 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback to text if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-[rgb(2,54,125)] hidden">
                PolicyReview
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 text-base font-medium hover:text-gray-800 transition-all duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="#login"
                className="text-gray-800 text-sm font-medium hover:text-gray-600 transition-all duration-300 border border-gray-300 rounded-full px-4 py-2 hover:border-gray-400 cursor-pointer"
              >
                Login
              </Link>
              <Link
                href="/review"
                className="bg-[rgb(2,54,125)] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[rgb(1,40,95)] transition-all duration-300 cursor-pointer"
              >
                Review FREE
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="PolicyReview" 
                className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to text if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <span className="text-xl font-bold text-[rgb(2,54,125)] hidden">
                PolicyReview
              </span>
            </Link>
            
            <div className="flex items-center gap-3">
              <Link
                href="/review"
                className="bg-[rgb(2,54,125)] text-white text-sm px-4 py-2 rounded-full hover:bg-[rgb(1,40,95)] transition-all duration-300 cursor-pointer"
              >
                Review FREE
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 cursor-pointer"
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
                    className="text-gray-700 hover:text-black transition-colors py-3 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <Link
                    href="#login"
                    className="text-black text-sm font-medium block border border-gray-300 rounded-full px-4 py-2 text-center cursor-pointer"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
}

