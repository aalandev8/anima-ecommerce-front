import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import { CheckCircle, Package, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderNumber = Math.floor(Math.random() * 10000) + 1000;
  const estimatedTime = "30-45 minutos";

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#FCF4E8]">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#6B7B3C] rounded-full mb-6">
            <CheckCircle className="w-11 h-11 text-white" strokeWidth={2.5} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Pedido Confirmado!
          </h1>

          <p className="text-gray-600 mb-4">Gracias por tu compra</p>

          <div className="inline-block bg-white px-6 py-2 rounded-full border border-gray-200">
            <p className="text-sm text-gray-700">
              Pedido <span className="font-semibold">#{orderNumber}</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#6B7B3C]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Tiempo estimado</p>
                <p className="font-medium text-gray-900">{estimatedTime}</p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-[#6B7B3C]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Estado del pedido</p>
                <p className="font-medium text-gray-900">En preparación</p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#6B7B3C]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Dirección de entrega
                </p>
                <p className="font-medium text-gray-900">
                  Según dirección proporcionada
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-[#6B7B3C] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#5a6632] transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
