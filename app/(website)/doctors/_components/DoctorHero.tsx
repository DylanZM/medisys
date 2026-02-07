"use client";

import React from "react";
import { motion } from "framer-motion";

export const DoctorHero = () => {
  return (
    <section className="relative pt-32 pb-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6"
        >
          Nuestro Equipo de <span className="text-primary">Especialistas</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Contamos con un equipo médico de primer nivel, comprometido con tu bienestar 
          y con la excelencia en cada consulta. Conoce a los profesionales que cuidan de tu salud.
        </motion.p>
      </div>
    </section>
  );
};
