import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Économique",
    image: "/images/categories/economique.jpg",
    count: 10,
    slug: "economique",
  },
  {
    name: "Citadine",
    image: "/images/categories/citadine.jpg",
    count: 6,
    slug: "citadine",
  },
  {
    name: "Berline",
    image: "/images/categories/berline.jpg",
    count: 2,
    slug: "berline",
  },
  {
    name: "SUV",
    image: "/images/categories/suv.jpg",
    count: 5,
    slug: "suv",
  },
  {
    name: "Premium",
    image: "/images/categories/premium.jpg",
    count: 7,
    slug: "premium",
  },
  {
    name: "Luxe",
    image: "/images/categories/luxe.jpg",
    count: 6,
    slug: "luxe",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-white">
            Nos catégories
          </h2>

          <p className="text-gray-400 mt-4">
            Trouvez facilement le véhicule qui correspond à vos besoins.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {categories.map((category) => (

            <div
              key={category.slug}
              className="group bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-yellow-500 transition duration-300"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>

                <p className="text-gray-400 mb-6">
                  {category.count} véhicules disponibles
                </p>

                <Link
                  href={`/flotte/categorie/${category.slug}`}
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
                >
                  Découvrir
                </Link>

              </div>

            </div>

         ))}

        </div>

      </div>

    </section>
  );
}