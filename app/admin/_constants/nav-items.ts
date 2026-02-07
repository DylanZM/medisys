import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserSquare2, 
  ClipboardList, 
  Settings,
  MessageSquare,
  Activity
} from "lucide-react";

export type UserRole = "ADMIN" | "DOCTOR" | "ASSISTANT";

export interface NavItem {
  title: string;
  href: string;
  icon: any;
  roles: UserRole[];
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  },
  {
    title: "Usuarios",
    href: "/admin/users",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    title: "Citas",
    href: "/admin/appointments",
    icon: Calendar,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  },
  {
    title: "Pacientes",
    href: "/admin/patients",
    icon: UserSquare2,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  },
  {
    title: "Historial Clínico",
    href: "/admin/records",
    icon: ClipboardList,
    roles: ["ADMIN", "DOCTOR"],
  },
  {
    title: "Mensajes",
    href: "/admin/messages",
    icon: MessageSquare,
    roles: ["ADMIN", "ASSISTANT"],
  },
  {
    title: "Analíticas",
    href: "/admin/analytics",
    icon: Activity,
    roles: ["ADMIN"],
  },
  {
    title: "Configuración",
    href: "/admin/settings",
    icon: Settings,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  }
];
