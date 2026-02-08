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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  active?: boolean;
}

interface UserTableRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

const getRoleBadgeColor = (role: string) => {
  const colors: Record<string, string> = {
    admin: "bg-purple-100 text-purple-700",
    doctor: "bg-blue-100 text-blue-700",
    assistant: "bg-emerald-100 text-emerald-700",
    patient: "bg-slate-100 text-slate-700",
  };
  return colors[role.toLowerCase()] || "bg-slate-100 text-slate-700";
};

const getRoleLabel = (role: string) => {
  const labels: Record<string, string> = {
    admin: "Administrador",
    doctor: "Doctor",
    assistant: "Asistente",
    patient: "Paciente",
  };
  return labels[role.toLowerCase()] || role;
};

export function UserTableRow({ user, onEdit, onDelete }: UserTableRowProps) {
  const initials = user.username.slice(0, 2).toUpperCase();
  const isActive = user.active !== false;

  return (
    <TableRow className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
      <TableCell className="pl-6 py-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-slate-100 ring-2 ring-white">
            <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-sm">{user.username}</span>
            <span className="text-slate-400 text-xs">{user.email}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Badge
          className={cn(
            "rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide border-none",
            getRoleBadgeColor(user.role)
          )}
        >
          {getRoleLabel(user.role)}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "size-2 rounded-full",
              isActive
                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                : "bg-slate-300"
            )}
          />
          <span className="text-sm text-slate-600 font-medium">
            {isActive ? "Activo" : "Inactivo"}
          </span>
        </div>
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
              onClick={() => onEdit(user)}
              className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer gap-2"
            >
              <Pencil className="h-3.5 w-3.5" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(user.id)}
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
