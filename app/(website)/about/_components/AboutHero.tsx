import React from "react";
import { aboutData } from "@/data/about";

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
          {aboutData.hero.title.split('Salud')[0]}
          <span className="text-primary">Salud</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          {aboutData.hero.description}
        </p>
      </div>
    </section>
  );
};
