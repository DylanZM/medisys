import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, TrendingUp } from "lucide-react";

export default function AdminPage() {
  const stats = [
    {
      title: "Pacientes Totales",
      value: "1,284",
      icon: Users,
      trend: "+12% vs mes pasado",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Citas Hoy",
      value: "24",
      icon: Calendar,
      trend: "4 pendientes",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Consultas",
      value: "582",
      icon: Activity,
      trend: "+5% vs mes pasado",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Crecimiento",
      value: "18%",
      icon: TrendingUp,
      trend: "+2% vs promedio",
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Panel de Control</h1>
        <p className="text-slate-500 font-medium">Resumen general de la actividad de la clínica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
