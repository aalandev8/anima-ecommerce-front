import VeganLogo from '@/components/ui/Icons/VeganLogo.svg';
import KosherLogo from '@/components/ui/Icons/KosherLogo.png';
import VegetarianLogo from '@/components/ui/Icons/VegetarianLogo.png';
import HalalLogo from '@/components/ui/Icons/HalalLogo.png';
import GlutenFreeLogo from '@/components/ui/Icons/GlutenFree.webp';
import DiabetesLogo from '@/components/ui/Icons/DiabetesLogo.png';
import BajoEnSodioLogo from '@/components/ui/Icons/BajoEnSodio.jpg';
import LactoseFreeLogo from '@/components/ui/Icons/LactoseFree.jpg';

export const categoryMapping = {
  'vegano': 'vegan',
  'vegetariano': 'vegetarian',
  'sinGluten': 'gluten-free',
  'sinLactosa': 'lactose-free',
  'diabetico': 'diabetic',
  'bajo_sodio': 'low-sodium',
  'kosher': 'kosher',
  'halal': 'halal'
};

export const dietaryLogos = {
  vegano: VeganLogo,
  kosher: KosherLogo,
  vegetariano: VegetarianLogo,
  halal: HalalLogo,
  sinGluten: GlutenFreeLogo,
  diabetico: DiabetesLogo,
  bajo_sodio: BajoEnSodioLogo,
  sinLactosa: LactoseFreeLogo,
};

export const categoryConfig = {
  'vegano': {
    title: 'Tiendas Veganas',
    description: 'Comida 100% vegetal, sin productos de origen animal',
    logo: dietaryLogos.vegano,
    colorClass: 'bg-green-100 text-green-700'
  },
  'vegetariano': {
    title: 'Tiendas Vegetarianas',
    description: 'Opciones vegetarianas sin carne ni pescado',
    logo: dietaryLogos.vegetariano,
    colorClass: 'bg-lime-100 text-lime-700'
  },
  'sinGluten': {
    title: 'Tiendas Sin Gluten',
    description: 'Opciones sin gluten para celíacos y sensibles al gluten',
    logo: dietaryLogos.sinGluten,
    colorClass: 'bg-amber-100 text-amber-700'
  },
  'sinLactosa': {
    title: 'Tiendas Sin Lactosa',
    description: 'Productos libres de lactosa',
    logo: dietaryLogos.sinLactosa,
    colorClass: 'bg-blue-100 text-blue-700'
  },
  'diabetico': {
    title: 'Tiendas para Diabéticos',
    description: 'Opciones saludables con bajo índice glucémico',
    logo: dietaryLogos.diabetico,
    colorClass: 'bg-purple-100 text-purple-700'
  },
  'bajo_sodio': {
    title: 'Tiendas Bajo en Sodio',
    description: 'Comida con contenido reducido de sal',
    logo: dietaryLogos.bajo_sodio,
    colorClass: 'bg-cyan-100 text-cyan-700'
  },
  'kosher': {
    title: 'Tiendas Kosher',
    description: 'Comida certificada kosher según normas judías',
    logo: dietaryLogos.kosher,
    colorClass: 'bg-indigo-100 text-indigo-700'
  },
  'halal': {
    title: 'Tiendas Halal',
    description: 'Comida preparada siguiendo las normas islámicas',
    logo: dietaryLogos.halal,
    colorClass: 'bg-rose-100 text-rose-700'
  }
};
