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
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group border border-neutral-beige hover:border-secondary"
    >
      <div className="w-16 h-16 bg-neutral-cream rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden">
        <img
          src={dietaryLogos[type]}
          alt={label}
          className="w-full h-full object-contain p-1"
        />
      </div>
      <h3 className="font-semibold text-center text-primary">{label}</h3>
    </div>
  );
};