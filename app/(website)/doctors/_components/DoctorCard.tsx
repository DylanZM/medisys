import React from "react";
import Image from "next/image";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="group relative bg-white rounded-4xl border border-slate-100 p-3 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(50,179,238,0.1)] hover:-translate-y-2">
      <div className="absolute top-6 left-6 z-20">
        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm border border-slate-100/50">
          {doctor.specialty}
        </span>
      </div>

      <div className="relative aspect-4/5 overflow-hidden rounded-3xl mb-6 shadow-inner">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-x-6 bottom-6 flex justify-center gap-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-30">
          {doctor.socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={20} className="drop-shadow-sm" />
            </a>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors duration-300">
          {doctor.name}
        </h3>
        <p className="text-[0.9rem] text-foreground leading-relaxed font-medium group-hover:text-slate-900 transition-colors duration-300">
          {doctor.bio}
        </p>
      </div>
    </div>
  );
};
