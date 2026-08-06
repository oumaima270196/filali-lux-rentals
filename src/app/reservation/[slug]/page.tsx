"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getCarBySlug } from "@/data/cars";

const AEROPORTS = [
  "Aéroport Fès-Saïss (FEZ)",
  "Aéroport Casablanca Mohammed V (CMN)",
  "Aéroport Marrakech Menara (RAK)",
  "Aéroport Rabat-Salé (RBA)",
  "Aéroport Tanger Ibn Battouta (TNG)",
  "Aéroport Agadir Al Massira (AGA)",
];

export default function ReservationPage() {
  const params = useParams<{ slug: string }>();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const car = getCarBySlug(slug);

  const [villeDepart, setVilleDepart] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [heureDepart, setHeureDepart] = useState("");
  const [dateRetour, setDateRetour] = useState("");
  const [heureRetour, setHeureRetour] = useState("");
  const [nomComplet, setNomComplet] = useState("");
  const [telephone, setTelephone] = useState("");

  const [villeRetour, setVilleRetour] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [priseEnChargeAeroport, setPriseEnChargeAeroport] = useState(false);
  const [aeroportDepart, setAeroportDepart] = useState("");
  const [retourAeroport, setRetourAeroport] = useState(false);
  const [aeroportRetour, setAeroportRetour] = useState("");

  const [erreur, setErreur] = useState("");

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-2xl font-semibold text-white">
          Véhicule introuvable
        </p>
      </div>
    );
  }

  const champsRequisRemplis =
    villeDepart.trim() !== "" &&
    dateDepart.trim() !== "" &&
    heureDepart.trim() !== "" &&
    dateRetour.trim() !== "" &&
    heureRetour.trim() !== "" &&
    nomComplet.trim() !== "" &&
    telephone.trim() !== "";

  function handleContinuerSurWhatsApp() {
    if (!champsRequisRemplis) {
      setErreur("Merci de remplir tous les champs obligatoires.");
      return;
    }
    setErreur("");

    const lignes: string[] = [];

    lignes.push("Bonjour Filali Lux Rentals, je souhaite réserver le véhicule suivant :");
    lignes.push("");
    lignes.push(`Véhicule : ${car!.name}`);
    lignes.push("");
    lignes.push(`Ville de départ : ${villeDepart}`);
    if (villeRetour.trim() !== "") {
      lignes.push(`Ville de retour : ${villeRetour}`);
    }
    lignes.push(`Date de départ : ${dateDepart}`);
    lignes.push(`Heure de départ : ${heureDepart}`);
    lignes.push(`Date de retour : ${dateRetour}`);
    lignes.push(`Heure de retour : ${heureRetour}`);

    if (priseEnChargeAeroport && aeroportDepart.trim() !== "") {
      lignes.push(`Prise en charge à l'aéroport : ${aeroportDepart}`);
    }
    if (retourAeroport && aeroportRetour.trim() !== "") {
      lignes.push(`Retour à l'aéroport : ${aeroportRetour}`);
    }

    lignes.push("");
    lignes.push(`Nom complet : ${nomComplet}`);
    lignes.push(`Téléphone : ${telephone}`);
    if (email.trim() !== "") {
      lignes.push(`Email : ${email}`);
    }
    if (message.trim() !== "") {
      lignes.push("");
      lignes.push(`Message : ${message}`);
    }

    const texte = lignes.join("\n");
    const url = `https://wa.me/212609984424?text=${encodeURIComponent(texte)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[48%_52%] gap-10 md:gap-16 items-center mb-20">
          <div className="group relative w-full h-80 sm:h-[26rem] md:h-[34rem] rounded-[2rem] overflow-hidden border border-yellow-500/40 shadow-[0_20px_80px_-20px_rgba(212,175,55,0.35)] transition-shadow duration-500 hover:shadow-[0_25px_100px_-15px_rgba(212,175,55,0.5)]">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />
            <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-500/40 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-yellow-400 font-semibold">
                Véhicule Premium
              </span>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-yellow-500/80 font-semibold mb-4">
              Filali Lux Rentals
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 leading-[1.05]">
              {car.name}
            </h1>
            <div className="h-px w-16 bg-gradient-to-r from-yellow-500 to-transparent mb-8" />

            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                À partir de
              </p>
              <p className="flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  {car.pricePerDay}
                </span>
                <span className="text-2xl font-semibold text-yellow-500">
                  MAD
                </span>
                <span className="text-base text-gray-400 font-medium">
                  /jour
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group/card bg-gradient-to-b from-neutral-900 to-neutral-950 border border-yellow-500/20 rounded-2xl p-5 transition-all duration-300 hover:border-yellow-500/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
                <div className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover/card:bg-yellow-500/20">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3v18M3 9h18M3 15h18"
                    />
                  </svg>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Transmission
                </p>
                <p className="font-semibold text-white text-base">
                  {car.transmission}
                </p>
              </div>

              <div className="group/card bg-gradient-to-b from-neutral-900 to-neutral-950 border border-yellow-500/20 rounded-2xl p-5 transition-all duration-300 hover:border-yellow-500/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
                <div className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover/card:bg-yellow-500/20">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-4-4 4 4 0 014 4z"
                    />
                  </svg>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Places
                </p>
                <p className="font-semibold text-white text-base">
                  {car.seats}
                </p>
              </div>

              <div className="group/card bg-gradient-to-b from-neutral-900 to-neutral-950 border border-yellow-500/20 rounded-2xl p-5 transition-all duration-300 hover:border-yellow-500/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
                <div className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover/card:bg-yellow-500/20">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4h16v16H4zM9 4v16"
                    />
                  </svg>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Portes
                </p>
                <p className="font-semibold text-white text-base">
                  {car.doors}
                </p>
              </div>

              <div className="group/card bg-gradient-to-b from-neutral-900 to-neutral-950 border border-yellow-500/20 rounded-2xl p-5 transition-all duration-300 hover:border-yellow-500/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)]">
                <div className="w-9 h-9 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3 transition-colors duration-300 group-hover/card:bg-yellow-500/20">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1">
                  Puissance
                </p>
                <p className="font-semibold text-white text-base">
                  {car.horsepower} ch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de réservation */}
        <div className="bg-gradient-to-b from-neutral-950 to-black border border-yellow-500/30 rounded-[2rem] p-6 sm:p-12 shadow-[0_20px_100px_-20px_rgba(212,175,55,0.15)]">
          <p className="uppercase tracking-[0.3em] text-[11px] text-yellow-500/70 font-semibold mb-3">
            Étape finale
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-yellow-500">
            Réservez votre véhicule
          </h2>
          <p className="text-gray-400 mb-10 text-sm">
            Complétez le formulaire ci-dessous.
            <br />
            Nous vous contacterons dans les plus brefs délais.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {/* Ville de départ */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Ville de départ <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                value={villeDepart}
                onChange={(e) => setVilleDepart(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                placeholder="Ville de départ"
              />
            </div>

            {/* Ville de retour (optionnel) */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Ville de retour{" "}
                <span className="text-gray-500">(optionnel)</span>
              </label>
              <input
                type="text"
                value={villeRetour}
                onChange={(e) => setVilleRetour(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                placeholder="Ville de retour (optionnel)"
              />
            </div>

            {/* Date de départ */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Date de départ <span className="text-yellow-500">*</span>
              </label>
              <input
                type="date"
                value={dateDepart}
                onChange={(e) => setDateDepart(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
              />
            </div>

            {/* Heure de départ */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Heure de départ <span className="text-yellow-500">*</span>
              </label>
              <input
                type="time"
                value={heureDepart}
                onChange={(e) => setHeureDepart(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
              />
            </div>

            {/* Date de retour */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Date de retour <span className="text-yellow-500">*</span>
              </label>
              <input
                type="date"
                value={dateRetour}
                onChange={(e) => setDateRetour(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
              />
            </div>

            {/* Heure de retour */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Heure de retour <span className="text-yellow-500">*</span>
              </label>
              <input
                type="time"
                value={heureRetour}
                onChange={(e) => setHeureRetour(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
              />
            </div>

            {/* Nom complet */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Nom complet <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text"
                value={nomComplet}
                onChange={(e) => setNomComplet(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                placeholder="Votre nom et prénom"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Téléphone <span className="text-yellow-500">*</span>
              </label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                placeholder="+212 6XX XXX XXX"
              />
            </div>

            {/* Email (optionnel) */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email <span className="text-gray-500">(optionnel)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                placeholder="vous@exemple.com"
              />
            </div>

            {/* Message (optionnel) */}
            <div className="sm:col-span-2">
              <label className="block text-sm mb-2 text-gray-300">
                Message <span className="text-gray-500">(optionnel)</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300 resize-none"
                placeholder="Précisions supplémentaires..."
              />
            </div>
          </div>

          {/* Options aéroport */}
          <div className="mt-10 border-t border-yellow-500/20 pt-8 space-y-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-200 font-medium">
                  Prise en charge à l&apos;aéroport
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={priseEnChargeAeroport}
                  onClick={() =>
                    setPriseEnChargeAeroport(!priseEnChargeAeroport)
                  }
                  className={`relative inline-flex h-7 w-[3.25rem] items-center rounded-full transition-colors duration-300 border ${
                    priseEnChargeAeroport
                      ? "bg-yellow-500/90 border-yellow-400"
                      : "bg-neutral-800 border-yellow-500/30"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-black shadow-md transition-transform duration-300 ${
                      priseEnChargeAeroport ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  priseEnChargeAeroport
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="sm:max-w-md">
                    <label className="block text-sm mb-2 text-gray-300">
                      Aéroport de départ
                    </label>
                    <select
                      value={aeroportDepart}
                      onChange={(e) => setAeroportDepart(e.target.value)}
                      className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                    >
                      <option value="">Sélectionnez un aéroport</option>
                      {AEROPORTS.map((aeroport) => (
                        <option key={aeroport} value={aeroport}>
                          {aeroport}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-200 font-medium">
                  Retour à l&apos;aéroport
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={retourAeroport}
                  onClick={() => setRetourAeroport(!retourAeroport)}
                  className={`relative inline-flex h-7 w-[3.25rem] items-center rounded-full transition-colors duration-300 border ${
                    retourAeroport
                      ? "bg-yellow-500/90 border-yellow-400"
                      : "bg-neutral-800 border-yellow-500/30"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-black shadow-md transition-transform duration-300 ${
                      retourAeroport ? "translate-x-7" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  retourAeroport
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="sm:max-w-md">
                    <label className="block text-sm mb-2 text-gray-300">
                      Aéroport de retour
                    </label>
                    <select
                      value={aeroportRetour}
                      onChange={(e) => setAeroportRetour(e.target.value)}
                      className="w-full bg-black border border-yellow-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/60 focus:border-yellow-500 transition-all duration-300"
                    >
                      <option value="">Sélectionnez un aéroport</option>
                      {AEROPORTS.map((aeroport) => (
                        <option key={aeroport} value={aeroport}>
                          {aeroport}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {erreur && (
            <p className="mt-6 text-sm text-red-500 font-medium">{erreur}</p>
          )}

          <button
            onClick={handleContinuerSurWhatsApp}
            className="mt-10 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-green-400 hover:via-yellow-500 hover:to-yellow-600 shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-[1.02]"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.48 1.34 4.994L2 22l5.144-1.32a9.96 9.96 0 004.86 1.238h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.182-2.928-7.07a9.935 9.935 0 00-7.073-2.848zm0 18.176a8.21 8.21 0 01-4.184-1.144l-.3-.178-3.053.783.815-2.978-.196-.306a8.176 8.176 0 01-1.253-4.356c0-4.518 3.677-8.195 8.195-8.195 2.19 0 4.248.853 5.795 2.4a8.14 8.14 0 012.4 5.795c0 4.518-3.677 8.179-8.219 8.179z" />
            </svg>
            Continuer sur WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}