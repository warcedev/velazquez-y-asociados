import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  const redes = [
    {
      nombre: "LinkedIn",
      icon: "in",
      url: "https://py.linkedin.com/in/alex-velazquez-461942222"
    },
    {
      nombre: "Facebook",
      icon: "f",
      url: "https://www.facebook.com/velazquezyasociados"
    },
    {
      nombre: "Instagram",
      icon: "📸",
      url: "https://www.instagram.com/velazquezyasociadospy"
    }
  ];

  return (
      <footer className="relative bg-[#0A2540] dark:bg-[#0F172A] text-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo y descripción */}
            <div>
              <div className="font-serif text-2xl font-bold mb-4">
                Velázquez & Asociados
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Estudio jurídico comprometido con la excelencia, integridad y
                resultados excepcionales en cada caso.
              </p>

              {/* Redes sociales */}
              <div className="flex gap-4">
                {redes.map((red) => (
                    <motion.a
                        key={red.nombre}
                        href={red.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        aria-label={red.nombre}
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer text-white font-bold hover:bg-white/20 transition"
                    >
                      {red.icon}
                    </motion.a>
                ))}
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">
                Enlaces Rápidos
              </h4>
              <div className="space-y-3">
                {["Inicio", "Nosotros", "Casos", "Contacto"].map((item) => (
                    <motion.a
                        key={item}
                        href="#"
                        whileHover={{ x: 5 }}
                        className="block text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      {item}
                    </motion.a>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-serif text-xl font-bold mb-6">
                Contacto
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">📍</span>
                  <div>
                    <div className="font-semibold">Oficina Central</div>
                    <div className="text-gray-300">Capiatá, Paraguay</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">
                      contacto@velazquezyasociados.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37]">📱</span>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-300">+595 992 635 612</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-white/20 my-10" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Desarrollado por CodeByWill. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Velázquez y Asociados. Todos los derechos reservados.
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="hover:text-white transition-colors"
              >
                Aviso de Privacidad
              </motion.a>
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="hover:text-white transition-colors"
              >
                Términos y Condiciones
              </motion.a>
            </div>
          </div>
        </div>

        {/* Nota de dark mode */}
        <div className="text-center text-gray-500 text-xs pt-8 pb-6">
          {isDarkMode ? "🌙 Modo oscuro activado" : "☀️ Modo claro activado"}
        </div>
      </footer>
  );
}
