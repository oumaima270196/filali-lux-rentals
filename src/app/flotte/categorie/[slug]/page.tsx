import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/data/cars";

// Libellés d'affichage pour chaque catégorie (slug -> nom lisible)
const CATEGORY_LABELS: Record<string, string> = {
  economique: "Économique",
  citadine: "Citadine",
  berline: "Berline",
  suv: "SUV",
  premium: "Premium",
  luxe: "Luxe",
};

// Supprime les accents et met en minuscule pour comparer proprement
function normalizeSlug(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

type PageProps = {
  // Next.js 15/16 : params est une Promise, plus un objet simple
  params: Promise<{ slug: string }>;
};

export default async function CategoriePage({ params }: PageProps) {
  // Étape critique : on attend la résolution de params avant de l'utiliser
  const { slug: rawSlug } = await params;

  if (!rawSlug) {
    notFound();
  }

  const slug = normalizeSlug(decodeURIComponent(rawSlug));
  const categoryLabel = CATEGORY_LABELS[slug] ?? rawSlug;

  const categoryCars = cars.filter((car) => {
    const carCategory = normalizeSlug(car.category);
    return carCategory === slug;
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Catégorie : <span className="text-amber-400">{categoryLabel}</span>
        </h1>
        <p className="text-gray-400 mb-10">
          {categoryCars.length} véhicule{categoryCars.length > 1 ? "s" : ""}{" "}
          disponible{categoryCars.length > 1 ? "s" : ""}
        </p>

        {categoryCars.length === 0 ? (
          <div className="border border-gray-800 rounded-xl p-10 text-center text-gray-400">
            Aucun véhicule disponible dans cette catégorie pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCars.map((car) => (
              <Link
                key={car.slug}
                href={`/flotte/${car.slug}`}
                className="group border border-gray-800 rounded-xl overflow-hidden hover:border-amber-400 transition-colors"
              >
                <div className="aspect-[16/10] bg-gray-900 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{car.name}</h2>
                  <p className="text-amber-400 mt-1">
                    {car.pricePerDay} MAD / jour
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}