import { motion } from "framer-motion";
import StatCard from "../components/StatCard";

const casosDestacados = [
  {
    titulo: "Juicio Oral y Público – Defensa Penal",
    descripcion: "Defensa asumida tras el abandono de la defensa técnica previa, logrando un fallo favorable en juicio oral y público",
    resultado: "Juicio ganado",
    area: "Derecho Penal",
    año: "2025"
  },
  {
    titulo: "Jornada de Consultoría Jurídica Gratuita",
    descripcion: "Evento de orientación legal gratuita para concienciar sobre los derechos del ciudadano en la ciudad de Capiatá",
    resultado: "Alta participación y orientación legal a la comunidad",
    area: "Consultoría Jurídica",
    año: "2025"
  },
  {
    titulo: "Caso de Tránsito con Resultado Penal",
    descripcion: "Representación de víctima de atropello por conductor en estado de ebriedad, con daños materiales y personales",
    resultado: "Indemnización por gastos médicos, lucro cesante, daños morales y reposición del vehículo",
    area: "Derecho Penal – Tránsito",
    año: "2025"
  },
  {
    titulo: "Aumento de la Asistencia Alimenticia – Fuero Niñez y Adolescencia",
    descripcion: "Juicio promovido para el aumento de la asistencia alimenticia a favor de un niño, solicitando la adecuación del monto conforme a las necesidades actuales",
    resultado: "Se hizo lugar al juicio, aumentando la asistencia de 3,55 a 7,43 jornales mínimos y fijando el pago retroactivo de G. 8.800.000 a favor del niño",
    area: "Derecho de la Niñez y Adolescencia",
    año: "2025"
  }
];

export default function Casos() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-4">
            Nuestros Logros
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Resultados que <span className="text-secondary">Hablan</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cada número representa historias de éxito, confianza renovada y 
            relaciones profesionales duraderas.
          </p>
        </motion.div>

        {/* Estadísticas animadas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <StatCard value="+100" label="Casos resueltos" />
          <StatCard value="98%" label="Tasa de éxito" />
          <StatCard value="+100" label="Clientes satisfechos" suffix="+" />
        </motion.div>

        {/* Casos destacados */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-primary dark:text-white mb-10 text-center">
            Casos Destacados
          </h3>
          
          <div className="space-y-6">
            {casosDestacados.map((caso, index) => (
              <motion.div
                key={caso.titulo}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                className="group relative bg-white dark:bg-neutral-dark/30 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-secondary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary dark:text-white text-sm font-semibold rounded-full">
                          {caso.area}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{caso.año}</span>
                      </div>
                      <h4 className="font-display text-xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors duration-300">
                        {caso.titulo}
                      </h4>
                    </div>
                    
                    <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full font-semibold">
                      {caso.resultado}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {caso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial ficticio */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <blockquote className="text-xl md:text-2xl font-display italic mb-8">
              "Tu causa es nuestro compromiso; resultados reales que avalan nuestra dedicación."
            </blockquote>
            
            <div>
              <div className="font-bold text-lg">Abg. Alex Velázquez</div>
              <div className="text-white/70">Fundador, Velázquez y Asociados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}