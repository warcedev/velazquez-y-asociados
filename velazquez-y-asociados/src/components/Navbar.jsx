import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ tab, setTab }) {
  const { isDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ← Estado para menú móvil

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de pestaña
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [tab]);

  const Item = ({ id, label }) => (
    <button
      onClick={() => {
        setTab(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`relative uppercase tracking-widest text-sm font-medium transition-all duration-300 group ${
        tab === id
          ? "text-[#D4AF37]"
          : "text-gray-600 dark:text-gray-400 hover:text-[#D4AF37]"
      }`}
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
        tab === id ? "w-full" : "w-0 group-hover:w-full"
      }`} />
    </button>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md shadow-lg" 
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
            <span className="font-serif text-2xl tracking-tight font-bold text-[#0A2540] dark:text-white">
              Velázquez & Asociados
            </span>
          </div>

          {/* Navegación Desktop - Solo visible en md+ */}
          <nav className="hidden md:flex gap-8">
            <Item id="inicio" label="Inicio" />
            <Item id="nosotros" label="Nosotros" />
            <Item id="casos" label="Casos" />
            <Item id="contacto" label="Contacto" />
          </nav>
          
          {/* Controles derecha */}
          <div className="flex items-center gap-4">
            {/* <DarkModeToggle /> */}
            
            {/* Botón CTA Desktop */}
            <button
              onClick={() => {
                setTab("contacto");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden md:block px-6 py-2 bg-[#D4AF37] text-white font-medium rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300"
            >
              Dar el Primer Paso
            </button>
            
            {/* Botón Menú Hamburguesa - Solo visible en móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menú de navegación"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
                <motion.span
                  className="absolute left-0 top-1 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-3 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-5 w-6 h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-8 border-t border-gray-200 dark:border-gray-800 mt-4">
                <div className="flex flex-col space-y-6">
                  {/* Items de navegación móvil */}
                  {[
                    { id: "inicio", label: "Inicio" },
                    { id: "nosotros", label: "Nosotros" },
                    { id: "casos", label: "Casos" },
                    { id: "contacto", label: "Contacto" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTab(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-left text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                        tab === item.id
                          ? "bg-[#D4AF37]/10 text-[#D4AF37] border-l-4 border-[#D4AF37]"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {tab === item.id && (
                          <span className="text-[#D4AF37]">•</span>
                        )}
                      </div>
                    </button>
                  ))}

                  {/* Botón CTA móvil */}
                  <button
                    onClick={() => {
                      setTab("contacto");
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300 w-full text-center"
                  >
                    Solicitar Consulta
                  </button>

                  {/* Info adicional móvil */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <p>📱 +595 9XX XXX XXX</p>
                      <p>📧 contacto@velazquezyasociados.com</p>
                      <p>📍 Av. Principal 1234, Asunción</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}