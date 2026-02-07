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
  // --- ADMIN ROUTES ---
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    roles: ["ADMIN"],
  },
  {
    title: "Usuarios",
    href: "/admin/users",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    title: "Pacientes",
    href: "/admin/patients",
    icon: UserSquare2,
    roles: ["ADMIN"],
  },
  {
    title: "Citas",
    href: "/admin/appointments",
    icon: Calendar,
    roles: ["ADMIN"],
  },

  // --- DOCTOR ROUTES ---
  {
    title: "Mi Agenda",
    href: "/doctor/appointments",
    icon: Calendar,
    roles: ["DOCTOR"],
  },
  {
    title: "Mis Pacientes",
    href: "/doctor/patients",
    icon: UserSquare2,
    roles: ["DOCTOR"],
  },

  // --- ASSISTANT ROUTES ---
  {
    title: "Agenda Global",
    href: "/assistant/agenda",
    icon: Calendar,
    roles: ["ASSISTANT"],
  },
  {
    title: "Pacientes",
    href: "/assistant/patients",
    icon: Users,
    roles: ["ASSISTANT"],
  },

  // --- SHARED / COMMON ---
  {
    title: "Avisos",
    href: "#",
    icon: MessageSquare,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  },
  {
    title: "Configuración",
    href: "/admin/settings",
    icon: Settings,
    roles: ["ADMIN", "DOCTOR", "ASSISTANT"],
  }
];
