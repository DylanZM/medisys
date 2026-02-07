"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm sm:text-base whitespace-nowrap">
            ¿Por qué elegirnos?
          </span>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black uppercase tracking-tight">
            Somos Calidad
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-100 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`flex group border-slate-100
                ${index % 2 !== 0 ? "md:border-l" : ""} 
                ${index > 1 ? "border-t" : ""}
                ${index > 0 && index % 2 === 0 ? "border-t md:border-t" : ""}
                ${index === 1 ? "border-t md:border-t-0" : ""}
              `}
            >
              <div className="p-8 sm:p-12 border-r border-slate-100 flex items-center justify-center min-w-[120px] sm:min-w-[160px] bg-white group-hover:bg-slate-50/50 transition-colors">
                <feature.icon
                  size={48}
                  className="text-slate-900 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1}
                />
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-center  bg-white group-hover:bg-slate-50/30 transition-colors">
                <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
