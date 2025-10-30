import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import StoreHeader from "../components/store/StoreHeader";
import CategoryTabs from "../components/store/CategoryTabs";
import ProductList from "../components/store/ProductList";
import OrderSidebar from "../components/cart/OrderSidebar";
import { addToCart } from "../redux/slices/cartSlice";

const StorePage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        setLoading(true);
        setError(null);

        const storeResponse = await axios.get(
          `http://localhost:3000/api/stores/${storeId}`
        );
        setStore(storeResponse.data.data);

        const productsResponse = await axios.get(
          `http://localhost:3000/api/products/store/${storeId}`
        );
        const fetchedProducts = productsResponse.data;
        setProducts(fetchedProducts);

        const uniqueCategories = [];
        const categoryIds = new Set();
        fetchedProducts.forEach((product) => {
          if (product.category && !categoryIds.has(product.category.id)) {
            categoryIds.add(product.category.id);
            uniqueCategories.push({
              id: product.category.id,
              name: product.category.name,
            });
          }
        });
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching store data:", err);
        setError("Error al cargar la tienda. Por favor intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    if (storeId) fetchStoreData();
  }, [storeId]);

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category?.id === activeCategory)
    : products;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tienda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-4">
            {error}
          </div>
          <button
            onClick={() => navigate("/stores")}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Volver a tiendas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1">
        <StoreHeader store={store} />

        {categories.length > 0 && (
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        )}

        <ProductList
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          isLoading={false}
          storeId={storeId}
        />
      </div>

      <OrderSidebar />
    </div>
  );
};

export default StorePage;
