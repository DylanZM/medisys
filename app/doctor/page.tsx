"use client";

import { Card } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Activity
} from "lucide-react";

export default function DoctorDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Panel Clíinico</h1>
        <p className="text-slate-500 text-sm mt-1">Bienvenido de nuevo, Dr. Gómez. Aquí tienes tu agenda de hoy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Citas Hoy</p>
              <p className="text-2xl font-bold text-slate-900">8</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Completadas</p>
              <p className="text-2xl font-bold text-slate-900">3</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pendientes</p>
              <p className="text-2xl font-bold text-slate-900">5</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-100 shadow-sm overflow-hidden bg-white">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Próximas Citas</h2>
            <button className="text-primary text-sm font-bold hover:underline">Ver todas</button>
          </div>
          <div className="divide-y divide-slate-50">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                    {i === 1 ? "JP" : i === 2 ? "MG" : "CR"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {i === 1 ? "Juan Pérez" : i === 2 ? "María Garcia" : "Carlos Rodríguez"}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">Consulta General • 10:30 AM</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-primary transition-all shadow-sm border border-transparent hover:border-slate-100">
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-slate-100 shadow-sm p-8 bg-slate-50/50 border-dashed border-2 flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-3">
             <div className="mx-auto size-16 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-300">
                <Clock size={32} />
             </div>
             <p className="font-bold text-slate-400">Historial Clínico Reciente</p>
             <p className="text-xs text-slate-400 max-w-[240px]">Aquí aparecerán los expedientes que has consultado recientemente.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
