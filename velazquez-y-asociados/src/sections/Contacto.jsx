import { motion } from "framer-motion";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    alert("Consulta enviada. Nos contactaremos pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });
  };

  const contactos = [
    {
      icon: "📧",
      titulo: "Email",
      valor: "contacto@velazquezyasociados.com",
      accion: "mailto:contacto@velazquezyasociados.com"
    },
    {
      icon: "📱",
      titulo: "WhatsApp",
      valor: "+595 9XX XXX XXX",
      accion: "https://wa.me/595XXXXXXXXX"
    },
    {
      icon: "📍",
      titulo: "Oficina Central",
      valor: "Av. Principal 1234, Asunción",
      accion: "https://maps.google.com"
    }
  ];

  const redes = [
    { nombre: "LinkedIn", icon: "in", color: "bg-blue-600" },
    { nombre: "Facebook", icon: "f", color: "bg-blue-800" },
    { nombre: "Instagram", icon: "📸", color: "bg-gradient-to-r from-purple-500 to-pink-500" }
  ];

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
            Contáctenos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Estamos para <span className="text-secondary">Asesorarte</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Con el objetivo de ofrecerle total transparencia desde el inicio,
            realizamos una consulta inicial profesional con un honorario accesible.
            Durante la misma, definimos la viabilidad de su caso y acordamos juntos los honorarios para una representación efectiva.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-dark/30 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-6">
              Envíe su Consulta
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Ingrese su nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    placeholder="email@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  placeholder="+595 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto *
                </label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                >
                  <option value="">Seleccione un asunto</option>
                  <option value="consulta">Consulta General</option>
                  <option value="corporativo">Asesoría Corporativa</option>
                  <option value="litigio">Representación Legal</option>
                  <option value="laboral">Derecho Laboral</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Describa brevemente su situación legal..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-secondary text-white font-semibold rounded-lg hover-lift hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
              >
                Enviar Consulta
              </motion.button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Tarjetas de contacto */}
            <div className="space-y-6">
              {contactos.map((contacto) => (
                <motion.a
                  key={contacto.titulo}
                  href={contacto.accion}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 p-6 bg-white dark:bg-neutral-dark/30 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-secondary transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary text-xl rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {contacto.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-primary dark:text-white">
                      {contacto.titulo}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {contacto.valor}
                    </div>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Horario de atención */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-8">
              <h4 className="font-display text-xl font-bold text-primary dark:text-white mb-4">
                Horario de Atención
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lunes a Viernes</span>
                  <span className="font-semibold text-primary dark:text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sábados</span>
                  <span className="font-semibold text-primary dark:text-white">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Consultas Urgentes</span>
                  <span className="font-semibold text-secondary">24/7 vía WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h4 className="font-display text-xl font-bold text-primary dark:text-white mb-4">
                Síganos en Redes
              </h4>
              <div className="flex gap-4">
                {redes.map((red) => (
                  <motion.a
                    key={red.nombre}
                    href="#"
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 ${red.color} rounded-full flex items-center justify-center text-white font-bold hover:shadow-lg transition-all duration-300`}
                  >
                    {red.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}