"use client";

import { HeartPulse, ArrowRight, Phone, Mail, MapPin, LucideIcon } from "lucide-react";
import Link from "next/link";
import { footerData } from "@/data/footer";

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 group mb-6 last:mb-0">
      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-primary transition-colors">
        <Icon size={18} className="text-primary" />
      </div>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-text-muted pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <HeartPulse className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MediSys</span>
            </Link>
            <p className="text-text-muted leading-relaxed font-medium">
              {footerData.description}
            </p>
            <div className="flex gap-4">
              {footerData.socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-800 hover:border-primary"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Empresa</h4>
            <ul className="space-y-4">
              {footerData.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="flex items-center group hover:text-white transition-colors">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contacto</h4>
            <div className="space-y-1">
              <ContactItem icon={Phone} text={footerData.contact.phone} />
              <ContactItem icon={Mail} text={footerData.contact.email} />
              <ContactItem icon={MapPin} text={footerData.contact.address} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            © {currentYear} <span className="text-white">MediSys.</span> Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
