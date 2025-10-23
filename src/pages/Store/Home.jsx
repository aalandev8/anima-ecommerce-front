import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    { id: 1, name: "Producto 1", price: 25 },
    { id: 2, name: "Producto 2", price: 40 },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tienda</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(p => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-blue-600 font-bold">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
