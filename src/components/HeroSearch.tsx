"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSearch() {
  const router = useRouter();

  const [city, setCity] = useState("");
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [category, setCategory] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const dateError =
    pickup !== "" &&
    returnDate !== "" &&
    returnDate < pickup;

  function handleSearch() {
    if (dateError) return;

    const params = new URLSearchParams();

    if (city) params.set("city", city);
    if (pickup) params.set("pickup", pickup);
    if (returnDate) params.set("return", returnDate);
    if (category) params.set("category", category);

    router.push(`/flotte?${params.toString()}`);
  }

  return (
    <motion.div
    id="search"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      }}
      className="mt-10 max-w-6xl w-full"
    >
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.45)] hover:border-yellow-500/40 hover:shadow-yellow-500/10 transition-all duration-500 p-6">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="📍 Ville de départ"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
          />

          <input
            type="date"
            min={today}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
          />

          <input
            type="date"
            min={pickup || today}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-yellow-500 focus:bg-white/10 transition-all"
          >
            <option value="" className="text-black">
              Toutes catégories
            </option>
            <option value="Économique" className="text-black">
              Économique
            </option>
            <option value="Citadine" className="text-black">
              Citadine
            </option>
            <option value="Berline" className="text-black">
              Berline
            </option>
            <option value="SUV" className="text-black">
              SUV
            </option>
            <option value="Premium" className="text-black">
              Premium
            </option>
            <option value="Luxe" className="text-black">
              Luxe
            </option>
          </select>

          <button
            onClick={handleSearch}
            className="rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-4 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            🔍 Rechercher
          </button>

        </div>

        {dateError && (
          <p className="mt-4 text-sm text-red-400">
            La date de retour doit être postérieure à la date de départ.
          </p>
        )}

      </div>
    </motion.div>
  );
}