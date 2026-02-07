"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  FileText, 
  History, 
  Plus, 
  Activity, 
  Clipboard,
  Heart
} from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function MedicalRecordPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/doctor/patients">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">Expediente Clínico</h1>
              <Badge variant="outline" className="bg-primary/5 text-primary border-none font-bold uppercase text-[10px]">Paciente: {id}</Badge>
            </div>
            <p className="text-slate-500 text-sm mt-1">Historial médico completo y diagnósticos detallados.</p>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <Plus size={18} />
          Nueva Evolución
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="p-8 border-slate-100 shadow-sm bg-white space-y-6">
          <div className="text-center space-y-4">
            <div className="mx-auto size-24 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-2xl">
              JP
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Juan Pérez</h2>
              <p className="text-sm text-slate-500">ID: {id} • 45 años • Masculino</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Heart size={16} className="text-red-500" />
                Signos Vitales
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Presión</p>
                   <p className="font-bold text-slate-700">120/80</p>
                </div>
                <div>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ritmo</p>
                   <p className="font-bold text-slate-700">72 bpm</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-2">Alergias</p>
              <div className="flex flex-wrap gap-2 px-2">
                 <Badge className="bg-red-50 text-red-600 border-none rounded-lg text-[10px]">Penicilina</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* History / Consultations */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-slate-100 shadow-sm bg-white overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex items-center gap-2 font-bold text-slate-900">
                <History size={18} className="text-primary" />
                Evoluciones Médicas
             </div>
             <div className="divide-y divide-slate-50">
               {[
                 { date: "2024-02-01", doctor: "Dr. Alejandro Gómez", diagnosis: "Hipertensión controlada, continuar con Enalapril 10mg.", type: "Seguimiento" },
                 { date: "2023-11-15", doctor: "Dr. Alejandro Gómez", diagnosis: "Gripe común, reposo e hidratación.", type: "Consulta General" }
               ].map((item, i) => (
                 <div key={i} className="p-6 space-y-3 hover:bg-slate-50/30 transition-colors">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{new Date(item.date).toLocaleDateString()}</span>
                          <Badge variant="outline" className="rounded-lg text-[9px] uppercase font-bold text-slate-400">{item.type}</Badge>
                       </div>
                       <span className="text-[11px] text-slate-400 font-medium">Médico: {item.doctor}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100/50">
                       {item.diagnosis}
                    </p>
                 </div>
               ))}
             </div>
          </Card>

          <Card className="p-8 border-slate-100 shadow-sm bg-white border-dashed border-2 flex items-center justify-center">
             <div className="text-center space-y-2">
                <Clipboard className="mx-auto text-slate-200" size={40} />
                <p className="font-bold text-slate-400">Ver Estudios y Resultados</p>
                <p className="text-xs text-slate-400">PDFs y radiografías próximamente disponibles.</p>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
