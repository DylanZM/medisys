"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight, Users, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full bg-white py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#32B3EE] font-semibold text-sm uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Salud de vanguardia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1]">
           Cuidado Médico <br/>
              <span className="text-[#32B3EE]">Facinante</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
Experimente una nueva era en la atención médica. Le conectamos con los mejores especialistas mediante tecnología de vanguardia y un trato humano.            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-[#32B3EE] hover:bg-[#1e8bc0] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <CalendarCheck className="mr-2 w-5 h-5" />
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg">
                Saber Más
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-12">
              <div>
                <h4 className="text-3xl font-bold text-slate-900">10k+</h4>
                <p className="text-sm text-slate-500 font-medium">Pacientes Atendidos</p>
              </div>
            
              <div>
                <h4 className="text-3xl font-bold text-slate-900">50+</h4>
                <p className="text-sm text-slate-500 font-medium">Especialistas</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/banners/banner1.webp"
              alt="Medical Team"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center gap-4 max-w-xs"
            >
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">Equipe</p>
                <p className="text-sm font-bold text-slate-900">Médicos Certificados</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
