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
  CalendarCheck,
  User,
  CheckCircle2,
  XCircle
} from "lucide-react";

const globalAgenda = [
  {
    id: "1",
    patient: "Juan Pérez",
    doctor: "Dr. Alejandro Gómez",
    time: "09:00 AM",
    status: "Confirmed",
    room: "Consultorio 101",
  },
  {
    id: "2",
    patient: "María Garcia",
    doctor: "Dra. Elena Rodríguez",
    time: "09:30 AM",
    status: "Pending",
    room: "Consultorio 204",
  },
  {
    id: "3",
    patient: "Carlos Rodríguez",
    doctor: "Dra. Sofía Martínez",
    time: "10:00 AM",
    status: "Confirmed",
    room: "Consultorio 105",
  },
];

export default function AssistantAgendaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Agenda Global</h1>
          <p className="text-slate-500 text-sm">Gestión de citas y coordinación de médicos.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <CalendarCheck size={18} />
          Nueva Cita
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar por paciente o doctor..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
             <Badge className="bg-white border-slate-200 text-slate-600 font-bold py-1 px-3 rounded-lg shadow-sm">Hoy: 15 Citas</Badge>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[120px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Hora</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Paciente</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Asignado a</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Ubicación</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Estado</TableHead>
              <TableHead className="text-right pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {globalAgenda.map((app) => (
              <TableRow key={app.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4 font-bold text-slate-900 text-sm">
                  {app.time}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-sm">{app.patient}</span>
                    <span className="text-slate-400 text-[10px] font-bold uppercase">ID: PAT_00{app.id}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-slate-600 font-medium">{app.doctor}</span>
                </TableCell>
                <TableCell>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{app.room}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
                    app.status === "Confirmed" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {app.status === "Confirmed" ? "Confirmada" : "Pendiente"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 rounded-xl border-slate-100 shadow-xl p-1">
                      <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 uppercase tracking-widest">Gestión Operativa</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-slate-50" />
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-emerald-600 hover:bg-emerald-50 cursor-pointer gap-2">
                        <CheckCircle2 size={14} /> Confirmar Cita
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 cursor-pointer gap-2">
                        <XCircle size={14} /> Cancelar Cita
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-50" />
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary cursor-pointer">
                        Reasignar Médico
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
