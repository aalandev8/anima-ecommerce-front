import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ isScrolled, isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("vegano");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Categorías correctas según tu sistema
  const categories = [
    { id: "vegano", name: "Vegano" },
    { id: "vegetariano", name: "Vegetariano" },
    { id: "sinGluten", name: "Sin Gluten" },
    { id: "diabetico", name: "Diabético" },
    { id: "kosher", name: "Kosher" },
    { id: "halal", name: "Halal" },
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      // Navegar a la categoría con el parámetro de búsqueda
      navigate(
        `/stores/${selectedCategory}?search=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );
    } else {
      // Si no hay búsqueda, solo ir a la categoría
      navigate(`/stores/${selectedCategory}`);
    }

    setSearchQuery("");
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay oscuro */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Barra de búsqueda */}
      <div className="fixed top-16 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-4 rounded-lg shadow-2xl transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
            }`}
          >
            {/* Select de categorías */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#556030] text-gray-700 bg-white"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Input de búsqueda */}
            <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#556030]">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
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

              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Buscar tiendas..."
                className="flex-1 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600 ml-2"
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
              )}
            </div>

            {/* Botón de buscar */}
            <button
              type="submit"
              className="px-6 py-2 bg-[#556030] text-white rounded-lg hover:bg-[#6b7842] transition-colors font-medium"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
