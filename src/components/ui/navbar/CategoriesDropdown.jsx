import { useRef } from "react";
import { Link } from "react-router-dom";
import { DIETARY_CATEGORIES } from "@/constants/categories";

export const CategoriesDropdown = ({
  isScrolled,
  isCategoriesOpen,
  onOpen,
  onClose,
}) => {
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 300);
  };

  // ✨ COLORES ACTUALIZADOS - Coinciden con la paleta
  const classScrolled = `font-medium flex transition ${
    isScrolled
      ? "text-[#3e2c24] hover:text-[#5c4033]"
      : "text-white hover:text-[#c8d6a8]"
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={classScrolled}>
        Categorías
        <svg
          className="w-4 h-4 ml-1 mt-1"
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

      {/* ✨ DROPDOWN ACTUALIZADO - Colores de tu paleta */}
      {isCategoriesOpen && (
        <div className="absolute w-48 bg-white border border-[#e2dcc7] shadow-lg rounded-xl mt-2 py-2 z-10">
          {DIETARY_CATEGORIES.map((cat) => (
            <Link
              key={cat.type}
              to={`/stores/${cat.type}`}
              onClick={onClose}
              className="block px-4 py-2 text-[#3e2c24] 
              border-b border-[#e2dcc7] last:border-b-0
              hover:bg-[#6B7B3C] hover:text-white
              transition-colors duration-150"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
