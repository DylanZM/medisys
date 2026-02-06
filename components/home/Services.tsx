"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

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
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            <span>Nuestras Especialidades</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-black leading-tight mb-4"
          >
            Servicios Médicos de <br />
            <span className="text-primary">Clase Mundial</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground max-w-2xl mx-auto font-medium"
          >
            Ofrecemos una amplia gama de cuidados especializados, combinando experiencia médica con las últimas innovaciones tecnológicas.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          {services.slice(0, 6).map((service, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.15 }}
                className="text-primary transition-all duration-300 flex flex-col items-center justify-center px-8"
              >
                <service.icon size={64} />
                <span className="mt-4 text-lg font-semibold text-foreground">{service.title}</span>
              </motion.div>
              {index < 5 && (
                <div className="h-24 border-l border-slate-200 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
