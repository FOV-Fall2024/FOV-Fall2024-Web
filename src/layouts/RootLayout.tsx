import React from "react";

function RootLayout() {
  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-white shadow-lg">
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="h-8" />
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Menu
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500">
              Contact
            </a>
          </nav>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
            Order Now
          </button>
          <button className="px-4 py-2 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white">
            Reservation
          </button>
        </div>
      </header>

      <section className="relative flex items-center justify-between p-10 bg-green-100">
        <div className="space-y-6 lg:w-1/2">
          <h1 className="text-5xl font-bold text-green-900">Italian Cuisine</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae lacus et diam ultrices sagittis.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600">
              Order Now
            </button>
            <button className="px-6 py-3 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white">
              Reservation
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden w-1/2 lg:block">
          <img
            src="hero-image.png"
            alt="Dish Image"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      <section className="p-10 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Popular Menu</h2>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="px-4 py-2 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white">
              All
            </button>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-green-500 hover:text-white">
              Dinner
            </button>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-green-500 hover:text-white">
              Lunch
            </button>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-green-500 hover:text-white">
              Dessert
            </button>
          </div>
        </div>
        <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
            <img
              src="dish1.png"
              alt="Spaghetti"
              className="w-full h-40 mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold">Spaghetti</h3>
            <p className="text-gray-500">$12.06</p>
            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section className="p-10 bg-white">
        <h2 className="text-4xl font-bold text-center">Our Greatest Chef</h2>
        <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center">
            <img
              src="chef1.png"
              alt="Chef Name"
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold">Betram Kanon</h3>
            <p className="text-gray-500">Head Chef</p>
          </div>
        </div>
      </section>

      <section className="p-10 bg-green-50">
        <h2 className="text-4xl font-bold text-center">Our Customers Say</h2>
        <div className="flex justify-center mt-10 space-x-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="customer1.png"
              alt="Customer Name"
              className="w-16 h-16 mb-4 rounded-full"
            />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mt-2 font-semibold text-gray-900">Stacie Virgan</p>
          </div>
        </div>
      </section>

      <footer className="p-10 bg-gray-800 text-white">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold">We are open from</h3>
            <p className="mt-2">Monday - Sunday</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button className="px-6 py-3 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600">
              Order Now
            </button>
            <button className="px-6 py-3 mt-4 ml-4 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white">
              Reservation
            </button>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500">
          <p>&copy; 2024 Delizioso. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
