import VeganLogo from "@/components/ui/Icons/VeganLogo.jpg";
import KosherLogo from "@/components/ui/Icons/KosherLogo.jpg";
import VegetarianLogo from "@/components/ui/Icons/VegetarianLogo.png";
import HalalLogo from "@/components/ui/Icons/HalalLogo.png";
import GlutenFreeLogo from "@/components/ui/Icons/GlutenFreeLogo.jpg";
import DiabetesLogo from "@/components/ui/Icons/SugarFreeLogo.jpg";

export const categoryMapping = {
  vegano: "vegan",
  vegetariano: "vegetarian",
  sinGluten: "gluten-free",
  diabetico: "diabetic",
  kosher: "kosher",
  halal: "halal",
};

export const dietaryLogos = {
  vegano: VeganLogo,
  kosher: KosherLogo,
  vegetariano: VegetarianLogo,
  halal: HalalLogo,
  sinGluten: GlutenFreeLogo,
  diabetico: DiabetesLogo,
};

export const categoryConfig = {
  vegano: {
    title: "Tiendas Veganas",
    description: "Comida 100% vegetal, sin productos de origen animal",
    logo: dietaryLogos.vegano,
    colorClass: "bg-green-100 text-green-700",
  },
  vegetariano: {
    title: "Tiendas Vegetarianas",
    description: "Opciones vegetarianas sin carne ni pescado",
    logo: dietaryLogos.vegetariano,
    colorClass: "bg-lime-100 text-lime-700",
  },
  sinGluten: {
    title: "Tiendas Sin Gluten",
    description: "Opciones sin gluten para celíacos y sensibles al gluten",
    logo: dietaryLogos.sinGluten,
    colorClass: "bg-amber-100 text-amber-700",
  },
  diabetico: {
    title: "Tiendas para Diabéticos",
    description: "Opciones saludables con bajo índice glucémico",
    logo: dietaryLogos.diabetico,
    colorClass: "bg-purple-100 text-purple-700",
  },
  kosher: {
    title: "Tiendas Kosher",
    description: "Comida certificada kosher según normas judías",
    logo: dietaryLogos.kosher,
    colorClass: "bg-indigo-100 text-indigo-700",
  },
  halal: {
    title: "Tiendas Halal",
    description: "Comida preparada siguiendo las normas islámicas",
    logo: dietaryLogos.halal,
    colorClass: "bg-rose-100 text-rose-700",
  },
};

export const DIETARY_CATEGORIES = [
  { type: "vegano", label: "Vegano" },
  { type: "vegetariano", label: "Vegetariano" },
  { type: "sinGluten", label: "Sin Gluten" },
  { type: "diabetico", label: "Diabético" },
  { type: "kosher", label: "Kosher" },
  { type: "halal", label: "Halal" },
];
