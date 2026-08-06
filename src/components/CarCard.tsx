import Link from "next/link";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={car.image}
        alt={car.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {car.name}
        </h2>

        <p className="text-yellow-600 text-xl font-bold mt-2">
          À partir de {car.pricePerDay} DH / jour
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5 text-gray-700">

          <p>⚙️ {car.transmission}</p>

          <p>👥 {car.seats} places</p>

          <p>🚪 {car.doors} portes</p>

          <p>🐎 {car.horsepower} CV</p>

        </div>

        <div className="flex gap-3 mt-6">

          <Link
            href={`/flotte/${car.slug}`}
            className="flex-1 bg-black text-white py-3 rounded-xl text-center hover:bg-gray-800"
          >
            Voir détails
          </Link>

          <Link
  href={`/reservation/${car.slug}`}
  className="flex-1 bg-yellow-500 text-black py-3 rounded-xl text-center font-semibold hover:bg-yellow-400"
>
  Réserver
</Link>

        </div>

      </div>

    </div>
  );
}