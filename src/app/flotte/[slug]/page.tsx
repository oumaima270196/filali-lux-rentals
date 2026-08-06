// src/app/flotte/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import CarGallery from "../../../components/gallery/CarGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

const WHATSAPP_NUMBER = "212609984424";

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;

  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par une réservation pour la ${car.name}.`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
const similarCars = cars
  .filter(
    (c) => c.category === car.category && c.slug !== car.slug
  )
  .slice(0, 3);
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/flotte"
          className="inline-block text-sm text-gray-400 hover:text-yellow-400 mb-8"
        >
          ← Retour à la flotte
        </Link>

        <div className="grid lg:grid-cols-2 gap-10">
          <CarGallery name={car.name} mainImage={car.image} gallery={car.gallery} />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs uppercase tracking-widest text-yellow-400 border border-yellow-400 rounded-full px-3 py-1">
                {car.category}
              </span>
              <span
                className={`inline-block text-xs uppercase tracking-widest rounded-full px-3 py-1 ${
                  car.available
                    ? "text-green-400 border border-green-400"
                    : "text-red-400 border border-red-400"
                }`}
              >
                {car.available ? "Disponible" : "Indisponible"}
              </span>
            </div>

            <p className="text-gray-400 mb-1">{car.brand}</p>
            <h1 className="text-4xl font-bold mb-2">{car.name}</h1>

            <p className="text-3xl font-semibold text-yellow-400 mb-6">
              {car.pricePerDay} DH{" "}
              <span className="text-base text-gray-400 font-normal">
                / jour
              </span>
            </p>

            {car.description && (
              <p className="text-gray-300 leading-relaxed mb-8">
                {car.description}
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Transmission</p>
                <p className="font-semibold">{car.transmission}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Carburant</p>
                <p className="font-semibold">{car.fuel}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Places</p>
                <p className="font-semibold">{car.seats}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Portes</p>
                <p className="font-semibold">{car.doors}</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Puissance</p>
                <p className="font-semibold">{car.horsepower} ch</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Coffre</p>
                <p className="font-semibold">{car.luggage} valises</p>
              </div>
            </div>

            {car.features && car.features.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-semibold mb-3">Équipements</h2>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <span className="text-yellow-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/reservation/${car.slug}`}
                className="flex-1 text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-colors"
              >
                Réserver
              </Link>

              
                <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 text-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors"
>
  WhatsApp
</a>
            </div>
            <section className="mt-16">
  <h2 className="text-3xl font-bold mb-8">
    Pourquoi choisir
    <span className="text-yellow-400"> FILALI LUX RENTALS ?</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-[#151515] rounded-2xl p-6 border border-gray-800">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">
        🚗 Véhicules récents
      </h3>
      <p className="text-gray-400">
        Une flotte moderne, entretenue régulièrement pour garantir sécurité et confort.
      </p>
    </div>

    <div className="bg-[#151515] rounded-2xl p-6 border border-gray-800">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">
        📍 Livraison partout au Maroc
      </h3>
      <p className="text-gray-400">
        Livraison à domicile, hôtel, gare ou aéroport dans tout le Royaume.
      </p>
    </div>

    <div className="bg-[#151515] rounded-2xl p-6 border border-gray-800">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">
        🛡️ Assurance incluse
      </h3>
      <p className="text-gray-400">
        Assistance disponible 24h/24 et assurance incluse sur tous nos véhicules.
      </p>
    </div>

    <div className="bg-[#151515] rounded-2xl p-6 border border-gray-800">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">
        ⭐ Service Premium
      </h3>
      <p className="text-gray-400">
        Réservation rapide, service professionnel et satisfaction garantie.
      </p>
    </div>
  </div>
</section>
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-8">
    Véhicules <span className="text-yellow-400">similaires</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {similarCars.map((similarCar) => (
      <div
        key={similarCar.slug}
        className="bg-[#151515] rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition"
      >
        <img
          src={similarCar.image}
          alt={similarCar.name}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">
          <h3 className="text-xl font-bold">
            {similarCar.name}
          </h3>

          <p className="text-yellow-400 font-semibold mt-2">
            À partir de {similarCar.pricePerDay} DH / jour
          </p>

          <Link
            href={`/flotte/${similarCar.slug}`}
            className="mt-5 inline-block w-full text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl"
          >
            Voir détails
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>
          </div>
        </div>
      </div>
    </main>
  );
}