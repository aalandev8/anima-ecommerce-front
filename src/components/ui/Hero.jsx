export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="/HeroImage.jpg"
          alt="Delicious food background"
          className="w-full h-full object-cover"
        />
        <div
          iv
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
        ></div>
      </div>
      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Comida Deliciosa
            <span className="text-accent"> Adaptada</span> a Tus Necesidades
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-light leading-relaxed mb-8 text-white">
            Descubre una experiencia culinaria personalizada con nuestras
            comidas a domicilio, diseñadas para satisfacer tus necesidades
            dietéticas específicas y deleitar tu paladar.
          </p>

          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};
