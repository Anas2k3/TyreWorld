import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import tyreImage from "../assets/pexels-athena-3417679.jpg";

// Import all your local brand images
import Bridgestone from "../assets/Bridgestone.jpeg";
import Continental from "../assets/Continental.jpeg";
import Goodyear from "../assets/Goodyear Tyre India offers wide range of high….jpeg"; // You might want to rename this file
import JKtyre from "../assets/jktyre.jpeg"; // You might want to rename this file
import Michelin from "../assets/Michelin Logo and symbol, meaning, history, PNG, brand.jpeg"; // You might want to rename this file
import MRF from "../assets/mrf.jpeg";
import Pirelli from "../assets/Pirelli.jpeg";
import Vredestein from "../assets/Vredestein.webp";

const HomePage = () => {
  const servicesRef = useRef(null);
  const [brands, setBrands] = useState([]);

  // Initialize brands with local images
  useEffect(() => {
    const brandsData = [
      {
        name: "Bridgestone",
        logo: Bridgestone,
        className: "h-12",
      },
      {
        name: "Pirelli",
        logo: Pirelli,
        className: "h-10",
      },
      {
        name: "Michelin",
        logo: Michelin,
        className: "h-14",
      },
      {
        name: "Continental",
        logo: Continental,
        className: "h-10",
      },
      {
        name: "Goodyear",
        logo: Goodyear,
        className: "h-12",
      },
      {
        name: "MRF",
        logo: MRF,
        className: "h-14",
      },
      {
        name: "JK Tyre",
        logo: JKtyre,
        className: "h-12",
      },
      {
        name: "Vredestein",
        logo: Vredestein,
        className: "h-10",
      },
    ];
    setBrands(brandsData);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Horizontal scroll animation variants
  const containerVariants = {
    animate: {
      x: [0, -1200],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  const containerVariantsReverse = {
    animate: {
      x: [-1200, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={tyreImage}
          alt="Tyre Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 zz bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            WELCOME TO <span className="text-red-500">TYRE WORLD</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Premium Quality Tyres for Every Vehicle. Drive Safe, Drive
            Confident.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              SHOP NOW
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Brands Section with Local Images */}
      <section className="py-16 bg-gray-900 overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            OUR BRANDS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
            Premium tyre brands trusted by millions worldwide
          </p>
        </div>

        {/* First scrolling row */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex space-x-16 items-center"
            variants={containerVariants}
            animate="animate"
          >
            {brands.map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 min-w-[200px] h-28 flex items-center justify-center border-2 border-gray-300 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              >
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`${brand.className} max-w-full object-contain transition-all duration-300 group-hover:scale-105`}
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className =
                        "text-gray-800 font-bold text-lg text-center";
                      fallback.textContent = brand.name;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`brand-duplicate-${index}`}
                className="flex-shrink-0 bg-white rounded-2xl p-6 min-w-[200px] h-28 flex items-center justify-center border-2 border-gray-300 hover:border-red-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
              >
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={`${brand.className} max-w-full object-contain transition-all duration-300 group-hover:scale-105`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Brand names row for mobile */}
        <div className="block md:hidden mt-8">
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {brands.map((brand, index) => (
              <span
                key={`mobile-brand-${index}`}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20 bg-gray-100" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Tyre Fitting", "Wheel Alignment", "Tyre Repair"].map(
              (service, index) => (
                <div
                  key={service}
                  className="service-card bg-white p-6 rounded-lg shadow-lg transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2"
                  style={{
                    opacity: 0,
                    transform:
                      index === 0
                        ? "translateX(-100%)"
                        : index === 2
                        ? "translateX(100%)"
                        : "translateY(-50px)",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    {service}
                  </h3>
                  <p className="text-gray-600">
                    Professional {service.toLowerCase()} services with premium
                    quality products and expert technicians.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}
      <section
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-200"
        ref={servicesRef}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-red-600 bg-clip-text text-transparent">
              OUR SERVICES
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tyre services with cutting-edge technology and expert
              craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tyre Fitting",
                description:
                  "Professional tyre installation with state-of-the-art equipment and precision balancing",
                icon: "🔧",
                features: [
                  "Precision Fitting",
                  "Computer Balancing",
                  "Torque Control",
                ],
                gradient: "from-blue-500 to-cyan-500",
                delay: 0,
              },
              {
                title: "Wheel Alignment",
                description:
                  "Advanced alignment services to ensure optimal vehicle handling and tyre longevity",
                icon: "🎯",
                features: [
                  "Laser Alignment",
                  "4-Wheel Adjustment",
                  "Suspension Check",
                ],
                gradient: "from-green-500 to-emerald-500",
                delay: 200,
              },
              {
                title: "Tyre Repair",
                description:
                  "Expert puncture repairs and damage assessment to keep you safely on the road",
                icon: "🛠️",
                features: [
                  "Puncture Repair",
                  "Damage Assessment",
                  "Quality Patches",
                ],
                gradient: "from-orange-500 to-red-500",
                delay: 400,
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="service-card group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
                style={{
                  opacity: 0,
                  transform:
                    index === 0
                      ? "translateX(-100px) rotate(-5deg)"
                      : index === 2
                        ? "translateX(100px) rotate(5deg)"
                        : "translateY(50px) scale(0.9)",
                  transitionDelay: `${service.delay}ms`,
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  style={{
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitMaskComposite: "subtract",
                  }}
                ></div>

                {/* Content */}
                <div className="relative p-8 z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-3xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-200"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-300"></div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .service-card.visible {
            opacity: 1 !important;
            transform: translate(0, 0) scale(1) rotate(0) !important;
          }

          .service-card {
            backdrop-filter: blur(10px);
          }

          .service-card:hover {
            transform: translateY(-10px) !important;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              WHY CHOOSE TYRE WORLD
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of customers for our commitment to quality,
              expertise, and exceptional service in the automotive industry.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Brands",
                desc: "Genuine products from world-leading manufacturers with full quality certification",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                stat: "50+ Brands",
              },
              {
                title: "Expert Technicians",
                desc: "Certified professionals with extensive training and years of industry experience",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                stat: "25+ Years Experience",
              },
              {
                title: "Competitive Pricing",
                desc: "Transparent pricing with quality guarantees and price match commitment",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                ),
                stat: "Best Value",
              },
              {
                title: "Comprehensive Warranty",
                desc: "Full warranty coverage on all products and professional installation services",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                stat: "5 Year Coverage",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="group text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.desc}
                </p>

                {/* Stat */}
                <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block">
                  <span className="text-sm font-medium text-gray-700">
                    {feature.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "50+", label: "Brands Available" },
                { number: "24/7", label: "Service Support" },
                { number: "5★", label: "Customer Rating" },
              ].map((stat, index) => (
                <div key={stat.label} className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium mt-2 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Professional Service?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with our team of experts for personalized
                recommendations and professional installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Schedule Service
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
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
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Info
              </h3>
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
                    href="tel:+11234567890"
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
                    <p className="text-gray-300">
                      Mon - Fri: 8:00 AM - 6:00 PM
                    </p>
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
              {brands.slice(0, 6).map((brand, index) => (
                <div
                  key={`footer-brand-${index}`}
                  className="bg-white rounded-lg p-3 w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-8 max-w-full object-contain"
                  />
                </div>
              ))}
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
    </div>
  );
};

export default HomePage;
