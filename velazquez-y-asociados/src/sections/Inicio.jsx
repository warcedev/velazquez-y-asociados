import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import fondoescritorio from "../assets/fondoescritorio.png";
import escritorioedificio from "../assets/fondoescritorio1.png";

export default function Inicio({ setTab }) {
  return (
      <div className="relative m-0 p-0">
        {/* SECCIÓN HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20">
          {/* Imagen de fondo */}
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${fondoescritorio})` }}
          />
          {/* Overlay oscuro para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/85 via-[#0A2540]/75 to-[#0A2540]/65 dark:from-[#0F172A]/90 dark:via-[#0A2540]/85 dark:to-black/75" />

          {/* Elementos decorativos de fondo */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Logo con animación */}
              <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-8"
              >
                <img
                    src={logo}
                    alt="Velázquez y Asociados"
                    className="h-40 md:h-48 mx-auto mb-8 drop-shadow-2xl"
                />
              </motion.div>

              {/* Título principal */}
              <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              >
                Velázquez
                <span className="block text-[#D4AF37] mt-2">& Asociados</span>
              </motion.h1>

              {/* Lema con animación */}
              <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-10"
              >
                <div className="inline-flex items-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
                  <p className="font-serif italic text-xl md:text-2xl text-[#D4AF37] tracking-wide">
                    Pacta Sunt Servanda
                  </p>
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>
              </motion.div>

              {/* Texto descriptivo */}
              <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6 mb-12"
              >
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
                  Somos un estudio jurídico enfocado en brindar soluciones legales
                  estratégicas, confiables y éticamente sólidas.
                </p>

                <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                  Creemos que el derecho es una herramienta de orden, justicia y
                  cumplimiento. Cada caso es tratado con rigor profesional y
                  compromiso absoluto.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <button
                    onClick={() => {
                      if (setTab) {
                        setTab("contacto");
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="px-8 py-4 bg-[#D4AF37] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 group hover:-translate-y-1"
                >
                <span className="flex items-center gap-2">
                  Solicitar Consulta
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                </button>

                <button
                    onClick={() => {
                      if (setTab) {
                        setTab("nosotros");
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  Conocer al Equipo
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECCIÓN VISIÓN Y PROPÓSITO */}
        <section className="relative min-h-screen overflow-hidden flex items-center py-20">
          {/* Imagen de fondo como IMG */}
          <img
              src={escritorioedificio}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-[#F8FAFC]/80 dark:from-[#0F172A]/90 dark:via-[#0A2540]/85 dark:to-[#0A2540]/90" />

          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
            <div className="max-w-6xl mx-auto">
              {/* Encabezado de la sección */}
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
              >
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold rounded-full mb-4">
                Nuestra Esencia
              </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2540] dark:text-white mb-6">
                  Más allá del <span className="text-[#D4AF37]">Derecho</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Nuestro compromiso trasciende la mera aplicación legal
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Columna 1: Visión */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] text-xl">👁️</span>
                  </div>

                  <div className="bg-white dark:bg-[#0F172A]/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-serif text-2xl font-bold text-[#0A2540] dark:text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#D4AF37] rounded-full"></div>
                      Nuestra Visión
                    </h3>

                    <div className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Ser reconocidos como el referente en excelencia jurídica, donde la innovación legal
                        se encuentra con la tradición de servicio, creando un estándar de calidad que
                        transforma la práctica del derecho.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-[#D4AF37] text-sm">✓</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Liderar la transformación del sector legal hacia prácticas más transparentes y accesibles
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-[#D4AF37] text-sm">✓</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Establecer relaciones duraderas basadas en la confianza y los resultados excepcionales
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Columna 2: Por qué lo hacemos */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#D4AF37] text-xl">💡</span>
                  </div>

                  <div className="bg-white dark:bg-[#0F172A]/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-serif text-2xl font-bold text-[#0A2540] dark:text-white mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-[#D4AF37] rounded-full"></div>
                      ¿Por qué lo hacemos?
                    </h3>

                    <div className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Porque creemos que el derecho no es solo un conjunto de normas, sino un instrumento
                        para construir una sociedad más justa, donde cada persona y empresa pueda desarrollar
                        su potencial con seguridad jurídica.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0A2540]/10 dark:bg-[#0A2540]/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#0A2540] dark:text-[#D4AF37]">⚖️</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A2540] dark:text-white mb-1">Justicia como Base</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Cada caso representa una oportunidad para hacer prevalecer la equidad
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0A2540]/10 dark:bg-[#0A2540]/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#0A2540] dark:text-[#D4AF37]">🤝</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A2540] dark:text-white mb-1">Compromiso Humano</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Entendemos las historias detrás de cada proceso legal
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0A2540]/10 dark:bg-[#0A2540]/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#0A2540] dark:text-[#D4AF37]">🚀</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#0A2540] dark:text-white mb-1">Innovación Constante</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Adaptamos las mejores prácticas a las necesidades del siglo XXI
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Cita inspiradora */}
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-20 text-center"
              >
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    <svg className="w-12 h-12 text-[#D4AF37]/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <blockquote className="font-serif text-2xl italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      "El derecho debe ser el escudo del débil, no el arma del fuerte. Nuestra misión es
                      asegurar que la balanza de la justicia se mantenga equilibrada para todos."
                    </blockquote>

                    <div className="font-semibold text-[#0A2540] dark:text-white">
                      Dr. Juan Velázquez
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Fundador - Velázquez & Asociados
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Botón para ir a "Nosotros" */}
              <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mt-16"
              >
                <button
                    onClick={() => {
                      if (setTab) {
                        setTab("nosotros");
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-4 transition-all duration-300 group"
                >
                <span className="border-b-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 pb-1">
                  Conoce a nuestro equipo completo
                </span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
}