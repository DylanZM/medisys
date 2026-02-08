"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiClient } from "@/lib/api-client";

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  active?: boolean;
}

interface UserFormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

interface UserFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User | null;
  onSuccess: () => void;
}

export function UserFormDialog({ open, onOpenChange, user, onSuccess }: UserFormDialogProps) {
  const isEditing = !!user;
  const [formData, setFormData] = useState<UserFormData>({
    username: user?.username || "",
    email: user?.email || "",
    password: "",
    role: user?.role || "assistant",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Update form when user changes
  useState(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: "",
        role: user.role,
      });
    } else {
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "assistant",
      });
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isEditing) {
        const updateData: any = {
          username: formData.username,
          email: formData.email,
          role: formData.role,
        };
        await apiClient.put(`/users/${user.id}`, updateData);
      } else {
        await apiClient.post("/users", formData);
      }
      
      onSuccess();
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || `Error al ${isEditing ? "actualizar" : "crear"} usuario`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Usuario" : "Crear Nuevo Usuario"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Modifica los datos del usuario" : "Completa los datos para crear un nuevo usuario"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            {!isEditing && (
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="role">Rol</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="assistant">Asistente</SelectItem>
                  <SelectItem value="patient">Paciente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Guardando..." : isEditing ? "Actualizar" : "Crear"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
