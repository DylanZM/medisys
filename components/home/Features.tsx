"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { features } from "@/data/features";

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
              <span>¿Por qué elegirnos?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-[1.1] mb-8">
              Comprometidos con su <br/>
              <span className="text-primary">Salud y Bienestar</span>
            </h2>
            <p className="text-lg text-foreground b-10 leading-relaxed max-w-xl">
              En MediSys, no solo ofrecemos tratamientos, brindamos una experiencia de cuidado integral centrada en el paciente. Nuestra dedicación a la excelencia nos distingue.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100"
                >
                  <div className={`mt-1 ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-1">{feature.title}</h3>
                    <p className="text-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-5xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                alt="Medical Equipment" 
                className="w-full aspect-4/5 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="text-black font-bold text-xl">Certificación ISO 9001</p>
                    <p className="text-slate-600 font-medium">Estándares Internacionales de Calidad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
