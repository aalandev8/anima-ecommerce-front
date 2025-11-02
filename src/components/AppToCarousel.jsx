import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slides definidos fuera del componente para no recrearlos en cada render
const slides = [
  {
    title: "Comida deliciosa Adaptada a tus Necesidades",
    subtitle:
      "Descubre una experiencia culinaria personalizada con nuestras comidas a domicilio, diseñadas para satisfacer tus necesidades dietéticas específicas y deleitar tu paladar.",
    tags: [],
    isHero: true,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&h=800&fit=crop",
    buttonText: "Ordenar Ahora",
  },
  {
    title: "Postres Sin Azúcar, Con Todo el Sabor",
    subtitle:
      "Endulza tu vida de forma saludable. Nuestros postres para diabéticos y opciones bajas en azúcar te permiten disfrutar sin preocupaciones.",
    tags: ["Diabéticos", "Bajo en Azúcar", "Delicioso"],
    image:
      "https://images.unsplash.com/photo-1646678257607-32fae49fb5ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1204",
    buttonText: "Ordenar Ahora",
  },
  {
    title: "Bowls Veganos Llenos de Vida",
    subtitle:
      "Nutrición completa basada en plantas. Cada bowl está diseñado para ofrecerte energía, sabor y todos los nutrientes que necesitas.",
    tags: ["100% Vegano", "Alto en Proteína", "Orgánico"],
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200",
    buttonText: "Ordenar Ahora",
  },
  {
    title: "Pizza Sin Gluten, Sin Compromisos",
    subtitle:
      "Para celíacos que no quieren renunciar al sabor. Masa crujiente, ingredientes frescos, cero gluten.",
    tags: ["Celíaco", "Sin TACC", "Certificado"],
    image:
      "https://plus.unsplash.com/premium_photo-1675103910740-533375dd3864?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
    buttonText: "Ordenar Ahora",
  },
  {
    title: "Smoothie Bowls Naturales",
    subtitle:
      "Energía pura desde el desayuno. Frutas frescas, superfoods y toppings que se adaptan a tu estilo de vida saludable.",
    tags: ["Sin Lácteos", "Antioxidantes", "Energizante"],
    image:
      "https://images.unsplash.com/photo-1646343589919-3108514cb1ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
    buttonText: "Ordenar Ahora",
  },
  {
    title: "Proteína para Deportistas",
    subtitle:
      "Comidas balanceadas diseñadas para tu rendimiento. Alto contenido proteico, bajo en grasas, sabor excepcional.",
    tags: ["Alto en Proteína", "Bajo en Grasa", "Fitness", "Halal", "Kosher"],
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
    buttonText: "Ordenar Ahora",
  },
];

const AppToCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Detecta el scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // No detener el auto-play al hacer clic en indicadores
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Mantener auto-play activo
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Mantener auto-play activo
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Imagen de fondo - con mejor brillo */}
            <div
              className="absolute inset-0 bg-cover bg-center brightness-90"
              style={{ backgroundImage: `url(${slide.image})`, opacity: 0.85 }}
            />

            {/* Overlay beige más suave */}
            <div
              className={`absolute inset-0 ${
                slide.isHero
                  ? "bg-gradient-to-r from-black/50 via-[rgba(139,90,43,0.2)] to-transparent"
                  : "bg-[rgba(222,196,160,0.35)]"
              }`}
            ></div>

            {/* Contenido del slide - Alineado con el navbar */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Tags */}
                  {!slide.isHero && slide.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {slide.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/30 text-white text-sm font-semibold rounded-full border border-white/50 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  {slide.isHero ? (
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      Comida Deliciosa
                      <span className="text-green-400"> Adaptada</span> a Tus
                      Necesidades
                    </h1>
                  ) : (
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                  )}

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <button className="px-8 py-4 bg-[#6B7B3C] text-white font-bold text-lg rounded-full hover:bg-[#556030] transition-all transform hover:scale-105 shadow-lg">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full transition-all group"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 hover:bg-white/50 rounded-full transition-all group"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Indicadores (puntos) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navbar - con transición de scroll */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/20 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span
                className={`font-bold text-2xl transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                AppTo
              </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className={`font-medium transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#4d7b0f]"
                    : "text-white hover:text-green-200"
                }`}
              >
                Inicio
              </a>
              <a
                href="#restaurantes"
                className={`font-medium transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#4d7b0f]"
                    : "text-white hover:text-green-200"
                }`}
              >
                Restaurantes
              </a>
              <a
                href="#opciones"
                className={`font-medium transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#4d7b0f]"
                    : "text-white hover:text-green-200"
                }`}
              >
                Opciones Dietéticas
              </a>
              <a
                href="#nosotros"
                className={`font-medium transition ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#4d7b0f]"
                    : "text-white hover:text-green-200"
                }`}
              >
                Sobre Nosotros
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppToCarousel;
