import { useState, useEffect, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";

const StoreSearchBar = ({ stores, onFilteredStores }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedDelivery, setSelectedDelivery] = useState("all");

  const filteredStores = useMemo(() => {
    // Validar que stores sea un array válido
    if (!stores || !Array.isArray(stores)) {
      return [];
    }

    let filtered = [...stores];

    // Filtrar por búsqueda
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(query) ||
          (store.description && store.description.toLowerCase().includes(query))
      );
    }

    // Filtrar por rating
    if (selectedRating > 0) {
      filtered = filtered.filter(
        (store) => parseFloat(store.rating || 0) >= selectedRating
      );
    }

    // Filtrar por envío
    if (selectedDelivery === "free") {
      filtered = filtered.filter(
        (store) => store.deliveryFee === 0 || store.deliveryFee === "0"
      );
    }

    return filtered;
  }, [stores, searchQuery, selectedRating, selectedDelivery]);

  useEffect(() => {
    if (onFilteredStores && typeof onFilteredStores === "function") {
      onFilteredStores(filteredStores);
    }
  }, [filteredStores, onFilteredStores]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedRating(0);
    setSelectedDelivery("all");
  };

  const hasActiveFilters =
    searchQuery || selectedRating > 0 || selectedDelivery !== "all";

  return (
    <div className="bg-[#C4B5A0] rounded-lg shadow-md p-4 mb-6">
      {/* Barra de búsqueda principal */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar tiendas por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border-2 border-[#B0A090] rounded-full focus:border-[#6B7B3C] focus:outline-none transition-all duration-300 bg-[#FCF4E8]"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filtros */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-white">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filtros:</span>
        </div>

        {/* Filtro de rating */}
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(Number(e.target.value))}
          className="px-3 py-1.5 text-sm border border-[#B0A090] rounded-lg focus:outline-none focus:border-[#6B7B3C] bg-[#FCF4E8]"
        >
          <option value={0}>Todas las calificaciones</option>
          <option value={4.5}>⭐ 4.5+</option>
          <option value={4.0}>⭐ 4.0+</option>
          <option value={3.5}>⭐ 3.5+</option>
        </select>

        {/* Filtro de envío */}
        <select
          value={selectedDelivery}
          onChange={(e) => setSelectedDelivery(e.target.value)}
          className="px-3 py-1.5 text-sm border border-[#B0A090] rounded-lg focus:outline-none focus:border-[#6B7B3C] bg-[#FCF4E8]"
        >
          <option value="all">Todos los envíos</option>
          <option value="free">Envío gratis</option>
        </select>

        {/* Contador de resultados */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm text-white">
            <span className="font-semibold">{filteredStores.length}</span>{" "}
            {filteredStores.length !== 1 ? "tiendas" : "tienda"}
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-white hover:text-gray-200 font-medium transition-colors underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreSearchBar;
