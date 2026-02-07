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
import { MoreHorizontal, Search, UserPlus, FileText, Phone } from "lucide-react";

const patients = [
  {
    id: "1",
    name: "Juan Pérez",
    age: 45,
    lastVisit: "2024-02-01",
    condition: "Hipertensión",
    phone: "+54 11 1234-5678",
    status: "Regular",
  },
  {
    id: "2",
    name: "María Garcia",
    age: 32,
    lastVisit: "2024-02-05",
    condition: "Control General",
    phone: "+54 11 8765-4321",
    status: "New",
  },
  {
    id: "4",
    name: "Carlos Rodríguez",
    age: 28,
    lastVisit: "2024-01-20",
    condition: "Diabetes Tipo 2",
    phone: "+54 11 5555-0101",
    status: "Chronic",
  },
  {
    id: "5",
    name: "Ana Martínez",
    age: 60,
    lastVisit: "2024-02-06",
    condition: "Chequeo Anual",
    phone: "+54 11 9999-8888",
    status: "Regular",
  },
];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pacientes</h1>
          <p className="text-slate-500 text-sm">Listado total de pacientes registrados.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <UserPlus size={18} />
          Nuevo Paciente
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar por nombre o condición..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[280px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Paciente</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Contacto</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Condición</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Última Visita</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest text-right pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-sm">{patient.name}</span>
                    <span className="text-slate-400 text-xs">{patient.age} años</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Phone size={14} className="text-slate-400" />
                    {patient.phone}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={cn(
                    "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
                    patient.status === "Regular" ? "bg-blue-50 text-blue-600" : 
                    patient.status === "New" ? "bg-emerald-50 text-emerald-600" : 
                    "bg-orange-50 text-orange-600"
                  )}>
                    {patient.condition}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-600 text-sm font-medium">
                  {new Date(patient.lastVisit).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-primary transition-all">
                      <FileText size={16} />
                    </Button>
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
                          Editar Perfil
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                          Ver Historial
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-slate-50" />
                        <DropdownMenuItem className="rounded-lg text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                          Eliminar
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
