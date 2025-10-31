import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/redux/slices/authSlice";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setIsUserMenuOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-300 to-emerald-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl text-gray-800">AppTo</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#4d7b0f] font-medium transition"
            >
              Inicio
            </Link>
            <Link
              to="/menu"
              className="text-gray-700 hover:text-[#4d7b0f] font-medium transition"
            >
              Restaurantes
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#4d7b0f] font-medium transition flex items-center">
                Opciones dieteticas
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 py-2">
                <a
                  href="#kosher"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                >
                  Kosher
                </a>
                <a
                  href="#diabetic"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                >
                  Diabetic-Friendly
                </a>
                <a
                  href="#celiac"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                >
                  Gluten-Free
                </a>
                <a
                  href="#vegan"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                >
                  Vegan
                </a>
                <a
                  href="#halal"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                >
                  Halal
                </a>
              </div>
            </div>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#4d7b0f] font-medium transition"
            >
              Sobre Nosotros
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-600 hover:text-[#4d7b0f] transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-[#4d7b0f] transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Menú de usuario - Desktop */}
            {isAuthenticated ? (
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#4d7b0f] transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name || "Usuario"}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Mi Perfil
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Mis Pedidos
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block text-gray-600 hover:text-[#4d7b0f] transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            )}

            {/* Botón hamburguesa - Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-[#4d7b0f] transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/menu"
              className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
            >
              Restaurantes
            </Link>
            <div className="py-2">
              <p className="text-gray-700 font-medium mb-2">
                Opciones Dietéticas
              </p>
              <a
                href="#kosher"
                className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
              >
                Kosher
              </a>
              <a
                href="#diabetic"
                className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
              >
                Diabetic-Friendly
              </a>
              <a
                href="#celiac"
                className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
              >
                Gluten-Free
              </a>
              <a
                href="#vegan"
                className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
              >
                Vegan
              </a>
              <a
                href="#halal"
                className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
              >
                Halal
              </a>
            </div>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
            >
              Sobre Nosotros
            </Link>

            {/* Usuario - Mobile */}
            {isAuthenticated ? (
              <div className="border-t border-gray-200 mt-2 pt-2">
                <div className="px-2 py-2">
                  <p className="text-sm font-semibold text-gray-800">
                    {user?.name || "Usuario"}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <Link
                  to="/profile"
                  className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
                >
                  Mi Perfil
                </Link>
                <Link
                  to="/orders"
                  className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
                >
                  Mis Pedidos
                </Link>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-red-600 hover:text-red-700 font-medium w-full text-left"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
