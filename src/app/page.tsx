export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900">

        <h1 className="text-6xl font-bold text-yellow-500">
          FILALI LUX RENTALS
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Luxury Car Rental in Morocco
        </p>

        <p className="mt-3 text-gray-400 max-w-2xl">
          Mercedes, BMW, Audi, Range Rover...
          Premium service with delivery anywhere in Morocco.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Book Now
          </button>

          <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl transition">
            View Cars
          </button>
        </div>

      </section>

      {/* ABOUT */}

      <section className="py-24 px-8 max-w-6xl mx-auto">

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

          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              Mercedes GLE
            </h3>

            <p className="text-gray-400 mt-4">
              Automatic • Diesel • SUV
            </p>

            <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
              Reserve
            </button>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              BMW X5
            </h3>

            <p className="text-gray-400 mt-4">
              Automatic • Diesel • Luxury SUV
            </p>

            <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
              Reserve
            </button>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold">
              Range Rover Sport
            </h3>

            <p className="text-gray-400 mt-4">
              Automatic • Premium SUV
            </p>

            <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">
              Reserve
            </button>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold text-yellow-500">
          Contact Us
        </h2>

        <p className="mt-6 text-gray-400">
          WhatsApp: +212 6 XX XX XX XX
        </p>

        <p className="text-gray-400">
          Email: contact@filaliluxrentals.com
        </p>

      </section>

    </main>
  );
}