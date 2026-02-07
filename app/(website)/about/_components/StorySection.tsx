import React from "react";
import Image from "next/image";
import { aboutData } from "@/data/about";

export const StorySection = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-5xl shadow-2xl shadow-primary/5">
              <Image
                src={aboutData.story.image}
                alt="Medical Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
                Trayectoria
              </span>
              <h2 className="text-4xl font-bold text-black mb-6">
                {aboutData.story.title}
              </h2>
              <p className="text-xl font-semibold text-slate-800 italic">
                "{aboutData.story.subtitle}"
              </p>
            </div>

            <div className="space-y-6">
              {aboutData.story.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
