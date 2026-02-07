import { LucideIcon, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  socials: {
    icon: LucideIcon;
    href: string;
  }[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dra. Elena Rodríguez",
    specialty: "Cardiología",
    image: "/doctors/doctor1.png",
    bio: "Especialista en cardiología intervencionista con más de 15 años de experiencia en el tratamiento de enfermedades cardiovasculares complejas.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" }
    ]
  },
  {
    id: "2",
    name: "Dr. Marcos Santos",
    specialty: "Neurología",
    image: "/doctors/doctor2.png",
    bio: "Experto en trastornos del sueño y neurología cognitiva, dedicado a mejorar la calidad de vida de pacientes con condiciones neurológicas crónicas.",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    id: "3",
    name: "Dra. Sofía Martínez",
    specialty: "Pediatría",
    image: "/doctors/doctor3.png",
    bio: "Apasionada por la salud infantil preventiva, con un enfoque compasivo y centrado en la familia para el cuidado de los más pequeños.",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Instagram, href: "#" }
    ]
  },
  {
    id: "4",
    name: "Dr. Javier López",
    specialty: "Medicina General",
    image: "/doctors/doctor4.png",
    bio: "Comprometido con la atención integral y personalizada, promoviendo estilos de vida saludables en todas las etapas de la vida.",
    socials: [
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" }
    ]
  }
];
