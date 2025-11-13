import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "../constants/slides";
import { slideColors } from "../constants/colors";

const style = document.createElement("link");
style.rel = "stylesheet";
style.href = "https://fonts.googleapis.com/css2?family=Questrial&display=swap";
document.head.appendChild(style);

const AppToCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Emitir el color actual del slide para que el Navbar lo use
  useEffect(() => {
    const currentColor = slideColors[currentSlide];
    // Crear un evento personalizado con el color actual
    const event = new CustomEvent("carouselColorChange", {
      detail: { color: currentColor.accentColor },
    });
    window.dispatchEvent(event);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Función para hacer scroll a las categorías dietéticas
  const scrollToCategorias = () => {
    const categoriasSection = document.getElementById("categorias-dieteticas");
    if (categoriasSection) {
      const navbarHeight = 72;
      const y =
        categoriasSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      style={{ fontFamily: "'Questrial', sans-serif" }}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover brightness-75"
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: 0.7,
                backgroundPosition: slide.isHero ? "center right" : "center",
              }}
            />

            <div
              className={`absolute inset-0 ${
                slide.isHero
                  ? "bg-gradient-to-r from-black/50 via-[rgba(139,90,43,0.2)] to-transparent"
                  : "bg-[rgba(222,196,160,0.35)]"
              }`}
            ></div>

            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
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

                  {slide.isHero ? (
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      Comida deliciosa
                      <span style={{ color: slideColors[index].accentColor }}>
                        {" "}
                        Adaptada
                      </span>{" "}
                      a tus necesidades
                    </h1>
                  ) : (
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                      {slide.title.split(" ").slice(0, -3).join(" ")}
                      <span style={{ color: slideColors[index].accentColor }}>
                        {" "}
                        {slide.title.split(" ").slice(-3).join(" ")}
                      </span>
                    </h1>
                  )}

                  <p className="text-lg md:text-xl text-white mb-8 leading-relaxed drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  <button
                    onClick={scrollToCategorias}
                    className="px-8 py-4 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg"
                    style={{
                      backgroundColor: slideColors[index].buttonColor,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "1";
                    }}
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default AppToCarousel;
