"use client";

import { useState, useEffect } from "react";
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

interface Patient {
  id: string;
  first_name: string;
  last_name: string;
  birth_date?: string;
  gender: string;
  phone: string;
}

interface PatientFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patient: Patient | null;
  onSuccess: () => void;
}

export function PatientFormDialog({ open, onOpenChange, patient, onSuccess }: PatientFormDialogProps) {
  const isEditing = !!patient;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "Male",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (patient) {
      setFormData({
        first_name: patient.first_name,
        last_name: patient.last_name,
        birth_date: patient.birth_date || "",
        gender: patient.gender || "Male",
        phone: patient.phone,
      });
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        birth_date: "",
        gender: "Male",
        phone: "",
      });
    }
    setError("");
  }, [patient, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isEditing) {
        const updateData: any = {};
        if (formData.first_name) updateData.first_name = formData.first_name;
        if (formData.last_name) updateData.last_name = formData.last_name;
        if (formData.birth_date) updateData.birth_date = formData.birth_date;
        if (formData.gender) updateData.gender = formData.gender;
        if (formData.phone) updateData.phone = formData.phone;

        await apiClient.put(`/patients/${patient.id}`, updateData);
      } else {
        const createData = {
          first_name: formData.first_name,
          last_name: formData.last_name,
          birth_date: formData.birth_date || null,
          gender: formData.gender,
          phone: formData.phone,
        };
        await apiClient.post("/patients", createData);
      }
      
      onSuccess();
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || `Error al ${isEditing ? "actualizar" : "crear"} paciente`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Editar Paciente" : "Nuevo Paciente"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Modifica los datos del paciente" : "Completa los datos para registrar un nuevo paciente"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first_name">Nombre</Label>
                <Input
                  id="first_name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  required={!isEditing}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name">Apellido</Label>
                <Input
                  id="last_name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  required={!isEditing}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="birth_date">Fecha de Nacimiento</Label>
              <Input
                id="birth_date"
                type="date"
                value={formData.birth_date}
                onChange={(e) => setFormData({ ...formData, birth_date: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gender">Género</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Masculino</SelectItem>
                  <SelectItem value="Female">Femenino</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+54 11 1234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required={!isEditing}
              />
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
