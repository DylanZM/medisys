"use client";

import { Card } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  Plus, 
  Search,
  CheckCircle2,
  Clock,
  UserPlus
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AssistantDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Panel Operativo</h1>
          <p className="text-slate-500 text-sm mt-1">Gestión de agenda y recepción de pacientes.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 font-bold gap-2">
            <Plus size={18} />
            Nueva Cita
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
            <UserPlus size={18} />
            Registrar Paciente
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Pacientes Hoy", value: "24", icon: Users, color: "bg-blue-50 text-blue-600" },
          { label: "Citas Confirmadas", value: "18", icon: CheckCircle2, color: "bg-emerald-50 text-emerald-600" },
          { label: "En Espera", value: "5", icon: Clock, color: "bg-amber-50 text-amber-600" },
          { label: "Médicos Libres", value: "3", icon: Calendar, color: "bg-purple-50 text-purple-600" },
        ].map((stat, i) => (
          <Card key={i} className="p-6 border-slate-100 shadow-sm bg-white">
            <div className="p-2 w-fit rounded-lg mb-4 stat.color">
               <stat.icon size={20} className={stat.color.split(' ')[1]} />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-slate-100 shadow-sm bg-white overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Agenda del Día</h2>
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
              <Input placeholder="Buscar..." className="pl-9 h-8 text-xs rounded-lg border-slate-100" />
            </div>
          </div>
          <div className="p-0">
             <div className="p-8 text-center text-slate-400 italic text-sm">
                Lista de citas cargando...
             </div>
          </div>
        </Card>

        <Card className="border-slate-100 shadow-sm bg-white p-6">
          <h2 className="font-bold text-slate-900 mb-6">Disponibilidad Médica</h2>
          <div className="space-y-4">
            {[
              { name: "Dr. Alejandro Gómez", specialty: "Cardiología", status: "Disponible" },
              { name: "Dra. Elena Rodríguez", specialty: "Pediatría", status: "En Consulta" },
              { name: "Dra. Sofía Martínez", specialty: "Dermatología", status: "Disponible" },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-sm font-bold text-slate-900">{doc.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{doc.specialty}</p>
                </div>
                <Badge variant="outline" className={cn(
                  "rounded-full px-2 py-0 text-[9px] font-bold border-none",
                  doc.status === "Disponible" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                )}>
                  {doc.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
