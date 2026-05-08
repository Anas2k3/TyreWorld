import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                TYRE WORLD
              </h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium quality tyres and professional
              automotive services. We provide top brands, expert installation,
              and unmatched customer service.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              {[
                { name: "Facebook", icon: "📘", color: "hover:text-blue-400" },
                { name: "Instagram", icon: "📷", color: "hover:text-pink-400" },
                { name: "Twitter", icon: "🐦", color: "hover:text-blue-300" },
                { name: "YouTube", icon: "📺", color: "hover:text-red-400" },
              ].map((social) => (
                <button
                  key={social.name}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">
                    128 Old MMA Market , South Ukkadam
                  </p>
                  <p className="text-gray-300">
                    Coimbatore , Tamil Nadu - 641001
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-3">📞</span>
                <a
                  href="tel:+919443378630"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  +91 9443378630
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-3">✉️</span>
                <a
                  href="mailto:info@tyreworld.com"
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  info@tyreworld.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-3">🕒</span>
                <div>
                  <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Showcase */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-center mb-6 text-gray-300">
            Trusted by Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-80">
            {/* Brands will be handled in individual pages if needed */}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-6">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-red-100">
                Get the latest offers and tyre maintenance tips
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-white/40 flex-grow min-w-0"
              />
              <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tyre World. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Sitemap",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
