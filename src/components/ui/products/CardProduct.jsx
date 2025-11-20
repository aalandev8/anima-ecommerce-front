export const CardProduct = ({ product, onProductClick }) => {
  return (
    <div className="bg-[#FAF7F0] border-1 border-[#F0F0B6] shadow rounded-lg flex flex-row">
      <div className="p-4 overflow-y-hidden basis-2/3 ">
          <h2 
          className="text-lg cursor-pointer font-semibold mb-2 hover:text-[#556030]"
          onClick={() => onProductClick(product.id) }
          >
            {product.name}
          </h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-black font-bold text-xl">${product.price}</p>
      </div>
      <div className="basis-1/3 cursor-pointer object-right h-40">
          <img
            src={product.image_url || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-35 mt-2 mr-5 h-35 border border-[#FFFFFA] rounded-2xl object-cover overflow-hidden"
            onClick={()=> onProductClick(product.id)}
         />
      </div>
    </div>
  );
};
