import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/Reviews";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <CTA />
      
      {/* Final Urgency CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Let Your Money Sleep in <span className="text-[rgb(0,150,138)]">Low-Return Policies</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every day you wait, you're losing potential returns. Join 50,000+ Indians who've already discovered the truth about their policies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/review"
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Review My Policy Now - FREE
            </Link>
            <div className="text-sm text-gray-400">
              ⚡ Takes only 2 minutes • 100% Free • No hidden charges
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

