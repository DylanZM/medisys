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
import { MoreHorizontal, Search, FileText, User, ChevronRight } from "lucide-react";
import Link from "next/link";

const doctorPatients = [
  {
    id: "pat_1",
    name: "Juan Pérez",
    age: 45,
    lastVisit: "2024-02-01",
    condition: "Hipertensión",
    risk: "Medium",
  },
  {
    id: "pat_2",
    name: "María Garcia",
    age: 32,
    lastVisit: "2024-02-05",
    condition: "Embarazo 24 semanas",
    risk: "Low",
  },
  {
    id: "pat_3",
    name: "Carlos Rodríguez",
    age: 28,
    lastVisit: "2024-01-20",
    condition: "Diabetes Tipo 2",
    risk: "High",
  },
];

export default function DoctorPatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mis Pacientes</h1>
          <p className="text-slate-500 text-sm">Lista de pacientes bajo tu cuidado clínico.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar paciente por nombre..." 
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
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Condición Principal</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Riesgo</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Última Consulta</TableHead>
              <TableHead className="text-right pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctorPatients.map((patient) => (
              <TableRow key={patient.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <User size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 text-sm">{patient.name}</span>
                      <span className="text-slate-400 text-xs">{patient.age} años</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-slate-700 font-medium">{patient.condition}</span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-full px-2 py-0 text-[9px] font-bold border-none",
                    patient.risk === "Low" ? "bg-emerald-50 text-emerald-600" :
                    patient.risk === "Medium" ? "bg-amber-50 text-amber-600" :
                    "bg-red-50 text-red-600"
                  )}>
                    Riesgo {patient.risk === "Low" ? "Bajo" : patient.risk === "Medium" ? "Medio" : "Alto"}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-500 text-sm font-medium">
                  {new Date(patient.lastVisit).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/doctor/patients/${patient.id}/record`}>
                    <Button variant="ghost" className="h-9 rounded-xl hover:bg-primary/5 hover:text-primary font-bold text-xs gap-2">
                      <FileText size={16} />
                      Ver Expediente
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </Link>
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
