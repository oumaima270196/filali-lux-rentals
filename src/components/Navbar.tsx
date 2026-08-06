"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
   const handleScroll = () => {
  setScrolled(window.scrollY > 40);

  const sections = ["home", "flotte", "services", "contact"];

  for (const id of sections) {
    const section = document.getElementById(id);

    if (
      section &&
      window.scrollY >= section.offsetTop - 120 &&
      window.scrollY < section.offsetTop + section.offsetHeight - 120
    ) {
      setActive(id);
    }
  }
};

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-[family:var(--font-cinzel)] text-[20px] lg:text-[24px] font-medium tracking-[0.18em] text-yellow-500 uppercase transition-all duration-300"
        >
          FILALI LUX RENTALS
        </a>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">

          <a href="#home" className="hover:text-yellow-500 transition">
            Accueil
          </a>

          <a href="#flotte" className="hover:text-yellow-500 transition">
            Notre Flotte
          </a>

          <a href="#services" className="hover:text-yellow-500 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          <span className="hidden md:block text-sm text-gray-300">
            FR | EN | العربية
          </span>

          <a
  href="#search"
  className="bg-yellow-500 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 text-black font-bold px-6 py-2 rounded-xl inline-flex items-center justify-center"
>
  Réserver
</a>

        </div>

      </div>
    </nav>
  );
}