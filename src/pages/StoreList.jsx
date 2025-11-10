import { useMemo, useState, useCallback, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useStoresByCategory } from "@/api/stores";
import { categoryMapping, categoryConfig } from "@/constants/categories";
import StoreSearchBar from "@/components/store/StoreSearchBar";

const StoreList = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 👈 Nuevo
  const searchQuery = searchParams.get("search");
  const [filteredStores, setFilteredStores] = useState([]);

  const backendCategory = useMemo(
    () => categoryMapping[category] || category,
    [category]
  );

  const {
    data: storesData,
    isLoading,
    isError,
  } = useStoresByCategory(backendCategory);
  const stores = storesData?.data || [];

  const currentCategory = categoryConfig[category] || {
    title: "Tiendas",
    description: "Encuentra las mejores opciones",
    logo: null,
    colorClass: "bg-gray-100 text-gray-700",
  };

  const handleStoreClick = (storeId) => {
    navigate(`/store/${storeId}`);
  };

  const handleFilteredStores = useCallback((filtered) => {
    setFilteredStores(filtered);
  }, []);

  useEffect(() => {
    if (searchQuery && stores.length > 0) {
      const filtered = stores.filter((store) =>
        store.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStores(filtered);
    } else if (!searchQuery) {
      // Si no hay búsqueda en URL, resetear filtros
      setFilteredStores([]);
    }
  }, [searchQuery, stores]);

  // Usar filteredStores si hay búsqueda activa, sino usar stores originales
  const displayStores =
    filteredStores.length > 0 || stores.length === 0 ? filteredStores : stores;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FCF4E8] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tiendas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCF4E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
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
            Volver al inicio
          </button>

          <div className="flex items-center mb-4">
            <div
              className={`w-16 h-16 ${
                currentCategory.colorClass.split(" ")[0]
              } rounded-full flex items-center justify-center mr-4 p-2`}
            >
              {currentCategory.logo ? (
                <img
                  src={currentCategory.logo}
                  alt={currentCategory.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-3xl">🏪</span>
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {currentCategory.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {currentCategory.description}
              </p>
              {searchQuery && (
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  Buscando: "{searchQuery}"
                  <button
                    onClick={() => navigate(`/stores/${category}`)}
                    className="ml-2 text-xs underline hover:text-green-700"
                  >
                    Limpiar búsqueda
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* COMPONENTE DE BÚSQUEDA - NUEVO */}
        {stores.length > 0 && (
          <StoreSearchBar
            stores={stores}
            onFilteredStores={handleFilteredStores}
            initialSearch={searchQuery}
          />
        )}

        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              Error al cargar las tiendas. Por favor intenta nuevamente.
            </div>
          </div>
        )}

        {displayStores.length === 0 ? (
          <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
            {stores.length === 0
              ? "No hay tiendas disponibles en esta categoría por el momento."
              : "No se encontraron tiendas con los filtros seleccionados."}
          </div>
        ) : (
          <div className="space-y-3">
            {displayStores.map((store) => (
              <div
                key={store.id}
                onClick={() => handleStoreClick(store.id)}
                className="bg-[#6B7B3C] rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer p-4 flex items-center justify-between hover:bg-[#5d6a34]"
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 bg-white">
                    <img
                      src={
                        store.image_url ||
                        "https://placehold.co/100x100?text=Logo"
                      }
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">
                      {store.name}
                    </h3>

                    <div className="flex items-center text-sm text-white/90 mt-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        Recibes en {store.deliveryTime || "15-30 min"}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-white/90 mt-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>
                        Envío{" "}
                        {store.deliveryFee === 0 || store.deliveryFee === "0"
                          ? "Gratis"
                          : `$${store.deliveryFee}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center ml-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-base font-semibold text-white">
                    {store.rating || "4.5"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreList;
