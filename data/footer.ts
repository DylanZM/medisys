import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  LucideIcon
} from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterData {
  description: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const footerData: FooterData = {
  description: "Líderes en atención médica de vanguardia. Nuestro compromiso es su salud y bienestar mediante tecnología y trato humano.",
  socialLinks: [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ],
  quickLinks: [
    { title: "Sobre Nosotros", href: "#" },
    { title: "Nuestros Médicos", href: "#" },
    { title: "Servicios", href: "#" },
  ],
  contact: {
    phone: "+1 (809) 123-4567",
    email: "info@medisys.com",
    address: "Santo Domingo, RD",
  },
};
