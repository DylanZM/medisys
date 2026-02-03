import Link from "next/link";
import Image from "next/image";
import { NAVBAR } from "@/data/header";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative w-full h-[600px] overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="/banners/banner1.webp"
          alt="Medisys Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <nav className="relative z-20 w-full">
        <div className="container mx-auto flex items-center justify-between px-6 py-6">

          <Link href="/" className="relative w-56 h-20">
            <Image
              src="/logos/logo_medisys.svg"
              alt="Medisys Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVBAR.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semibold text-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">Login</Button>
            <Button>Agendamento</Button>
          </div>

        </div>
      </nav>
    </header>
  );
}
