import { motion } from "framer-motion";
import fundador from "../assets/fundador.jpg";
import socio1 from "../assets/socio1.jpg";
import socio2 from "../assets/socio2.jpg";
import socio3 from "../assets/socio3.jpg";
import socio4 from "../assets/socio4.jpg";

const miembros = [
  { 
    nombre: "Abog. Alex Velázquez", 
    rol: "Fundador", 
    foto: fundador,
    especialidad: "Derecho Corporativo",
    experiencia: "25+ años",
    descripcion: "Especialista en derecho empresarial y compliance"
  },
  { 
    nombre: "Dra. María Rodríguez", 
    rol: "Socia Principal", 
    foto: socio1,
    especialidad: "Litigio Civil",
    experiencia: "18 años",
    descripcion: "Experta en litigios complejos y arbitraje"
  },
  { 
    nombre: "Dr. Carlos Fernández", 
    rol: "Socio Senior", 
    foto: socio2,
    especialidad: "Derecho Laboral",
    experiencia: "15 años",
    descripcion: "Especialista en relaciones laborales"
  },
  { 
    nombre: "Dra. Ana Martínez", 
    rol: "Socia", 
    foto: socio3,
    especialidad: "Propiedad Intelectual",
    experiencia: "12 años",
    descripcion: "Experta en marcas y patentes"
  },
  { 
    nombre: "Dr. Luis González", 
    rol: "Socio", 
    foto: socio4,
    especialidad: "Derecho Tributario",
    experiencia: "10 años",
    descripcion: "Especialista en planificación fiscal"
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