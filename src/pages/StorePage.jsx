import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStore } from "@/api/stores";
import { useProductsByStore } from "@/api/products";
import { StoreHeader } from "@/components/ui/store/StoreHeader";
import { CategoryTabs } from "@/components/ui/store/CategoryTabs";
import { ProductList } from "@/components/ui/store/ProductList";
import { OrderSidebar } from "../components/ui/cart/OrderSidebar";
import { addToCart } from "../redux/slices/cartSlice";
import { Modal } from "@/components/ui/Modal";
import { ProductModal } from "./ProductModal";

const StorePage = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const {
    data: storeData,
    isLoading: isLoadingStore,
    isError: isStoreError,
  } = useStore(storeId);

  const {
    data: productsData = [],
    isLoading: isLoadingProducts,
    isError: isProductsError,
  } = useProductsByStore(storeId);

  const store = storeData?.data;
  const products = useMemo(
    () => (Array.isArray(productsData) ? productsData : []),
    [productsData]
  );

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
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Volver a tiendas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#FCF4E8]">
      <div className="flex-1">
        <div className="sticky top-0 z-50">
          <StoreHeader store={store} />

          {categories.length > 0 && (
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          )}
        </div>

        <div className="grid grid-cols-4 gap-6 px-2 py-8">
          <div className="col-span-3">
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              isLoading={false}
              storeId={storeId}
              onProductClick={(productId) => setSelectedProductId(productId)}
            />
          </div>

          <div className="sticky mt-10">
            <OrderSidebar />
          </div>
        </div>
      </div>

      <Modal
        isOpen={selectedProductId !== null}
        onClose={() => setSelectedProductId(null)}
      >
        {selectedProductId && (
          <ProductModal
            productId={selectedProductId}
            storeId={storeId}
            onClose={() => setSelectedProductId(null)}
          />
        )}
      </Modal>
    </div>
  );
};

export default StorePage;
