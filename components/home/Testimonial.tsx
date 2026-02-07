"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonial";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

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
    <section className="bg-bg-muted py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary font-semibold text-sm uppercase tracking-wider mb-4 border border-border-subtle"
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
            className="text-lg text-text-muted max-w-2xl mx-auto font-medium"
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
              className="h-full"
            >
              <Card className="rounded-3xl p-8 border-border-subtle shadow-sm bg-card hover:shadow-xl transition-all duration-300 relative group flex flex-col h-full ring-0 outline-hidden">
                <CardHeader className="p-0 mb-6">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-border-subtle">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-black group-hover:text-primary transition-colors leading-none mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Paciente Verificado</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0 flex flex-col grow">
                  <CardTitle className="sr-only">Testimonial from {testimonial.name}</CardTitle>
                  <p className="text-foreground font-medium leading-relaxed relative z-10 grow mb-10">
                    "{testimonial.text}"
                  </p>
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
