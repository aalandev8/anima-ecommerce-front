import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const SearchBar = ({ isScrolled, isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("vegano");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(
        `/stores/${selectedCategory}?search=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );
    } else {
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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsDropdownOpen(false);
  };

  const selectedCategoryName = categories.find(
    (cat) => cat.id === selectedCategory
  )?.name;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed top-16 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSearch}
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-4 rounded-lg shadow-2xl transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-white/95 backdrop-blur-md"
            }`}
          >
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg 
                bg-white text-gray-700 font-medium
                focus:outline-none focus:ring-2 focus:ring-[#6B7B3C]
                flex items-center justify-between gap-2
                hover:border-[#6B7B3C] transition-colors"
              >
                <span>{selectedCategoryName}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 
                bg-white border border-gray-300 rounded-lg shadow-lg z-10
                max-h-60 overflow-y-auto"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`w-full px-4 py-2 text-left transition-colors
                        ${
                          selectedCategory === cat.id
                            ? "bg-[#6B7B3C] text-white font-medium"
                            : "text-gray-700 hover:bg-[#6B7B3C] hover:text-white"
                        }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#6B7B3C]">
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

            <button
              type="submit"
              className="px-6 py-2 bg-[#6B7B3C] text-white rounded-lg 
              hover:bg-[#5a6632] transition-colors font-medium shadow-sm
              hover:shadow-md active:scale-95"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
