import HeroSearch from "@/components/HeroSearch";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function FlottePage({ searchParams }: Props) {
  const { category } = await searchParams;

  const filteredCars = category
    ? cars.filter((car) => car.category === category)
    : cars;

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-3">
          Notre <span className="text-yellow-500">Flotte</span>
        </h1>

        <p className="text-center text-gray-400 mb-14">
          {category
            ? `Catégorie : ${category}`
            : "Découvrez tous nos véhicules."}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>

      </div>
    </main>
  );
}