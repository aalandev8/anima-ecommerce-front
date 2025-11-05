import { useCart } from "@/hooks/useCart";

export const OrderSidebar = () => {
  const {
    cartItems,
    totalPrice,
    removeFromCart: handleRemoveItem,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
  } = useCart();

  return (
    <div className="w-96 bg-white border-l border-gray-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold">Mi Pedido</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Tu pedido está vacío</p>
            <p className="text-gray-500 text-sm mt-2">
              Agrega productos para comenzar
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 flex-1">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <span className="text-gray-600">−</span>
                    </button>

                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-600">+</span>
                    </button>
                  </div>
                  <span className="font-bold text-gray-900">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="border-t border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">
              ${Number(totalPrice || 0).toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Realizar Pedido
          </button>
          <button
            onClick={handleClearCart}
            className="w-full text-gray-600 text-sm hover:text-gray-900 transition-colors"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};
