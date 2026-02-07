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
  Plus, 
  User, 
  Stethoscope 
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const appointments = [
  {
    id: "1",
    patient: "Juan Pérez",
    doctor: "Dr. Alejandro Gómez",
    date: "2024-02-10",
    time: "09:00 AM",
    type: "Consulta",
    status: "Confirmed",
  },
  {
    id: "2",
    patient: "María Garcia",
    doctor: "Dra. Elena Rodríguez",
    date: "2024-02-10",
    time: "10:30 AM",
    type: "Urgencia",
    status: "Pending",
  },
  {
    id: "3",
    patient: "Carlos Rodríguez",
    doctor: "Dra. Sofía Martínez",
    date: "2024-02-11",
    time: "08:15 AM",
    type: "Control",
    status: "Cancelled",
  },
  {
    id: "4",
    patient: "Ana Martínez",
    doctor: "Dr. Alejandro Gómez",
    date: "2024-02-11",
    time: "11:45 AM",
    type: "Consulta",
    status: "Confirmed",
  },
];

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter((app) =>
    app.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Citas Médicas</h1>
          <p className="text-slate-500 text-sm">Próximas consultas y gestión de agenda.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <CalendarIcon size={18} />
          Nueva Cita
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar paciente o doctor..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[250px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Paciente</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Doctor</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Fecha y Hora</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Tipo</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Estado</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest text-right pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((app) => (
              <TableRow key={app.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      <User size={16} />
                    </div>
                    <span className="font-bold text-slate-900 text-sm">{app.patient}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Stethoscope size={14} className="text-primary/60" />
                    <span className="font-medium">{app.doctor}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-900 text-sm font-bold">
                      <CalendarIcon size={14} className="text-slate-400" />
                      {app.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase">
                      <Clock size={12} />
                      {app.time}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm font-medium text-slate-600">{app.type}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
                    app.status === "Confirmed" ? "bg-emerald-50 text-emerald-600" : 
                    app.status === "Pending" ? "bg-amber-50 text-amber-600" : 
                    "bg-red-50 text-red-600"
                  )}>
                    {app.status === "Confirmed" ? "Confirmada" : 
                     app.status === "Pending" ? "Pendiente" : "Cancelada"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 rounded-xl border-slate-100 shadow-xl p-1">
                      <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 uppercase tracking-widest">Opciones</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-slate-50" />
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                        Reprogramar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                        Ver Detalles
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-50" />
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                        Cancelar Cita
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
