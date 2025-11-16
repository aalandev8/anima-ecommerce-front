import React, { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { useProduct } from "@/api/products";

export const ProductModal = ({ productId, storeId, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [notes, setNotes] = useState("");

  const { data: product, isLoading, isError } = useProduct(productId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        Producto no encontrado
      </div>
    );
  }

  if (isError || !product || product.store_id !== Number(storeId)) {
    return (
      <div className="flex justify-center items-center">
        Producto no encontrado
      </div>
    );
  }

  return (
    <div>
      <div
        className="
         gap-8 
         px-3
         w-120
        bg-[#FAF7F0] border border-[#d4d4c9] shadow rounded-xl"
      >
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 
          text-2xl flex justify-end-safe"
        >
          ×
        </button>

        <div className="flex justify-center">
          <img
            src={product.image_url || "https://via.placeholder.com/600"}
            alt={product.name}
            className="h-40 object-cover border-2 border-gray-200 shadow rounded-lg"
          />
        </div>

        <div className="flex shadow-md items-center">
          <div className="mr-25">
            <h1 className="text-xl text-black font-bold py-1 mt-5 ">
              {product.name}
            </h1>
            <p className="text-gray-600 w-70 mb-2">{product.description}</p>
          </div>
          <div className="flex justify-items-end">
            <p className="text-md text-black font-bold">${product.price}</p>
          </div>
        </div>

        <div className="mt-5">
          {product.stock > 0 && (
            <>
              <div className="flex justify-center border border-gray-300 p-2 mb-2 gap-4">
                <label className="font-semibold">Unidades:</label>
                <div className="flex items-center gap-2 w-20 h-6 bg-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 h-6 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    className="w-6 h-6 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="block font-semibold mb-2">
                  Notas (opcional):
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Escribe las instrucciones que necesites."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
                  rows="3"
                />
              </div>

              <button
                className="bg-[#6B7B3C] mb-3 w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a6632] transition-colors"
                onClick={() => {
                  addToCart({ ...product, quantity });
                  onClose();
                }}
              >
                Agregar al carrito
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
