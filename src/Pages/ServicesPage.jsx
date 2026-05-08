import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("core");
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animated");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreServices = [
    {
      id: 1,
      title: "Tyre Selection & Sales",
      subtitle: "Premium Brand Portfolio",
      description:
        "Authorized dealership for world's leading tyre manufacturers including Michelin, Bridgestone, Continental, Pirelli, and MRF. Our experts provide data-driven recommendations based on your vehicle specifications, driving patterns, and performance requirements.",
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
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      specs: [
        "Radial & Tubeless",
        "Performance Tyres",
        "Run-Flat Options",
        "All-Season Range",
      ],
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Tyre Fitting & Replacement",
      subtitle: "Precision Installation",
      description:
        "State-of-the-art automated fitting systems ensure damage-free installation with exact torque specifications. Our technicians follow manufacturer-recommended procedures for optimal bead seating and tyre-to-wheel mating.",
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
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      specs: [
        "Rim Protection",
        "Torque Control",
        "Bead Sealing",
        "Pressure Calibration",
      ],
      image:
        "https://i.pinimg.com/1200x/63/cf/79/63cf79798e2fb9d71c52aca2780dad8b.jpg",
    },
    {
      id: 3,
      title: "3D Computerized Alignment",
      subtitle: "Advanced Geometry Calibration",
      description:
        "High-precision 3D alignment technology measures and adjusts camber, caster, and toe angles to manufacturer specifications. This maximizes tyre life, improves fuel efficiency, and ensures optimal vehicle handling characteristics.",
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
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
      specs: [
        "Camber Adjustment",
        "Caster Alignment",
        "Toe Settings",
        "Thrust Angle",
      ],
      image:
        "https://i.pinimg.com/1200x/27/d8/c2/27d8c2a7ce874a512ef61fd10ae5ded2.jpg",
    },
    {
      id: 4,
      title: "Dynamic Wheel Balancing",
      subtitle: "Vibration-Free Performance",
      description:
        "Laser-precision dynamic balancing eliminates harmonic vibrations across all speed ranges. Using computer-calibrated weight placement (adhesive or clip-on), we ensure perfectly balanced wheel assemblies for a smooth, comfortable ride.",
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
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      specs: [
        "Static Balance",
        "Dynamic Balance",
        "Road Force",
        "Laser Verification",
      ],
      image:
        "https://i.pinimg.com/736x/09/c1/7d/09c17d760b3eada539257a20f8831744.jpg",
    },
    {
      id: 5,
      title: "Nitrogen Inflation",
      subtitle: "Enhanced Pressure Retention",
      description:
        "Industrial-grade nitrogen filling reduces pressure loss by up to 40% compared to compressed air. Nitrogen's larger molecular structure minimizes permeation through tyre rubber, maintaining consistent pressure and reducing operating temperatures.",
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
            strokeWidth={1.5}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      specs: [
        "97% Purity",
        "Pressure Stability",
        "Temperature Reduction",
        "Corrosion Prevention",
      ],
      image:
        "https://i.pinimg.com/1200x/8a/00/65/8a006517d03c64be9dee1c35504ae095.jpg",
    },
  ];

  const specializedServices = [
    {
      id: 6,
      title: "  ",
      description:
        "Premium alloy wheel upgrades with professional fitting services. We stock leading brands including BBS, Enkei, OZ Racing, and local forged options. Our installation process includes hub-centric ring fitting and corrosion-prevention coating.",
      icon: "✨",
      metrics: ["20+ Brands", "Custom Fitment", "Lifetime Warranty"],
    },
    {
      id: 7,
      title: "Puncture Repair & Valve Service",
      description:
        "Professional puncture repairs using industry-standard plug-patch combinations that permanently seal the injury without compromising tyre integrity. Complete valve stem replacement and TPMS service included.",
      icon: "🛠️",
      metrics: ["24/7 Emergency", "Mushroom Plugs", "TPMS Service"],
    },
    {
      id: 8,
      title: "Wheel Rotation & Inspection",
      description:
        "Systematic rotation patterns (cross, forward-cross, or X-pattern) based on your vehicle's drivetrain configuration. Comprehensive inspection covers tread depth, uneven wear patterns, sidewall condition, and structural integrity.",
      icon: "🔄",
      metrics: ["5,000km Interval", "Tread Analysis", "Structural Check"],
    },
    {
      id: 9,
      title: "Plus-Sizing & Modification",
      description:
        "Professional plus-zero, plus-one, and plus-two sizing upgrades for enhanced aesthetics and performance. Our load-rating and speed-rating calculations ensure safety compliance with all modifications.",
      icon: "📐",
      metrics: ["Load Calculations", "Speed Rating", "Rubber Clearance"],
    },
  ];

  const equipmentShowcase = [
    {
      name: "Hunter Engineering Alignment Rack",
      description: "3D Laser Alignment System",
      specs: "±0.01° Accuracy",
    },
    {
      name: "Corghi Tyre Changer",
      description: "Touchless Demount Technology",
      specs: '15"-24" Capacity',
    },
    {
      name: "Hofmann Balancer",
      description: "Road Force Measurement",
      specs: "0.25g Precision",
    },
    {
      name: "Nitrogen Generation System",
      description: "On-Site 97% Purity",
      specs: "Industrial Grade",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section - Professional Dark */}
      <section className="relative h-[70vh] min-h-[550px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/c6/0a/11/c60a118b91af7124981f79bc9653aee4.jpg')",
          }}
        ></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">
                PREMIUM AUTOMOTIVE SERVICES
              </span>
            </div> */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Comprehensive Tyre
              <br />
              <span className="text-red-500">Care Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
              Precision engineering meets automotive excellence — delivered by
              certified technicians using world-class equipment.
            </p>
          </motion.div>
        </div>
      </section>

      <div ref={servicesRef}>
        {/* Core Services Section */}
        {activeTab === "core" && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Core Tyre Services
                </h2>
                <div className="w-16 h-0.5 bg-red-600 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Industry-leading tyre services performed with precision
                  equipment and certified expertise. Every service follows
                  manufacturer specifications and quality standards.
                </p>
              </div>

              <div className="space-y-20">
                {coreServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm tracking-wider mb-4">
                          <span className="w-8 h-px bg-red-600"></span>
                          {service.subtitle}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {service.specs.map((spec, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                        <button className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all duration-300">
                          Learn More
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
                                {service.icon}
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">
                                  Featured Service
                                </p>
                                <p className="font-semibold text-gray-900">
                                  {service.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Specialized Services Section */}
        {activeTab === "specialized" && (
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Specialized Services
                </h2>
                <div className="w-16 h-0.5 bg-red-600 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  Advanced modifications and maintenance services for discerning
                  drivers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {specializedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-5 mb-6">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-3xl group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                          <span className="group-hover:text-white transition-colors">
                            {service.icon}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                        {service.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Equipment Section */}
        {activeTab === "equipment" && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Equipment
                </h2>
                <div className="w-16 h-0.5 bg-red-600 mx-auto mb-6"></div>
                <p className="text-gray-600 text-lg">
                  We invest in industry-leading equipment to deliver precision
                  service every time
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {equipmentShowcase.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 14.88a2 2 0 00-1.022.547 8 8 0 1014.4 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 19a4 4 0 100-8 4 4 0 000 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <span className="inline-block text-xs font-mono text-red-600 bg-red-50 px-2 py-1 rounded">
                      {item.specs}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Quality Commitment Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-sm text-gray-400">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">50k+</div>
              <div className="text-sm text-gray-400">Services Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">4.9★</div>
              <div className="text-sm text-gray-400">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Schedule Your Service Appointment
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our certified technicians are ready to provide professional care
              for your vehicle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Online
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                +91 9443378630
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">TYRE WORLD</h2>
              <p className="text-gray-400 max-w-md">
                Premium automotive service center specializing in professional
                tyre care, wheel alignment, and performance upgrades.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">
                128 Old MMA Market, South Ukkadam, Coimbatore - 641001
              </p>
              <p className="text-gray-400 text-sm mt-2">+91 9443378630</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <p className="text-gray-400 text-sm">
                Mon-Sat: 9:00 AM - 7:00 PM
              </p>
              <p className="text-gray-400 text-sm">
                Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Tyre World. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
