"use client";

import { testimonials } from "@/data/testimonial";

const anonymousFallbackImage =
  "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

function Testimonial() {
  return (
    <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 text-black">
        Testimonios de Nuestros <br/>
        <span className="text-primary">Pacientes</span>
      </h1>

      <div className="w-full max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black p-6 rounded-xl shadow-md break-inside-avoid border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = anonymousFallbackImage;
                }}
              />
              <div>
                <p className="font-semibold text-primary ">
                  {testimonial.name}
                </p>
              </div>
            </div>
            <p className="text-base text-foreground font-medium leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
