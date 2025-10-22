import VeganLogo from './icons/VeganLogo.svg';
import KosherLogo from './icons/KosherLogo.png';
import VegetarianLogo from './icons/VegetarianLogo.png';
import HalalLogo from './icons/HalalLogo.png';
import GlutenFreeLogo from './icons/GlutenFree.webp';
import DiabetesLogo from './icons/DiabetesLogo.png';
import BajoEnSodioLogo from './icons/BajoEnSodio.jpg';
import LactoseFreeLogo from './icons/LactoseFree.jpg';

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

export const DietaryCategory = ({ type, label, colorClass }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group border border-neutral-beige hover:border-secondary">
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
