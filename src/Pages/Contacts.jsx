import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import Navbar from "../components/Navbar";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    description:
      "128 Old MMA Market, South Ukkadam, Coimbatore, Tamil Nadu - 641001",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 9443378630",
  },
  {
    icon: Mail,
    title: "Email Address",
    description: "info@tyreworld.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Mon - Sat : 9:00 AM - 8:00 PM",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    name: "Facebook",
  },
  {
    icon: Instagram,
    name: "Instagram",
  },
  {
    icon: Twitter,
    name: "Twitter",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              GET IN TOUCH
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              CONTACT
              <span className="block text-red-500">TYRE WORLD</span>
            </h1>

            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Connect with our automotive experts for premium tyre solutions,
              professional guidance, and exceptional customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold mb-5">
                CONTACT INFORMATION
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
                Let’s Start A<span className="block">Conversation</span>
              </h2>

              <div className="w-20 h-1 bg-red-600 mb-8"></div>

              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Whether you need premium tyres, wheel alignment, balancing
                services, or expert automotive guidance, our team is ready to
                assist you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-5"
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0">
                        <Icon size={28} />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-5">
                  Follow Us
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <button
                        key={index}
                        className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 shadow-md hover:scale-105"
                      >
                        <Icon size={22} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Top Accent */}
                <div className="h-2 bg-gradient-to-r from-red-600 to-red-700"></div>

                <div className="p-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                    Send Us A Message
                  </h3>

                  <p className="text-gray-600 mb-10 leading-relaxed">
                    Fill out the form below and our team will get back to you as
                    soon as possible.
                  </p>

                  {/* FORM */}
                  <form className="space-y-6">
                    {/* Name + Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-3">
                          Full Name
                        </label>

                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-3">
                          Phone Number
                        </label>

                        <input
                          type="text"
                          placeholder="Enter phone number"
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">
                        Message
                      </label>

                      <textarea
                        rows="6"
                        placeholder="Write your message..."
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg"
                    >
                      Send Message
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              OUR LOCATION
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Visit Our Showroom
            </h2>

            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Experience premium tyre solutions and professional automotive
              services at our state-of-the-art showroom.
            </p>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Tyre World Location"
              src="https://www.google.com/maps?q=South+Ukkadam+Coimbatore&output=embed"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Premium Automotive Care Starts Here
            </h2>

            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect with TYRE WORLD today and experience world-class tyre
              services designed for performance, safety, and reliability.
            </p>

            <button className="bg-white text-red-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Book An Appointment
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center text-gray-400">
            © {new Date().getFullYear()} TYRE WORLD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
