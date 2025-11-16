import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/redux/slices/cartSlice";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  Check,
  Shield,
  RefreshCw,
} from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id, currentQuantity) => {
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleClearCart = () => {
    if (window.confirm("¿Estás seguro de que querés vaciar el carrito?")) {
      dispatch(clearCart());
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleGoToRestaurants = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FCF4E8] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-[#e2dcc7] p-12">
              {/* ✨ VERDE UNIFICADO #6B7B3C */}
              <div className="w-32 h-32 mx-auto mb-6 bg-[#6B7B3C] rounded-full flex items-center justify-center shadow-md">
                <ShoppingBag className="w-16 h-16 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-[#3e2c24] mb-3">
                Tu carrito está vacío
              </h2>

              <p className="text-[#5c4033] mb-8 text-lg">
                ¡Agregá productos para comenzar tu pedido!
              </p>

              {/* ✨ VERDE UNIFICADO #6B7B3C */}
              <button
                onClick={handleGoToRestaurants}
                className="inline-flex items-center gap-2 px-8 py-4 
                bg-[#6B7B3C] text-white rounded-xl font-medium
                hover:bg-[#5a6632] hover:shadow-lg hover:scale-105 
                transition-all duration-200"
              >        
                Ver Restaurantes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCF4E8] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-[#5c4033] 
              hover:text-[#3e2c24] transition mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>

            <div className="flex items-center gap-3">
              {/* ✨ VERDE UNIFICADO #6B7B3C */}
              <div className="w-12 h-12 bg-[#6B7B3C] rounded-xl flex items-center justify-center shadow-md">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#3e2c24]">
                  Carrito de Compras
                </h1>
                <p className="text-[#5c4033]">
                  {totalQuantity}{" "}
                  {totalQuantity === 1 ? "producto" : "productos"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-[#e2dcc7] 
                  p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 bg-[#f8f4ef] rounded-lg overflow-hidden">
                      <img
                        src={item.image || "/placeholder-product.jpg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1 min-w-0 pr-2">
                          <h3 className="text-lg font-semibold text-[#3e2c24] truncate">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-[#5c4033] mt-1 line-clamp-2">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-9 h-9 flex-shrink-0 rounded-lg 
                          bg-red-50 hover:bg-red-100 text-red-600
                          flex items-center justify-center transition"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 bg-[#f8f4ef] rounded-lg p-1">
                          <button
                            onClick={() =>
                              handleDecrement(item.id, item.quantity)
                            }
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 rounded-lg bg-white 
                            hover:bg-[#e2dcc7] text-[#3e2c24] 
                            flex items-center justify-center transition
                            disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <span className="w-10 text-center font-medium text-[#3e2c24]">
                            {item.quantity}
                          </span>

                          {/* ✨ VERDE UNIFICADO #6B7B3C */}
                          <button
                            onClick={() =>
                              handleIncrement(item.id, item.quantity)
                            }
                            className="w-8 h-8 rounded-lg bg-[#6B7B3C] 
                            hover:bg-[#5a6632] text-white 
                            flex items-center justify-center transition"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-xl font-bold text-[#3e2c24]">
                            ${(Number(item.price) * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-[#5c4033]">
                              ${Number(item.price).toFixed(2)} c/u
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={handleClearCart}
                className="w-full py-3 text-sm text-red-600 hover:text-red-700 
                hover:bg-red-50 rounded-lg transition font-medium"
              >
                Vaciar Carrito
              </button>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-[#e2dcc7] p-6 sticky top-20">
                <h2 className="text-xl font-bold text-[#3e2c24] mb-4">
                  Resumen del Pedido
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[#5c4033]">
                    <span>Subtotal ({totalQuantity} items)</span>
                    <span className="font-medium">
                      ${Number(totalPrice).toFixed(2)}
                    </span>
                  </div>

                  {/* ✨ VERDE UNIFICADO #6B7B3C */}
                  <div className="flex justify-between text-[#5c4033]">
                    <span>Envío</span>
                    <span className="font-medium text-[#6B7B3C]">Gratis</span>
                  </div>

                  <div className="border-t border-[#e2dcc7] pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-[#3e2c24]">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-[#3e2c24]">
                        ${Number(totalPrice).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 px-6 mb-3
                  bg-[#6B7B3C] text-white rounded-xl font-medium text-lg
                  hover:bg-[#5a6632] hover:shadow-lg hover:scale-105
                  transition-all duration-200
                  flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Proceder al Pago
                </button>

                <Link
                  to="/"
                  className="block text-center text-[#6B7B3C] hover:text-[#5a6632] 
                  font-medium transition"
                >
                  Continuar Comprando
                </Link>

                <div className="mt-6 pt-6 border-t border-[#e2dcc7] space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#5c4033]">
                    <div className="w-5 h-5 bg-[#6B7B3C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>Envío gratis en compras mayores a $1000</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#5c4033]">
                    <div className="w-5 h-5 bg-[#6B7B3C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                    <span>Pago seguro y protegido</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#5c4033]">
                    <div className="w-5 h-5 bg-[#6B7B3C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <RefreshCw className="w-3 h-3 text-white" />
                    </div>
                    <span>Devoluciones fáciles en 30 días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
