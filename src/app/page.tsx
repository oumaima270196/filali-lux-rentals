"use client";
import HeroSearch from "../components/HeroSearch";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Categories from "../components/categories";
import { cars } from "../data/cars";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

     {/* HERO */}
<motion.section
  id="home"
  initial={{ scale: 1.08 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8, ease: "easeOut" }}
  className="relative h-screen overflow-hidden flex items-center justify-center"
>

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/cars/mercedes-gle.jpg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Gold Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl w-full px-8">

    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="uppercase tracking-[6px] text-yellow-400 text-sm"
    >
      FILALI LUX RENTALS
    </motion.span>

    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="mt-6 mb-8"
>
  <h1 className="text-3xl md:text-4xl font-medium text-white">
    Luxury Car Rental
  </h1>

  <p className="mt-2 text-lg text-gray-300">
    Premium fleet • Delivery anywhere in Morocco
  </p>
</motion.div>
    <HeroSearch />



  </div>

  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.8,
    }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2"
  >
    <div className="w-7 h-12 rounded-full border-2 border-yellow-500 flex justify-center">
      <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
    </div>
  </motion.div>

</motion.section>

<section id="flotte">
  <Categories />
</section>

{/* ABOUT */}

      <section
  id="services"
  className="py-24 px-8 max-w-6xl mx-auto"
>

        <h2 className="text-4xl font-bold text-yellow-500 text-center">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Luxury Fleet
            </h3>

            <p className="text-gray-400">
              Drive premium vehicles with comfort,
              elegance and performance.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Airport Delivery
            </h3>

            <p className="text-gray-400">
              We deliver your vehicle directly
              to the airport or your hotel.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              24/7 Support
            </h3>

            <p className="text-gray-400">
              Professional customer service
              available anytime.
            </p>
          </div>

        </div>

      </section>

      {/* CARS */}

      <section className="bg-gray-950 py-24">

        <h2 className="text-4xl font-bold text-center text-yellow-500">
          Our Luxury Cars
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14 px-8">

          {cars.map((car) => (
  <CarCard key={car.slug} car={car} />
))}

        </div>

      </section>

      {/* CONTACT */}

<section
  id="contact"
  className="bg-gray-950 border-t border-yellow-500 py-16 px-8"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-yellow-500 mb-10">
      Contact Us
    </h2>

    <div className="space-y-4 text-lg">

  <a
    href="tel:+212609984424"
    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
  >
    📞 +212 6 09 98 44 24
  </a>

  <a
    href="tel:+212665631606"
    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
  >
    📞 +212 6 65 63 16 06
  </a>

  <a
    href="mailto:filaliluxrentals@gmail.com"
    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
  >
    ✉️ filaliluxrentals@gmail.com
  </a>

  <p className="text-gray-300">
    📍 Agence Casablanca – Aéroport Mohammed V
  </p>

  <p className="text-gray-300">
    📍 Agence Fès – Route Sefrou
  </p>

</div>

  </div>

</section>

    </main>
  );
}