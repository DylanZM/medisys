"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Patient {
  id: string;
  first_name: string;
  last_name: string;
  birth_date?: string;
  gender: string;
  phone: string;
}

interface PatientTableRowProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (patientId: string) => void;
}

const getGenderLabel = (gender: string) => {
  const labels: Record<string, string> = {
    male: "Masculino",
    female: "Femenino",
    other: "Otro",
  };
  return labels[gender.toLowerCase()] || gender;
};

const getGenderBadgeColor = (gender: string) => {
  const colors: Record<string, string> = {
    male: "bg-blue-100 text-blue-700",
    female: "bg-pink-100 text-pink-700",
    other: "bg-purple-100 text-purple-700",
  };
  return colors[gender.toLowerCase()] || "bg-slate-100 text-slate-700";
};

const calculateAge = (birthDate?: string) => {
  if (!birthDate) return null;
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export function PatientTableRow({ patient, onEdit, onDelete }: PatientTableRowProps) {
  const fullName = `${patient.first_name} ${patient.last_name}`;
  const age = calculateAge(patient.birth_date);

  return (
    <TableRow className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
      <TableCell className="pl-6 py-4">
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 text-sm">{fullName}</span>
          {age !== null && (
            <span className="text-slate-400 text-xs">{age} años</span>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2 text-slate-600 text-sm">
          <Phone size={14} className="text-slate-400" />
          {patient.phone}
        </div>
      </TableCell>
      <TableCell>
        <Badge
          className={cn(
            "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
            getGenderBadgeColor(patient.gender)
          )}
        >
          {getGenderLabel(patient.gender)}
        </Badge>
      </TableCell>
      <TableCell>
        {patient.birth_date ? (
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <Calendar size={14} className="text-slate-400" />
            {new Date(patient.birth_date).toLocaleDateString('es-AR')}
          </div>
        ) : (
          <span className="text-slate-400 text-sm">-</span>
        )}
      </TableCell>
      <TableCell className="text-right pr-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40 rounded-xl border-slate-100 shadow-xl p-1">
            <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 uppercase tracking-widest">
              Opciones
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-50" />
            <DropdownMenuItem
              onClick={() => onEdit(patient)}
              className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer gap-2"
            >
              <Pencil className="h-3.5 w-3.5" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(patient.id)}
              className="rounded-lg text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer gap-2"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
