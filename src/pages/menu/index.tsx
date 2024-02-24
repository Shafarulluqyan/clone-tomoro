import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

// Data menu kopi
const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "A shot of concentrated coffee.",
    price: "$2.50",
    image: "https://example.com/espresso.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with frothed milk and steamed milk.",
    price: "$3.50",
    image: "https://example.com/cappuccino.jpg",
  },
  // Tambahkan menu kopi lainnya di sini
];

export default function Menu() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {coffeeMenu.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-gray-800 font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
      <div></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
