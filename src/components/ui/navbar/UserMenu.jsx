import { Link } from "react-router-dom";

export const UserMenu = ({
  isScrolled,
  isUserMenuOpen,
  user,
  onToggle,
  onClose,
  onLogout,
}) => {
  const classScrolled = `font-medium flex transition ${
    isScrolled
      ? "text-gray-300 hover:text-gray-800"
      : "text-white hover:text-green-200"
  }`;

  return (
    <div className="relative">
      <button onClick={onToggle} className={classScrolled}>
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
          className="w-4 mt-1 h-4"
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
        <div className="absolute right-0 mt-2 w-48 bg-[#f8f3e7] rounded-md shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-800">
              {user?.name} {user?.lastname}
            </p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
            onClick={onClose}
          >
            Mi Perfil
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]"
            onClick={onClose}
          >
            Mis Pedidos
          </Link>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};
