import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  // Aquí podrías usar productService.getById(id)
  const product = { id, name: `Producto ${id}`, price: 25, desc: "Descripción demo" };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.desc}</p>
      <p className="text-blue-600 font-bold text-xl mb-6">${product.price}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Agregar al carrito</button>
    </div>
  );
};

export default Product;
