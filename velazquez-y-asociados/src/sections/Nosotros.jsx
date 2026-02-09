import { motion } from "framer-motion";
import fundador from "../assets/alexvelazquez.jpeg";
import socio1 from "../assets/sig1.jpeg";
import socio2 from "../assets/bader1.jpeg";
import socio3 from "../assets/juanescobar.jpeg";
import socio4 from "../assets/vera1.jpeg";
import socio5 from "../assets/3.jpeg";

const miembros = [
  { 
    nombre: "Abg. Alex Velázquez",
    rol: "Fundador | Abogado Litigante Estratégico",
    foto: fundador,
    especialidad: "Litigio Penal & Civil (Sucesiones, Familia)",
    experiencia: "2+ años",
    descripcion: "Litigante especializado en defensa penal y derecho civil. Su experiencia como Oficial de Justicia le otorga una visión estratégica única del proceso judicial, optimizando la defensa en audiencias y juicios orales, y la gestión de casos de sucesiones y familia."
  },
  { 
    nombre: "Abg. Sigfrido Bader",
    rol: "Abogado",
    foto: socio1,
    especialidad: "Derecho Civil y Apoyo en Litigio",
    experiencia: "Egresado de la UNA",
    descripcion: "Abogado proactivo y analítico, egresado de la Facultad de Derecho de la UNA. Con pasión por la justicia y habilidades sólidas en investigación y análisis legal, estoy preparado para apoyar en casos complejos, aportando rigor, dedicación y una capacidad de aprendizaje rápido para adaptarme a los desafíos del litigio."
  },
  { 
    nombre: "Abg. Rocio Bader",
    rol: "Abogada",
    foto: socio2,
    especialidad: "Derecho Civil, Laboral y de Familia",
    experiencia: "1+ años",
    descripcion: "Abogada egresada de la UNA con matrícula CSJ N.º 75.613. Especializada en derecho civil, laboral y de familia. Me destaco por un análisis jurídico riguroso y un enfoque humano, priorizando soluciones eficientes y éticas para cada cliente. Mi adaptabilidad y vocación de servicio me permiten manejar casos diversos generando confianza desde el primer contacto."
  },
  { 
    nombre: "Abg. Juan Escobar",
    rol: "Abogado Litigante Especializado",
    foto: socio3,
    especialidad: "Civil, Niñez/Adolescencia y Litigio Comercial",
    experiencia: "5+ años",
    descripcion: "Abogado con doble especialidad en Derecho Civil y de Niñez/Adolescencia, ampliada con una sólida práctica litigante en Derecho Comercial. Su valor radica en la capacidad de manejar asuntos legales que abarcan desde la esfera familiar hasta la empresarial, ofreciendo una defensa integral y estratégica. Es un profesional de tribunal, preparado para la argumentación compleja en múltiples ramas del derecho."
  },
  { 
    nombre: "Abg. Fernando Vera",
    rol: "Abogado Asesor | Soporte en Formación Interna",
    foto: socio4,
    especialidad: "Metodología y Comunicación Legal",
    experiencia: "3+ años",
    descripcion: "Abogado cuya fortaleza radica en aplicar principios de la didáctica superior al ejercicio legal. Su formación (Derecho - UNA y Posgrado en Didáctica) lo convierte en un activo clave para el estudio, no solo en la atención directa de casos con una comunicación jurídica de alta claridad, sino también en la capacitación interna, la elaboración de materiales para clientes y el perfeccionamiento de argumentos escritos y orales del equipo."
  },
  {
    nombre: "Abg. Sira Marin",
    rol: "Abogada Especializada",
    foto: socio5,
    especialidad: "Niñez y Adolescencia | Derecho Penal y Civil",
    experiencia: "3+ años",
    descripcion: "Abogada especializada en Niñez y Adolescencia, con amplia experiencia transversal en Derecho Penal, Civil y Laboral. En formación continua, cursando un posgrado en Didáctica Universitaria (UNA). Domina español, guaraní y portugués, lo que le permite una comunicación efectiva y sensible con una diversidad de clientes, abordando casos con un enfoque integral y especializado."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export default function Nosotros() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Expertos en <span className="text-secondary">Derecho</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un equipo multidisciplinario con décadas de experiencia combinada, 
            comprometido con la excelencia y los resultados.
          </p>
        </motion.div>

        {/* Grid de miembros */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {miembros.map((miembro, index) => (
            <motion.div
              key={miembro.nombre}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-neutral-dark/30 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-secondary/30 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Efecto de hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 dark:to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Badge de experiencia */}
                <div className="absolute top-4 right-4 bg-white dark:bg-neutral-dark px-3 py-1 rounded-full text-sm font-semibold text-primary dark:text-white shadow-lg">
                  {miembro.experiencia}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-2">
                  {miembro.nombre}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-secondary font-semibold">{miembro.rol}</span>
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{miembro.especialidad}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {miembro.descripcion}
                </p>
                
                {/* Redes sociales simuladas */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-sm">✉</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas del equipo */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-2">
                80+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Años de experiencia combinada
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Especialidades legales cubiertas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Compromiso con cada cliente
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}