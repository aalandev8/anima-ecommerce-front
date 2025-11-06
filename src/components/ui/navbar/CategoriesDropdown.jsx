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

  const classScrolled = `font-medium flex transition ${
    isScrolled
      ? "text-gray-300 hover:text-gray-800"
      : "text-white hover:text-green-200"
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

      {isCategoriesOpen && (
        <div className="absolute w-48 bg-[#f8f3e7] shadow-lg rounded-md mt-2 py-2 z-10">
          {DIETARY_CATEGORIES.map((cat) => (
            <Link
              key={cat.type}
              to={`/stores/${cat.type}`}
              onClick={onClose}
              className="block px-4 py-2 text-gray-700 border-b border-gray-200 hover:bg-green-50 hover:text-[#4d7b0f]"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
