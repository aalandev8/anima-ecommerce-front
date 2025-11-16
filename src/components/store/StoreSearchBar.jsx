import { useState, useEffect, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";

const StoreSearchBar = ({ stores, onFilteredStores }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedDelivery, setSelectedDelivery] = useState("all");

  const filteredStores = useMemo(() => {
    if (!stores || !Array.isArray(stores)) {
      return [];
    }

    let filtered = [...stores];

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(query) ||
          (store.description && store.description.toLowerCase().includes(query))
      );
    }

    if (selectedRating > 0) {
      filtered = filtered.filter(
        (store) => parseFloat(store.rating || 0) >= selectedRating
      );
    }

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
    <div className="bg-[#FCF4E8] rounded-lg shadow-md p-4 mb-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar tiendas por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border-2 border-[#E8DCC8] rounded-full focus:border-[#D4C4A8] focus:outline-none transition-all duration-300 bg-[#FCF4E8] shadow-sm"
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
    </div>
  );
};

export default StoreSearchBar;
