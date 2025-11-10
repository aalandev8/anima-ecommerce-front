import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreditCard, Wallet, DollarSign, Building2, Check } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const [selectedPayment, setSelectedPayment] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const [errors, setErrors] = useState({});

  const deliveryFee = 0;
  const subtotal = Number(totalPrice);
  const total = subtotal + deliveryFee;

  const paymentMethods = [
    {
      id: "card",
      name: "Tarjeta de Crédito/Débito",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "mercadopago",
      name: "Mercado Pago",
      icon: Wallet,
      description: "Paga con tu cuenta de Mercado Pago",
    },
    {
      id: "cash",
      name: "Efectivo",
      icon: DollarSign,
      description: "Paga al recibir tu pedido",
    },
    {
      id: "transfer",
      name: "Transferencia Bancaria",
      icon: Building2,
      description: "BROU, Itaú, Santander",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData({ ...formData, cardNumber: formatted });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setFormData({ ...formData, cardExpiry: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Nombre requerido";
    if (!formData.email.trim()) newErrors.email = "Email requerido";
    if (!formData.phone.trim()) newErrors.phone = "Teléfono requerido";
    if (!formData.address.trim()) newErrors.address = "Dirección requerida";
    if (!formData.city.trim()) newErrors.city = "Ciudad requerida";
    if (!selectedPayment) newErrors.payment = "Selecciona un método de pago";

    if (selectedPayment === "card") {
      if (!formData.cardNumber.trim())
        newErrors.cardNumber = "Número de tarjeta requerido";
      if (!formData.cardName.trim())
        newErrors.cardName = "Nombre en tarjeta requerido";
      if (!formData.cardExpiry.trim())
        newErrors.cardExpiry = "Fecha de expiración requerida";
      if (!formData.cardCVV.trim()) newErrors.cardCVV = "CVV requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Aquí harías la llamada a tu API para procesar el pago
      console.log("Procesando pago:", { formData, selectedPayment, total });

      // Simulación de pago exitoso
      alert("¡Pedido realizado con éxito! 🎉");
      navigate("/order-confirmation");
    }
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FCF4E8] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al carrito
            </button>
            <h1 className="text-3xl font-bold text-gray-800">
              Finalizar Compra
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Información de contacto */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-[#6B7B3C] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      1
                    </span>
                    Información de Contacto
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                          errors.fullName ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Juan Pérez"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="099 123 456"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dirección de entrega */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-[#6B7B3C] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      2
                    </span>
                    Dirección de Entrega
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dirección *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                          errors.address ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Calle, número, apto"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                            errors.city ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Montevideo"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Código Postal
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C]"
                          placeholder="11000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notas adicionales (opcional)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C]"
                        placeholder="Ej: Tocar timbre, piso 3, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Método de pago */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-[#6B7B3C] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      3
                    </span>
                    Método de Pago
                  </h2>

                  <div className="space-y-3 mb-6">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={method.id}
                          onClick={() => setSelectedPayment(method.id)}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedPayment === method.id
                              ? "border-[#6B7B3C] bg-[#6B7B3C]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                  selectedPayment === method.id
                                    ? "bg-[#6B7B3C] text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-800">
                                  {method.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {method.description}
                                </p>
                              </div>
                            </div>
                            {selectedPayment === method.id && (
                              <Check className="w-6 h-6 text-[#6B7B3C]" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {errors.payment && (
                    <p className="text-red-500 text-sm mb-4">
                      {errors.payment}
                    </p>
                  )}

                  {/* Formulario de tarjeta */}
                  {selectedPayment === "card" && (
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número de Tarjeta *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleCardNumberChange}
                          maxLength="19"
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                            errors.cardNumber
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.cardNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre en la Tarjeta *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                            errors.cardName
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="JUAN PEREZ"
                        />
                        {errors.cardName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.cardName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fecha de Expiración *
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleExpiryChange}
                            maxLength="5"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                              errors.cardExpiry
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="MM/AA"
                          />
                          {errors.cardExpiry && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.cardExpiry}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleInputChange}
                            maxLength="4"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7B3C] ${
                              errors.cardCVV
                                ? "border-red-500"
                                : "border-gray-300"
                            }`}
                            placeholder="123"
                          />
                          {errors.cardCVV && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.cardCVV}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPayment === "cash" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        💵 Prepará el monto exacto para facilitar la entrega. El
                        repartidor llevará cambio limitado.
                      </p>
                    </div>
                  )}

                  {selectedPayment === "transfer" && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2 font-semibold">
                        Datos para transferencia:
                      </p>
                      <p className="text-sm text-gray-600">Banco: BROU</p>
                      <p className="text-sm text-gray-600">
                        Cuenta: 001234567890
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Titular: AniFoods SRL
                      </p>
                      <p className="text-xs text-gray-500">
                        Envía el comprobante a pagos@anifoods.com
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Resumen del Pedido
                  </h2>

                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-600">
                          {item.quantity}x {item.name}
                        </span>
                        <span className="text-gray-800 font-medium">
                          ${(Number(item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Envío</span>
                      <span className="text-green-600 font-medium">Gratis</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t">
                      <span>Total</span>
                      <span className="text-[#6B7B3C]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#6B7B3C] text-white py-3 rounded-lg font-semibold hover:bg-[#5d6a34] transition-colors mb-3"
                  >
                    Confirmar Pedido
                  </button>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Entrega en 30-45 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
