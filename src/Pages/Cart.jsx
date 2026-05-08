import React from "react";
import { motion } from "framer-motion";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";

const cartItems = [
  {
    id: 1,
    name: "Pilot Sport 4",
    brand: "Michelin",
    price: 14200,
    quantity: 2,
    image:
      "https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4q4ur69miibk8gc/4w-238_3528700093414_tire_michelin_pilot-sport-4_245-slash-40-zr18-97y-xl_a_main_2-55_nopad.webp?t=resize&height=700",
  },
  {
    id: 2,
    name: "Potenza Sport",
    brand: "Bridgestone",
    price: 12500,
    quantity: 1,
    image:
      "https://s7g10.scene7.com/is/image/bridgestoneeu/POTENZA-RE050-RFT-01?wid=700&fmt=png-alpha",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
  },
  {
    icon: BadgeCheck,
    title: "Premium Warranty",
  },
];

const CartPage = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 500;
  const tax = 1200;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative py-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              YOUR CART
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Premium Shopping
              <span className="block text-red-600">Experience</span>
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Review your selected premium tyre collection and proceed to secure
              checkout.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CART SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Heading */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Cart Items
              </h2>

              <div className="flex items-center gap-2 text-gray-500">
                <ShoppingBag size={20} />
                <span>{cartItems.length} Items</span>
              </div>
            </div>

            {/* ITEMS */}
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  {/* IMAGE */}
                  <div className="bg-gray-50 flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-44 object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col justify-between">
                    {/* TOP */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div>
                        <p className="text-red-600 uppercase tracking-[0.2em] text-xs font-semibold mb-3">
                          {item.brand}
                        </p>

                        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 leading-relaxed max-w-lg">
                          High-performance premium tyre engineered for precision
                          handling, durability, and superior road grip.
                        </p>
                      </div>

                      {/* REMOVE */}
                      <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300">
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {/* BOTTOM */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-10">
                      {/* QUANTITY */}
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600 font-medium">
                          Quantity
                        </span>

                        <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                            <Minus size={18} />
                          </button>

                          <div className="w-14 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </div>

                          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>

                      {/* PRICE */}
                      <div className="text-right">
                        <p className="text-gray-400 text-sm mb-1">
                          Total Price
                        </p>

                        <h4 className="text-4xl font-bold text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-fit sticky top-28"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* TOP ACCENT */}
              <div className="h-2 bg-gradient-to-r from-red-600 to-red-700"></div>

              <div className="p-8">
                {/* TITLE */}
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">
                  Order Summary
                </h2>

                {/* BENEFITS */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100"
                      >
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-3">
                          <Icon size={22} />
                        </div>

                        <p className="text-xs font-medium text-gray-700 leading-relaxed">
                          {benefit.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* PRICE DETAILS */}
                <div className="space-y-5 border-b border-gray-100 pb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Subtotal</span>

                    <span className="font-semibold text-gray-900">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>

                    <span className="font-semibold text-gray-900">
                      ₹{shipping.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tax</span>

                    <span className="font-semibold text-gray-900">
                      ₹{tax.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="flex items-center justify-between py-8">
                  <span className="text-xl font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-4xl font-bold text-red-600">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {/* CHECKOUT */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg">
                  Proceed To Checkout
                  <ArrowRight size={18} />
                </button>

                {/* CONTINUE SHOPPING */}
                <button className="w-full mt-4 border border-gray-200 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold py-4 rounded-2xl transition-all duration-300">
                  Continue Shopping
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-red-600 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              PREMIUM AUTOMOTIVE CARE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
              Drive With Confidence
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Experience world-class tyre performance, premium safety standards,
              and unmatched automotive excellence with TYRE WORLD.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
              Explore More Products
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

export default CartPage;
