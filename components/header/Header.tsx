"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVBAR } from "@/data/header";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ height: isHome ? "100vh" : 128 }}
      animate={{
        height: isHome ? "100vh" : 128,
        backgroundColor: isHome ? "rgba(0,0,0,0)" : "#32B3EE",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full overflow-hidden"
    >
      <AnimatePresence>
        {isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/banners/banner1.webp"
              alt="Medisys Banner"
              fill
              className="object-cover"
              priority
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
            >
              <span className="text-sm font-light tracking-widest uppercase opacity-80">
                Descubre más
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-8 h-8 opacity-80" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="relative z-10 w-full pt-2">
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="relative block w-64 h-24 md:w-80 md:h-28 hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/logos/logo_medisys.svg"
                alt="Medisys Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex absolute left-1/2 items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-2 rounded-full border border-white/30 shadow-2xl"
          >
            <div className="flex items-center px-6 gap-8">
              {NAVBAR.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="font-semibold text-slate-800 relative group text-sm tracking-wide"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <Button className="rounded-full px-8 py-5 bg-white hover:bg-slate-100 text-primary hover:text-primary/90 transition-all duration-300 font-bold shadow-md">
                Login
              </Button>
            </motion.div>
          </motion.div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#32B3EE]/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAVBAR.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
               <Link
  href={item.href}
  className="font-semibold text-slate-800 relative group text-sm tracking-wide"
>
  {item.title}
  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] 
                   bg-slate-800/60
                   transition-all duration-300 group-hover:w-full" />
</Link>

                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button
                  className="rounded-full px-12 py-6 text-xl bg-white text-[#32B3EE] hover:bg-white/90 font-bold shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
