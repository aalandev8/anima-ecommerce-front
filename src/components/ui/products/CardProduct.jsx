import { Link } from "react-router-dom";

export const CardProduct = ({ product, storeId }) => {
  return (
    <div className="bg-white border-2 border-gray-300 shadow rounded-lg flex flex-row">
      <div className="p-4 overflow-y-hidden basis-2/3 ">
        <Link to={`/store/${storeId}/product/${product.id}`}>
          <h2 className="text-lg font-semibold mb-2 hover:text-blue-600">
            {product.name}
          </h2>
        </Link>

        <p className="text-black font-bold text-xl">${product.price}</p>
      </div>
      <div className="basis-1/3 object-right">
        <Link
          to={`/store/${storeId}/product/${product.id}`}
          className=" rounded-lg "
        >
          <img
            src={product.image_url || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-45 p-4 h-45"
          />
        </Link>
      </div>
    </div>
  );
};
