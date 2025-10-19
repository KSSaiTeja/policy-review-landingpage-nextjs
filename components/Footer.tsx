export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">PolicyReview</h3>
            <p className="text-gray-400 mb-6">
              India's leading platform for transparent policy analysis and investment guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Policy Review</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Investment Analysis</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Portfolio Optimization</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Risk Assessment</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Naitri</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">SEBI</div>
              <div className="text-xs text-gray-400">Regulated Assets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">AMFI</div>
              <div className="text-xs text-gray-400">Mutual Fund Distributor</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">NSE</div>
              <div className="text-xs text-gray-400">Exchange Member</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">BSE</div>
              <div className="text-xs text-gray-400">Exchange Member</div>
            </div>
          </div>

          {/* Risk Disclaimer */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h5 className="text-sm font-semibold text-white mb-3">Risk Disclaimer</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              Investments in debt instruments are subject to market risks. Please read all scheme related documents carefully before investing. 
              Past performance is not indicative of future results. PolicyReview is not a registered investment advisor and does not provide 
              personalized investment advice. All information provided is for educational purposes only.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>© 2024 PolicyReview. All rights reserved.</p>
            <p className="mt-2">
              PolicyReview is a technology platform that provides policy analysis services. 
              We are not affiliated with LIC or any insurance company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}