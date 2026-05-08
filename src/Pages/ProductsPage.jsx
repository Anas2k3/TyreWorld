import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const tyreProducts = [
  {
    id: 1,
    name: "Potenza Sport",
    brand: "Bridgestone",
    category: "performance",
    price: 12500,
    rating: 4.8,
    image:
      "https://s7g10.scene7.com/is/image/bridgestoneeu/POTENZA-RE050-RFT-01?wid=700&fmt=png-alpha",
    features: ["Wet Grip", "Sport Performance"],
  },
  {
    id: 2,
    name: "Pilot Sport 4",
    brand: "Michelin",
    category: "performance",
    price: 14200,
    rating: 4.9,
    image:
      "https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4q4ur69miibk8gc/4w-238_3528700093414_tire_michelin_pilot-sport-4_245-slash-40-zr18-97y-xl_a_main_2-55_nopad.webp?t=resize&height=700",
    features: ["Precision Handling", "Ultra Performance"],
  },
  {
    id: 3,
    name: "EcoContact 6",
    brand: "Continental",
    category: "eco",
    price: 11200,
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLeL8BXqOvvgZmthfVKjc3B3R2QHYXtjOdZg&s",
    features: ["Eco Friendly", "Low Noise"],
  },
  {
    id: 4,
    name: "Cinturato P7",
    brand: "Pirelli",
    category: "suv",
    price: 16800,
    rating: 4.7,
    image:
      "https://assets.pirelli.com/is/image/pirelli/cinturato-p7-new-render?scl=1",
    features: ["SUV Optimized", "Comfort Ride"],
  },
  {
    id: 5,
    name: "ZVTS",
    brand: "MRF",
    category: "budget",
    price: 6500,
    rating: 4.3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ATYejTIRBk6vZmyaq-kFK2T4aSMc4V7uCA&s",
    features: ["Durable", "City Driving"],
  },
  {
    id: 6,
    name: "Alnac 4G",
    brand: "Apollo",
    category: "budget",
    price: 7200,
    rating: 4.4,
    image:
      "https://www.apollotyres.com/content/dam/orbit/syncforce/products/1009/T0016365.png",
    features: ["Reliable", "Good Mileage"],
  },
];

const categories = ["all", "performance", "suv", "eco", "budget"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return tyreProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              PREMIUM COLLECTION
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
              PERFORMANCE
              <span className="block text-red-500">MEETS PRECISION</span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
              Discover world-class tyre collections engineered for safety,
              luxury, comfort, and unmatched road performance.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl flex items-center p-3">
                <Search className="text-gray-400 ml-3" size={22} />

                <input
                  type="text"
                  placeholder="Search premium tyres..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 outline-none text-gray-800"
                />

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="relative -mt-12 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl capitalize font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              OUR COLLECTION
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Tyre Lineup
            </h2>

            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Carefully curated tyre collections from the world's most trusted
              manufacturers — designed for superior driving experience and
              uncompromising safety.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="bg-gray-50 p-10 flex items-center justify-center h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Brand */}
                  <p className="text-red-600 text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                    {product.brand}
                  </p>

                  {/* Name */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />

                    <span className="text-gray-700 font-medium">
                      {product.rating}
                    </span>

                    <span className="text-gray-400">•</span>

                    <span className="text-gray-500 capitalize">
                      {product.category}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">
                        Starting From
                      </p>

                      <h4 className="text-3xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </h4>
                    </div>

                    <button className="group/button bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      View
                      <ArrowRight
                        size={18}
                        className="group-hover/button:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left */}
              <div className="p-12 md:p-16">
                <p className="text-red-500 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                  ELITE PERFORMANCE
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Built For Drivers Who Expect More
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                  Experience superior grip, enhanced durability, exceptional
                  comfort, and cutting-edge tyre technology trusted by
                  professionals worldwide.
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Explore Services
                </button>
              </div>

              {/* Right Image */}
              <div className="h-full">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Car"
                  className="w-full h-full object-cover min-h-[500px]"
                />
              </div>
            </div>
          </div>
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

export default ProductsPage;
