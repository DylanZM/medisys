"use client";

import { testimonials } from "@/data/testimonial";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const anonymousFallbackImage =
  "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Testimonial() {
  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            <span>Opiniones Reales</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-4"
          >
            Testimonios de Nuestros <br/>
            <span className="text-primary">Pacientes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground max-w-2xl mx-auto"
          >
            La confianza de nuestros pacientes es nuestro mayor orgullo. Conoce sus experiencias con nuestro equipo médico.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col group transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <CardHeader className="p-0 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col h-full">
                  <CardTitle className="sr-only">Testimonial from {testimonial.name}</CardTitle>
                  <p className="text-slate-700 font-medium leading-relaxed mb-8 relative z-10 grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="relative w-12 h-12 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/10"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = anonymousFallbackImage;
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-black leading-none mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-foreground font-medium">Paciente Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonial;
