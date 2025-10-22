import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { DietaryCategory } from "@/components/ui/DietaryCategory";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Navegá por Necesidades Dietéticas</h2>
          <p className="text-neutral-dark">Encontrá comidas que se adapten a tu estilo de vida</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          <DietaryCategory type="vegano" label="Vegano" colorClass="bg-green-100 text-green-700" />
          <DietaryCategory type="vegetariano" label="Vegetariano" colorClass="bg-lime-100 text-lime-700" />
          <DietaryCategory type="sinGluten" label="Sin Gluten" colorClass="bg-amber-100 text-amber-700" />
          <DietaryCategory type="sinLactosa" label="Sin Lactosa" colorClass="bg-blue-100 text-blue-700" />
          <DietaryCategory type="diabetico" label="Diabético" colorClass="bg-purple-100 text-purple-700" />
          <DietaryCategory type="bajo_sodio" label="Bajo en Sodio" colorClass="bg-cyan-100 text-cyan-700" />
          <DietaryCategory type="kosher" label="Kosher" colorClass="bg-indigo-100 text-indigo-700" />
          <DietaryCategory type="halal" label="Halal" colorClass="bg-rose-100 text-rose-700" />
        </div>
      </section>

      <section className="bg-neutral-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Cómo Funciona</h2>
            <p className="text-neutral-dark">Tres simples pasos para obtener tu comida</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">1. Elegí tu Comida</h3>
              <p className="text-neutral-dark">Navegá por nuestros restaurantes certificados y seleccioná tus platos favoritos</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">2. Realizá tu Pedido</h3>
              <p className="text-neutral-dark">Agregá items al carrito y pagá de forma segura con múltiples opciones</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">3. Disfrutá tu Comida</h3>
              <p className="text-neutral-dark">Entrega rápida directo a tu puerta, caliente y fresco</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
