import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const StoreHeader = ({ store, storeId }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#6B7B3C] w-full border-b border-[#5a6632] px-6 py-4">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-200 hover:text-white transition"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <Link to={`/store/${storeId}/product/${store.id}`}>
          <img
            src={store.image_url || "https://via.placeholder.com/400"}
            className="w-20 mt-2 mr-5 h-20 border-2 border-white rounded-2xl object-cover overflow-hidden shadow-md"
          />
        </Link>
        <h1 className="text-2xl font-bold text-white">{store?.name}</h1>
      </div>
    </div>
  );
};
