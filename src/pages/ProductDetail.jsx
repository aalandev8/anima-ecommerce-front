import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id, storeId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((productData) => {
        if (productData.store_id !== Number(storeId)) {
          setProduct(null);
        } else {
          setProduct(productData);
        }
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id, storeId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Producto no encontrado
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(`/store/${storeId}`)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Volver
      </button>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        <div>
          <img
            src={product.image_url || "https://via.placeholder.com/600"}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
            {product.category?.name}
          </span>

          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-4xl font-bold text-blue-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="font-semibold">Stock: </span>
            <span
              className={product.stock > 0 ? "text-green-600" : "text-red-600"}
            >
              {product.stock > 0 ? `${product.stock} disponibles` : "Agotado"}
            </span>
          </div>

          {product.stock > 0 && (
            <>
              <div className="flex items-center gap-4 mb-6">
                <label className="font-semibold">Cantidad:</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() =>
                      setQuantity(Math.min(product.stock, quantity + 1))
                    }
                    className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
                onClick={() =>
                  alert(`Agregaste ${quantity} productos al carrito`)
                }
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

export default ProductDetail;
