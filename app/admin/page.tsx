"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, TrendingUp, UserCog } from "lucide-react";
import { apiClient } from "@/lib/api-client";

interface AdminStats {
  total_appointments: number;
  total_patients: number;
  consultations_month: number;
  total_users: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiClient.get<AdminStats>("/stats/admin");
        setStats(data);
      } catch (err: any) {
        setError(err.message || "Error al cargar estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsCards = stats ? [
    {
      title: "Pacientes Totales",
      value: stats.total_patients.toLocaleString(),
      icon: Users,
      trend: "Total registrados",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Citas Totales",
      value: stats.total_appointments.toLocaleString(),
      icon: Calendar,
      trend: "Todas las citas",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Consultas del Mes",
      value: stats.consultations_month.toLocaleString(),
      icon: Activity,
      trend: "Mes actual",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Usuarios del Sistema",
      value: stats.total_users.toLocaleString(),
      icon: UserCog,
      trend: "Total activos",
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ] : [];

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Panel de Control</h1>
          <p className="text-slate-500 font-medium">Resumen general de la actividad de la clínica.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="border-slate-100 shadow-sm animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-slate-200 rounded w-24"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-slate-200 rounded w-16 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-20"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Panel de Control</h1>
          <p className="text-slate-500 font-medium">Resumen general de la actividad de la clínica.</p>
        </div>
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <p className="text-red-600 font-medium">Error: {error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Panel de Control</h1>
        <p className="text-slate-500 font-medium">Resumen general de la actividad de la clínica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                {stat.title}
              </CardTitle>
              <div className={stat.bg + " p-2 rounded-xl " + stat.color}>
                <stat.icon size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <p className="text-xs font-bold text-slate-400 mt-1">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-100 shadow-sm p-6 min-h-[300px] flex items-center justify-center bg-slate-50/50 border-dashed border-2">
          <div className="text-center">
            <Activity className="size-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Gráfico de Actividad Semanal</p>
          </div>
        </Card>
        <Card className="border-slate-100 shadow-sm p-6 min-h-[300px] flex items-center justify-center bg-slate-50/50 border-dashed border-2">
          <div className="text-center">
            <Calendar className="size-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Próximas Citas Destacadas</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
