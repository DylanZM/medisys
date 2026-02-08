"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import { apiClient } from "@/lib/api-client";
import { UserFormDialog } from "./_components/UserFormDialog";
import { UserTableRow } from "./_components/UserTableRow";
import { DeleteUserDialog } from "./_components/DeleteUserDialog";

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  active?: boolean;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [deletingUser, setDeletingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<{ users: User[] }>("/users/list");
      setUsers(response.users || []);
    } catch (error: any) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsFormDialogOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsFormDialogOpen(true);
  };

  const handleDeleteClick = (userId: string) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      setDeletingUser(user);
      setIsDeleteDialogOpen(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deletingUser) return;

    try {
      await apiClient.delete(`/users/${deletingUser.id}`);
      setIsDeleteDialogOpen(false);
      setDeletingUser(null);
      fetchUsers();
    } catch (error: any) {
      alert(error.message || "Error al eliminar usuario");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Gestión de Usuarios</h1>
            <p className="text-slate-500 text-sm">Administra el personal y sus permisos.</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gestión de Usuarios</h1>
          <p className="text-slate-500 text-sm">Administra el personal y sus permisos.</p>
        </div>
        <Button
          onClick={handleCreateUser}
          className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2"
        >
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
              <TableHead className="w-[300px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">
                Usuario
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                Rol
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                Estado
              </TableHead>
              <TableHead className="text-right text-slate-500 font-bold uppercase text-[10px] tracking-widest pr-6">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteClick}
              />
            ))}
          </TableBody>
        </Table>

        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-slate-400">
            <p>No se encontraron usuarios</p>
          </div>
        )}
      </div>

      <UserFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        user={editingUser}
        onSuccess={fetchUsers}
      />

      <DeleteUserDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        username={deletingUser?.username || ""}
      />
    </div>
  );
}
