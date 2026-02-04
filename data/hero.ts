import { CalendarCheck, ArrowRight, Activity, Users, LucideIcon } from "lucide-react";

export interface HeroData {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  subtitle: string;
  description: string;
  ctas: {
    primary: {
      text: string;
      icon: LucideIcon;
    };
    secondary: {
      text: string;
      icon: LucideIcon;
    };
  };
  stats: {
    value: string;
    label: string;
  }[];
  mainImage: string;
  teamCard: {
    icon: LucideIcon;
    label: string;
    value: string;
  };
}

export const heroData: HeroData = {
  badge: {
    icon: Activity,
    text: "Salud de vanguardia",
  },
  title: "Cuidado Médico",
  subtitle: "Facinante",
  description: "Experimente una nueva era en la atención médica. Le conectamos con los mejores especialistas mediante tecnología de vanguardia y un trato humano.",
  ctas: {
    primary: {
      text: "Agendar Consulta",
      icon: CalendarCheck,
    },
    secondary: {
      text: "Saber Más",
      icon: ArrowRight,
    },
  },
  stats: [
    { value: "10k+", label: "Pacientes Atendidos" },
    { value: "50+", label: "Especialistas" },
  ],
  mainImage: "/banners/medicos.jpeg",
  teamCard: {
    icon: Users,
    label: "Equipo",
    value: "Médicos Certificados",
  },
};
