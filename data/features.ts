import { CheckCircle2, Award, Clock, Users2, LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const features: Feature[] = [
  {
    title: "Médicos Certificados",
    description: "Nuestro equipo está conformado por especialistas con certificaciones internacionales y amplia experiencia.",
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "Atención 24/7",
    description: "Estamos disponibles en cualquier momento para atender sus emergencias y consultas urgentes.",
    icon: Clock,
    color: "text-green-600",
  },
  {
    title: "Tecnología Avanzada",
    description: "Equipamiento de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.",
    icon: CheckCircle2,
    color: "text-primary",
  },
  {
    title: "+10,000 Pacientes Felices",
    description: "La satisfacción y recuperación de nuestros pacientes es nuestra mayor garantía de calidad.",
    icon: Users2,
    color: "text-purple-600",
  }
];
