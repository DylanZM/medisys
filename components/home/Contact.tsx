"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

export function Contact() {
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

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-2xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    Visítanos
                  </h4>
                  <p className="text-foreground">
                    Av. Principal de la Salud, Edif. MediSys
                    <br />
                    Santo Domingo, República Dominicana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    Llámanos
                  </h4>
                  <p className="text-foreground">
                    +1 (809) 123-4567
                    <br />
                    +1 (809) 765-4321
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    Escríbenos
                  </h4>
                  <p className="text-foreground">
                    contacto@medisys.com
                    <br />
                    citas@medisys.com
                  </p>
                </div>
              </div>
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">
                    Nombre Completo
                  </label>
                  <Input
                    type="text"
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
                  placeholder="Motivo de tu mensaje"
                  className=" h-11 border-border-subtle text-black" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground ml-1">
                  Mensaje
                </label>
                <Textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className=" h-11 border-border-subtle text-black" 
                />
              </div>
              <Button className="w-full rounded-2xl py-7 bg-primary hover:bg-[#1e8bc0] text-lg font-bold shadow-lg shadow-blue-500/20 group">
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
