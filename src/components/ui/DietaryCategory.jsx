import { useNavigate } from "react-router-dom";
import { dietaryLogos } from "../../constants/categories";

export const DietaryCategory = ({ type, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/stores/${type}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-[#9daf65] border-1 border-[#a6dfa4] w-85 to-transparent opacity-95 rounded-3xl py-3 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:border-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-75 h-50 bg-gradient-to-br from-[#9daf65] via-[#627037] to-[#889b51] rounded-2xl relative mx-auto  group-hover:scale-95 group-hover:rotate-3 transition-all duration-300 overflow-hidden shadow-md">
          <img
            src={dietaryLogos[type]}
            alt={label}
            className="w-50 h-40 ml-13 rounded-4xl flex items-center justify-center object-cover p-2"
          />
          <h3 className="font-bold text-2xl text-center  text-[#f5e9cd] group-hover:text-secondary transition-colors duration-300">
            {label}
          </h3>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
    </div>
  );
};
