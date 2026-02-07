import React from "react";
import { aboutData } from "@/data/about";

export const StatsSection = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                <stat.icon size={24} className="text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">
                {stat.value}
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
