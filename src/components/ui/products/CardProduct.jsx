import { Link } from "react-router-dom";

export const CardProduct = ({ product, storeId }) => {
  return (
    <div className="bg-[#FAF7F0] border-1 border-[#FFFFFA] shadow rounded-lg flex flex-row">
      <div className="p-4 overflow-y-hidden basis-2/3 ">
        <Link to={`/store/${storeId}/product/${product.id}`}>
          <h2 className="text-lg font-semibold mb-2 hover:text-blue-600">
            {product.name}
          </h2>
        </Link>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-black font-bold text-xl">${product.price}</p>
      </div>
      <div className="basis-1/3 object-right h-35">
        <Link to={`/store/${storeId}/product/${product.id}`}>
          <img
            src={product.image_url || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-35 py-2 m-1 ml-4 h-35 border-1 border-[#FFFFFA] rounded-lg object-cover"
          />
        </Link>
      </div>
    </div>
  );
};
