export type Transmission = "Manuelle" | "Automatique";

export type FuelType = "Essence" | "Diesel" | "Hybride" | "Électrique";

export type CarCategory =
  | "Économique"
  | "Citadine"
  | "Berline"
  | "SUV"
  | "Premium"
  | "Luxe"
  | "Utilitaire";

export interface Car {
  slug: string;
  name: string;
  brand: string;
  category: CarCategory;
  transmission: Transmission;
  fuel: FuelType;
  seats: number;
  doors: number;
  horsepower: number;
  luggage: number;
  pricePerDay: number;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  available: boolean;
}