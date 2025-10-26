// src/components/product/CardProduct.jsx
import React from 'react';

const CardProduct = ({ product, onAddToCart, showBadge = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col relative">
      {/* Badge Más Vendido */}
      {showBadge && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
          Más vendido
        </div>
      )}
      
      {/* Imagen */}
      {product.image_url && (
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      
      {/* Contenido */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
          {product.description && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">${parseFloat(product.price).toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;