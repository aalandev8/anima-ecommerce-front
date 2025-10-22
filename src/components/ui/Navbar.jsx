import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold text-xl text-gray-800">KosherEats</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#4d7b0f] font-medium transition">
              Inicio
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-[#4d7b0f] font-medium transition">
              Restaurantes
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#4d7b0f] font-medium transition flex items-center">
                Opciones dieteticas
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2 py-2">
                <a href="#kosher" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]">Kosher</a>
                <a href="#diabetic" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]">Diabetic-Friendly</a>
                <a href="#celiac" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]">Gluten-Free</a>
                <a href="#vegan" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]">Vegan</a>
                <a href="#halal" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#4d7b0f]">Halal</a>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-[#4d7b0f] font-medium transition">
              Sobre Nosotros
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-600 hover:text-[#4d7b0f] transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link to="/cart" className="relative text-gray-600 hover:text-[#4d7b0f] transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="hidden md:block text-gray-600 hover:text-[#4d7b0f] transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-[#4d7b0f] transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
         {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium">
              Home
            </Link>
            <Link to="/menu" className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium">
              Menu
            </Link>
            <div className="py-2">
              <p className="text-gray-700 font-medium mb-2">Dietary Options</p>
              <a href="#kosher" className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]">Kosher</a>
              <a href="#diabetic" className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]">Diabetic-Friendly</a>
              <a href="#celiac" className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]">Gluten-Free</a>
              <a href="#vegan" className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]">Vegan</a>
              <a href="#halal" className="block pl-4 py-1 text-gray-600 hover:text-[#4d7b0f]">Halal</a>
            </div>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium">
              About Us
            </Link>
            <button className="block py-2 text-gray-700 hover:text-[#4d7b0f] font-medium w-full text-left">
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};