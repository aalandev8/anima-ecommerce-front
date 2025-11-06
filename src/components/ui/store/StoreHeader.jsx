import { Link } from "react-router-dom";

export const StoreHeader = ({ store }) => {
  const backUrl = store?.type ? `/stores/${store.type}` : "/";

  return (
    <div className="bg-[#556030] w-full border-b border-lime-900 px-6 py-4">
      <div className="flex items-center gap-4">
        <Link
          to={backUrl}
          className="text-gray-600 hover:text-gray-900 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#FAEBD7"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-2xl font-bold text-[#FAEBD7]">{store?.name}</h1>
      </div>
    </div>
  );
};
