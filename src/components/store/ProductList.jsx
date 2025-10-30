import { CardProduct } from "@/components/products/CardProduct";

export const ProductList = ({ products, onAddToCart, isLoading, storeId }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-gray-600 text-lg">No hay productos disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            storeId={storeId}
            showBadge={product.isBestSeller || product.featured}
          />
        ))}
      </div>
    </div>
  );
};

