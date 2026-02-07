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
import { MoreHorizontal, Plus, Search, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const users = [
  {
    id: "1",
    name: "Dr. Alejandro Gómez",
    email: "alejandro.g@medisys.com",
    role: "ADMIN",
    status: "Active",
    avatar: "AG",
  },
  {
    id: "2",
    name: "Dra. Elena Rodríguez",
    email: "elena.r@medisys.com",
    role: "DOCTOR",
    status: "Active",
    avatar: "ER",
  },
  {
    id: "3",
    name: "Marcos Santos",
    email: "marcos.s@medisys.com",
    role: "ASSISTANT",
    status: "Inactive",
    avatar: "MS",
  },
  {
    id: "4",
    name: "Dra. Sofía Martínez",
    email: "sofia.m@medisys.com",
    role: "DOCTOR",
    status: "Active",
    avatar: "SM",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestión de Usuarios</h1>
          <p className="text-slate-500 text-sm">Administra el personal y sus permisos.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2">
          <UserPlus size={18} />
          Nuevo Usuario
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input 
              placeholder="Buscar por nombre o correo..." 
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[300px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">Usuario</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Rol</TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Estado</TableHead>
              <TableHead className="text-right text-slate-500 font-bold uppercase text-[10px] tracking-widest pr-6">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="group hover:bg-slate-50/50 border-slate-50 transition-colors">
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-slate-100 ring-2 ring-white">
                      <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 text-sm">{user.name}</span>
                      <span className="text-slate-400 text-xs">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="rounded-lg px-2 py-0.5 text-[10px] font-bold tracking-wide bg-slate-100 text-slate-600 border-none">
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "size-2 rounded-full",
                      user.status === "Active" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-slate-300"
                    )} />
                    <span className="text-sm text-slate-600 font-medium">
                      {user.status === "Active" ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40 rounded-xl border-slate-100 shadow-xl p-1">
                      <DropdownMenuLabel className="text-xs font-bold text-slate-400 px-2 py-1.5 Uppercase tracking-widest">Opciones</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-slate-50" />
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                        Desactivar
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
