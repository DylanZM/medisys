import Link from "next/link";
import Image from "next/image";
import { NAVBAR } from "@/data/header";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative w-full flex flex-col">
      <nav className="z-20 w-full bg-transparent absolute top-0 left-0">
        <div className="container flex items-center justify-between w-full px-6 py-4 mx-auto">
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-12">
              <Image
                src="/logos/logo_medisys.webp"
                alt="Medisys Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVBAR.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" font-medium hover:text-blue-100 transition-colors text-base"
              >
                {item.title}
              </Link>
            ))}
            <Button
              className="bg-color-button-blue hover:bg-blue-600 px-6"
            >
              Agendar Cita
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative w-full h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banners/banner.webp"
            alt="Medisys Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/5" /> 
        </div>

      </section>
    </header>
  );
}