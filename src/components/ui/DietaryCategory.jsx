import { useNavigate } from 'react-router-dom';
import VeganLogo from './Icons/VeganLogo.svg';
import KosherLogo from './Icons/KosherLogo.png';
import VegetarianLogo from './Icons/VegetarianLogo.png';
import HalalLogo from './Icons/HalalLogo.png';
import GlutenFreeLogo from './Icons/GlutenFree.webp';
import DiabetesLogo from './Icons/DiabetesLogo.png';
import BajoEnSodioLogo from './Icons/BajoEnSodio.jpg';
import LactoseFreeLogo from './Icons/LactoseFree.jpg';

const dietaryLogos = {
  vegano: VeganLogo,
  kosher: KosherLogo,
  vegetariano: VegetarianLogo,
  halal: HalalLogo,
  sinGluten: GlutenFreeLogo,
  diabetico: DiabetesLogo,
  bajo_sodio: BajoEnSodioLogo,
  sinLactosa: LactoseFreeLogo,
};

export const DietaryCategory = ({ type, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/stores/${type}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-secondary overflow-hidden"
    >
      {/* Gradient background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-24 h-24 bg-gradient-to-br from-neutral-cream to-white rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden shadow-md">
          <img
            src={dietaryLogos[type]}
            alt={label}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <h3 className="font-bold text-lg text-center text-primary group-hover:text-secondary transition-colors duration-300">{label}</h3>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300" />
    </div>
  );
};