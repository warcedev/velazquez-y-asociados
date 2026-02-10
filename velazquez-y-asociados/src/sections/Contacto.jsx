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
      valor: "astrea185sa@gmail.com",
      accion: "mailto:astrea185sa@gmail.com"
    },
    {
      icon: "📱",
      titulo: "WhatsApp",
      valor: "+595 992 635 612",
      accion: "https://wa.me/595992635612"
    },
    {
      icon: "📍",
      titulo: "Oficina Central",
      valor: "Capiata, Paraguay",
      accion: "https://www.google.com/maps/place/25%C2%B021'43.4%22S+57%C2%B026'47.4%22W/@-25.362066,-57.4490743,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-25.362066!4d-57.4464994?hl=es&entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const redes = [
    {
      nombre: "LinkedIn",
      icon: "in",
      color: "bg-blue-600",
      url: "https://py.linkedin.com/in/alex-velazquez-461942222"
    },
    {
      nombre: "Facebook",
      icon: "f",
      color: "bg-blue-800",
      url: "https://www.facebook.com/share/1EBdQAdfMH/"
    },
    {
      nombre: "Instagram",
      icon: "📸",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://www.instagram.com/velazquezyasociadospy?igsh=MTdrcG5yZzd5dHFqeA=="
    }
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
              Durante la misma, definimos la viabilidad de su caso y acordamos juntos
              los honorarios para una representación efectiva.
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
                    </motion.a>
                ))}
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
                          href={red.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -5 }}
                          aria-label={red.nombre}
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
