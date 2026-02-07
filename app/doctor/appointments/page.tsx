"use client";

import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MoreHorizontal, 
  Search, 
  CheckCircle2, 
  User, 
  Stethoscope,
  PlayCircle
} from "lucide-react";

const doctorAppointments = [
  {
    id: "1",
    patient: "Juan Pérez",
    time: "09:00 AM",
    type: "Seguimiento",
    status: "Confirmed",
    reason: "Control de Hipertensión",
  },
  {
    id: "2",
    patient: "María Garcia",
    time: "10:30 AM",
    type: "Urgencia",
    status: "Pending",
    reason: "Dolor abdominal agudo",
  },
  {
    id: "3",
    patient: "Carlos Rodríguez",
    time: "11:45 AM",
    type: "Control",
    status: "Confirmed",
    reason: "Chequeo Post-Operatorio",
  },
];

export default function DoctorAppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mi Agenda Clínica</h1>
          <p className="text-slate-500 text-sm">Gestiona tus consultas y atención a pacientes.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar paciente..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[200px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Hora</TableHead>
              <TableHead className="w-[250px] text-slate-500 font-bold uppercase text-[10px] tracking-widest">Paciente</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Motivo</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Estado</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest text-right pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctorAppointments.map((app) => (
              <TableRow key={app.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Clock size={14} className="text-slate-400" />
                    {app.time}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-xs">
                      {app.patient.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-bold text-slate-900 text-sm">{app.patient}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-700 font-medium">{app.reason}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{app.type}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
                    app.status === "Confirmed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {app.status === "Confirmed" ? "Confirmada" : "En Espera"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" className="h-8 rounded-lg border-primary/20 text-primary hover:bg-primary/5 font-bold gap-2 text-xs">
                      <PlayCircle size={14} />
                      Atender
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 rounded-xl border-slate-100 shadow-xl p-1">
                        <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 uppercase tracking-widest">Opciones Médicas</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-50" />
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary cursor-pointer gap-2">
                          <CheckCircle2 size={14} /> Marcar Completada
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary cursor-pointer gap-2">
                          Ver Historial
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-50" />
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                          Cancelar Cita
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
