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
  Plus, 
  Search, 
  UserPlus, 
  Phone, 
  CreditCard,
  ClipboardList,
  MoreHorizontal
} from "lucide-react";

const patientRegistration = [
  {
    id: "1",
    name: "Juan Pérez",
    lastAuth: "2024-02-01",
    checkIn: "Ready",
    phone: "+54 11 1234-5678",
  },
  {
    id: "2",
    name: "María Garcia",
    lastAuth: "2024-02-05",
    checkIn: "Waiting",
    phone: "+54 11 8765-4321",
  },
  {
    id: "3",
    name: "Carlos Rodríguez",
    lastAuth: "2024-01-20",
    checkIn: "Completed",
    phone: "+54 11 5555-0101",
  },
];

export default function AssistantPatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Registro y Recepción</h1>
          <p className="text-slate-500 text-sm">Gestiona el ingreso y registro de pacientes.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <UserPlus size={18} />
          Registrar Nuevo Paciente
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar paciente para recepción..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[300px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Paciente</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Contacto</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Última Atención</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Estado Check-in</TableHead>
              <TableHead className="text-right pr-6">Acciones Rápidas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientRegistration.map((patient) => (
              <TableRow key={patient.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-slate-900 text-sm">{patient.name}</span>
                    <div className="flex items-center gap-2">
                       <CreditCard size={12} className="text-slate-300" />
                       <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">OS: Particular</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    <Phone size={14} className="text-slate-400" />
                    {patient.phone}
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 text-sm">
                  {new Date(patient.lastAuth).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
                    patient.checkIn === "Ready" ? "bg-emerald-50 text-emerald-600" : 
                    patient.checkIn === "Waiting" ? "bg-amber-50 text-amber-600" : 
                    "bg-slate-50 text-slate-400"
                  )}>
                    {patient.checkIn === "Ready" ? "Listo para Atención" : 
                     patient.checkIn === "Waiting" ? "En Sala de Espera" : "Atención Finalizada"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" className="h-8 rounded-lg border-primary/20 text-primary hover:bg-primary/5 font-bold gap-2 text-xs">
                       <ClipboardList size={14} /> Registrar Visita
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl border-slate-100 shadow-xl p-1">
                        <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 uppercase tracking-widest">Opciones</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-slate-50" />
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary cursor-pointer">
                          Editar Datos
                        </DropdownMenuItem>
                         <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary cursor-pointer">
                          Cobrar Consulta
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
