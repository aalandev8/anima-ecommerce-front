import { Navbar } from "@/components/ui/Navbar";
import { DietaryCategory } from "@/components/ui/DietaryCategory";
import AppToCarousel from "@/components/AppToCarousel";
import HowToOrder from "../../components/ui/HowToOrder";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FCF4E8] ">
      <Navbar />
      <AppToCarousel />

      {/* Sección de Categorías Dietéticas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Navegá por Necesidades Dietéticas
          </h2>
          <p className="text-neutral-dark">
            Encontrá comidas que se adapten a tu estilo de vida
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-24 ">
          <DietaryCategory
            type="vegano"
            label="Vegano"
            colorClass="bg-green-100 text-green-700"
          />
          <DietaryCategory
            type="vegetariano"
            label="Vegetariano"
            colorClass="bg-lime-100 text-lime-700"
          />
          <DietaryCategory
            type="sinGluten"
            label="Sin Gluten"
            colorClass="bg-amber-100 text-amber-700"
          />
          <DietaryCategory
            type="diabetico"
            label="Diabético"
            colorClass="bg-purple-100 text-purple-700"
          />
          <DietaryCategory
            type="kosher"
            label="Kosher"
            colorClass="bg-indigo-100 text-indigo-700"
          />
          <DietaryCategory
            type="halal"
            label="Halal"
            colorClass="bg-rose-100 text-rose-700"
          />
        </div>
      </section>
      <HowToOrder />
    </div>
  );
};

export default Home;
