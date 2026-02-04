"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVBAR } from "@/data/header";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, ChevronRight } from "lucide-react";

export function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-40 h-10 sm:w-52 sm:h-12">
                <Image
                  src="/logos/logo.svg"
                  alt="Medisys"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAVBAR.map((item) => {
                const isActive = pathname === item.href;
                const isHome = item.href === "/";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative text-sm font-bold transition-all text-foreground hover:text-foreground"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all duration-300 flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Iniciar Sesión
              </Button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-foreground hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-md md:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-8 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <div className="relative w-32 h-8">
                <Image
                  src="/logos/logo_medisys.svg"
                  alt="Medisys"
                  fill
                  className="object-contain"
                />
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-7 h-7 text-foreground" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2">
              {NAVBAR.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 text-slate-700 font-semibold"
                  >
                    {item.title}
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

