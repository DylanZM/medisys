"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Badge } from "../../../../components/ui/badge";
import { Textarea } from "../../../../components/ui/textarea";
import { contactInfo } from "@/data/contact";
import { Alert, AlertTitle } from "../../../../components/ui/alert";
import { useState } from "react";

export function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.nombre || !form.correo || !form.asunto || !form.mensaje) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setError("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
    setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              Contacto
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-8">
              ¿Listo para agendar <br />
              <span className="text-primary">Tu Consulta?</span>
            </h2>
            <p className="text-lg text-foreground mb-12 leading-relaxed">
              Nuestro equipo de atención al cliente está listo para ayudarte.
              Contáctanos por cualquier medio o visítanos en nuestras
              instalaciones.
            </p>

            <div className="grid grid-cols-1 border border-border-subtle rounded-lg overflow-hidden">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`flex group border-border-subtle ${
                    index > 0 ? "border-t" : ""
                  }`}
                >
                  <div className="p-6 sm:p-8 border-r border-border-subtle flex items-center justify-center min-w-[100px] sm:min-w-[120px] bg-white group-hover:bg-bg-muted transition-colors">
                    <item.icon
                      size={32}
                      className="text-slate-900 group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-center bg-white group-hover:bg-bg-muted transition-colors flex-1">
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-muted leading-relaxed font-medium text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-5xl shadow-2xl shadow-blue-500/10 border border-slate-100 p-8 lg:p-12"
          >
            <h3 className="text-2xl font-bold text-black mb-8">
              Envíanos un mensaje
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Nombre Completo
                  </label>
                  <Input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className=" h-11 border-border-subtle text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Correo Electrónico
                  </label>
                  <Input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className=" h-11 border-border-subtle text-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Asunto
                </label>
                <Input
                  type="text"
                  name="asunto"
                  value={form.asunto}
                  onChange={handleChange}
                  placeholder="Motivo de tu mensaje"
                  className=" h-11 border-border-subtle text-black"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Mensaje
                </label>
                <Textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className=" h-11 border-border-subtle text-black"
                />
              </div>
              {error && (
                <div className="text-red-600 font-semibold text-sm text-center">{error}</div>
              )}
              <Button className="w-full rounded-2xl py-7 bg-primary hover:bg-[#1e8bc0] text-lg font-bold shadow-lg shadow-blue-500/20 group">
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
            {showAlert && (
              <div
                style={{
                  position: "fixed",
                  bottom: 24,
                  right: 24,
                  zIndex: 50,
                  maxWidth: 350,
                }}
              >
                <Alert className=" text-white bg-primary">
                  <Send className="mr-2 w-5 h-5" />
                  <AlertTitle>¡Mensaje enviado con éxito!</AlertTitle>
                </Alert>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
