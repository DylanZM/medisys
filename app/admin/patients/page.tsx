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
import { PatientFormDialog } from "./_components/PatientFormDialog";
import { PatientTableRow } from "./_components/PatientTableRow";
import { DeletePatientDialog } from "./_components/DeletePatientDialog";

interface Patient {
  id: string;
  first_name: string;
  last_name: string;
  birth_date?: string;
  gender: string;
  phone: string;
}

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [deletingPatient, setDeletingPatient] = useState<Patient | null>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get<{ patients: Patient[] }>("/patients/");
      setPatients(response.patients || []);
    } catch (error: any) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePatient = () => {
    setEditingPatient(null);
    setIsFormDialogOpen(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setEditingPatient(patient);
    setIsFormDialogOpen(true);
  };

  const handleDeleteClick = (patientId: string) => {
    const patient = patients.find((p) => p.id === patientId);
    if (patient) {
      setDeletingPatient(patient);
      setIsDeleteDialogOpen(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deletingPatient) return;

    try {
      await apiClient.delete(`/patients/${deletingPatient.id}`);
      setIsDeleteDialogOpen(false);
      setDeletingPatient(null);
      fetchPatients();
    } catch (error: any) {
      alert(error.message || "Error al eliminar paciente");
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Pacientes</h1>
            <p className="text-slate-500 text-sm">Listado total de pacientes registrados.</p>
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
          <h1 className="text-2xl font-bold text-slate-900">Pacientes</h1>
          <p className="text-slate-500 text-sm">Listado total de pacientes registrados.</p>
        </div>
        <Button
          onClick={handleCreatePatient}
          className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition-all duration-300 gap-2"
        >
          <UserPlus size={18} />
          Nuevo Paciente
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center gap-4 bg-slate-50/30">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <Input
              placeholder="Buscar por nombre o teléfono..."
              className="pl-10 h-10 rounded-xl border-slate-200 focus:ring-primary/20 transition-all bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-50">
              <TableHead className="w-[280px] text-slate-500 font-bold uppercase text-[10px] tracking-widest pl-6">
                Paciente
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                Contacto
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                Género
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                Fecha de Nacimiento
              </TableHead>
              <TableHead className="text-slate-500 font-bold uppercase text-[10px] tracking-widest text-right pr-6">
                Acciones
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.map((patient) => (
              <PatientTableRow
                key={patient.id}
                patient={patient}
                onEdit={handleEditPatient}
                onDelete={handleDeleteClick}
              />
            ))}
          </TableBody>
        </Table>

        {filteredPatients.length === 0 && (
          <div className="p-8 text-center text-slate-400">
            <p>No se encontraron pacientes</p>
          </div>
        )}
      </div>

      <PatientFormDialog
        open={isFormDialogOpen}
        onOpenChange={setIsFormDialogOpen}
        patient={editingPatient}
        onSuccess={fetchPatients}
      />

      <DeletePatientDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        patientName={deletingPatient ? `${deletingPatient.first_name} ${deletingPatient.last_name}` : ""}
      />
    </div>
  );
}
