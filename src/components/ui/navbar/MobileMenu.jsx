import { Link } from "react-router-dom";
import { DIETARY_CATEGORIES } from "../../../constants/categories";

export const MobileMenu = ({
  isOpen,
  isAuthenticated,
  user,
  onClose,
  onLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-[#f8f3e7] shadow-lg">
      <div className="py-4 px-4 space-y-2">
        <Link
          to="/about"
          className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
          onClick={onClose}
        >
          Sobre Nosotros
        </Link>

        <div className="py-2">
          <p className="text-gray-700 font-medium mb-2">Categorías</p>
          {DIETARY_CATEGORIES.map((cat) => (
            <Link
              key={cat.type}
              to={`/stores/${cat.type}`}
              onClick={onClose}
              className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {isAuthenticated && (
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="px-2 py-2">
              <p className="text-sm font-semibold text-gray-800">
                {user?.name} {user?.lastname}
              </p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <Link
              to="/profile"
              className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
              onClick={onClose}
            >
              Mi Perfil
            </Link>
            <Link
              to="/orders"
              className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium"
              onClick={onClose}
            >
              Mis Pedidos
            </Link>
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="block py-2 text-red-600 hover:text-red-700 font-medium w-full text-left"
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
