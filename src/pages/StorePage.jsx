import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStore } from "@/api/stores";
import { useProductsByStore } from "@/api/products";
import { StoreHeader } from "@/components/store/StoreHeader";
import { CategoryTabs }from "@/components/store/CategoryTabs";
import { ProductList } from "@/components/store/ProductList";
import { OrderSidebar }  from "@/components/cart/OrderSidebar";
import { addToCart } from "../redux/slices/cartSlice";

const StorePage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null);

  const { data: storeData, isLoading: isLoadingStore, isError: isStoreError } = useStore(storeId);
  const { data: productsData = [], isLoading: isLoadingProducts, isError: isProductsError } = useProductsByStore(storeId);

  const store = storeData?.data;
  const products = Array.isArray(productsData) ? productsData : [];
  const isLoading = isLoadingStore || isLoadingProducts;
  const isError = isStoreError || isProductsError;

  const categories = useMemo(() => {
    const uniqueCategories = [];
    const categoryIds = new Set();
    products.forEach((product) => {
      if (product.category && !categoryIds.has(product.category.id)) {
        categoryIds.add(product.category.id);
        uniqueCategories.push({
          id: product.category.id,
          name: product.category.name,
        });
      }
    });
    return uniqueCategories;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return activeCategory
      ? products.filter((product) => product.category?.id === activeCategory)
      : products;
  }, [products, activeCategory]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tienda...</p>
        </div>
      </div>
    );
  }

  if (isError || !store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-4">
            Error al cargar la tienda. Por favor intenta nuevamente.
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
