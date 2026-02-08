import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ tab, setTab }) {
  const { isDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Item = ({ id, label }) => (
    <button
      onClick={() => {
        setTab(id);
        // Scroll suave al top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`relative uppercase tracking-widest text-sm font-medium transition-all duration-300 group ${
        tab === id
          ? "text-secondary"
          : "text-gray-600 dark:text-gray-400 hover:text-secondary"
      }`}
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
        tab === id ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </button>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 dark:bg-neutral-dark/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <img
              src={logo}
              alt="Velázquez y Asociados"
              className="h-14 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-2xl tracking-tight font-bold text-primary dark:text-white">
              Velázquez & Asociados
            </span>
          </div>

          {/* Navegación + Dark Mode */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8">
              <Item id="inicio" label="Inicio" />
              <Item id="nosotros" label="Nosotros" />
              <Item id="casos" label="Casos" />
              <Item id="contacto" label="Contacto" />
            </nav>
            
            <div className="flex items-center gap-4">
              {/* <DarkModeToggle /> */}
              
              {/* Botón CTA */}
              <button
                onClick={() => setTab("contacto")}
                className="hidden md:block px-6 py-2 bg-secondary text-white font-medium rounded-full hover-lift hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
              >
                Consulta Gratuita
              </button>
              
              {/* Mobile Menu Button (simplificado) */}
              <button className="md:hidden text-gray-600 dark:text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}