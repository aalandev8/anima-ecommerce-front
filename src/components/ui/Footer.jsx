import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-4 border-t border-[#e2dcc7] bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto px-4 mt-3 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-[#5c4033]">
          © {new Date().getFullYear()} Food Market — Alimentación saludable
        </p>

        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <Link
            to="/sobre-nosotros"
            className="px-3 py-1.5 rounded-lg text-sm
            bg-[#c8d6a8] text-[#3e2c24] hover:bg-[#b1c494]
            transition shadow-sm"
          >
            Sobre Nosotros
          </Link>

          <a
            href="http://localhost:5174/"
            className="px-3 py-1.5 rounded-lg text-sm
            bg-[#6b7c5a] text-white hover:bg-[#596b4a]
            transition shadow-sm"
          >
            Registra tu empresa
          </a>
        </div>
      </div>
    </footer>
  );
}
