import { 
  HeartPulse, 
  Brain, 
  Baby, 
  Stethoscope, 
  Dna, 
  FlaskConical,
  Smartphone,
  ShieldCheck,
  LucideIcon
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const services: Service[] = [
  {
    title: "Cardiología",
    description: "Cuidado integral del corazón con tecnología de diagnóstico avanzada.",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Neurología",
    description: "Tratamiento experto para trastornos del sistema nervioso y cerebro.",
    icon: Brain,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Pediatría",
    description: "Atención médica especializada y compasiva para los más pequeños.",
    icon: Baby,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Medicina General",
    description: "Diagnóstico preventivo y chequeos anuales para toda la familia.",
    icon: Stethoscope,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Genética",
    description: "Análisis genético avanzado para medicina personalizada.",
    icon: Dna,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Laboratorio",
    description: "Resultados rápidos y precisos para todos sus exámenes médicos.",
    icon: FlaskConical,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Telemedicina",
    description: "Consultas virtuales desde la comodidad de su hogar.",
    icon: Smartphone,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Seguro Médico",
    description: "Convenios con las principales aseguradoras del país.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600",
  }
];
