import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Lock,
  Camera,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";

const ProfileCreationPage = () => {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative p-10 overflow-hidden">
        {/* Overlay */}
        <div className="  bg-gray-50 "></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-center ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight ">
              CREATE YOUR
              <span className="block text-red-500">PROFILE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className=" px-3 mb-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid lg:grid-cols-2"
          >
            {/* LEFT PANEL */}
            <div className="relative hidden lg:flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black p-16 overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>

              <div className="relative z-10">
                <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                  PREMIUM MEMBERSHIP
                </p>

                <h2 className="text-5xl font-bold text-white leading-tight tracking-tight mb-8">
                  Build Your
                  <span className="block text-red-500">
                    Automotive Identity
                  </span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-10">
                  Manage appointments, service history, premium offers, and
                  personalized vehicle support — all in one elegant dashboard.
                </p>

                {/* Benefits */}
                <div className="space-y-5">
                  {[
                    "Premium Customer Support",
                    "Track Service History",
                    "Priority Appointments",
                    "Exclusive Member Offers",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center text-red-500">
                        <ShieldCheck size={18} />
                      </div>

                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-10 md:p-14">
              {/* Mobile Heading */}
              <div className="lg:hidden mb-10 text-center">
                <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                  CREATE ACCOUNT
                </p>

                <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                  Join TYRE WORLD
                </h2>

                <p className="text-gray-600">Create your premium account</p>
              </div>

              {/* Profile Upload */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gray-100 border border-gray-200 overflow-hidden flex items-center justify-center shadow-md">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Profile Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={50} className="text-gray-400" />
                    )}
                  </div>

                  {/* Upload Button */}
                  <label className="absolute bottom-1 right-1 w-11 h-11 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg">
                    <Camera size={18} className="text-white" />

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <p className="text-gray-500 text-sm mt-4">
                  Upload profile photo
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="password"
                      placeholder="Create password"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 accent-red-600"
                  />

                  <p className="text-gray-600 text-sm leading-relaxed">
                    I agree to the Terms & Conditions and Privacy Policy of TYRE
                    WORLD.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg mt-6"
                >
                  Create Profile
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Bottom */}
              <div className="mt-8 text-center">
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                    Sign In
                  </span>
                </p>
              </div>
            </div>
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

export default ProfileCreationPage;
