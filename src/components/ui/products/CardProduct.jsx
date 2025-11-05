// src/components/products/CardProduct.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const CardProduct = ({ product, onAddToCart, storeId, showBadge }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {showBadge && (
        <div className="absolute mt-2 ml-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
          Destacado
        </div>
      )}

      <Link to={`/store/${storeId}/product/${product.id}`}>
        <img
          src={product.image_url || "https://via.placeholder.com/400"}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </Link>

      <div className="p-4">
        <Link to={`/store/${storeId}/product/${product.id}`}>
          <h2 className="text-lg font-semibold mb-2 hover:text-blue-600">
            {product.name}
          </h2>
        </Link>

        <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>

        {product.stock > 0 ? (
          <p className="text-green-600 mb-4">{product.stock} disponibles</p>
        ) : (
          <p className="text-red-600 mb-4">Agotado</p>
        )}

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-semibold text-white ${
            product.stock > 0
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
};

