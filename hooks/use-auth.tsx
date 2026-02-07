"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole } from "@/lib/auth-types";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string) => Promise<void>;
  logout: () => void;
  hasRole: (roles: UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("medisys_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const lowercaseUser = username.toLowerCase().trim();
    let mockUser: User | null = null;

    if (lowercaseUser === "admin") {
      mockUser = { id: "1", name: "Admin Medisys", email: "admin@medisys.com", role: "ADMIN" };
    } else if (lowercaseUser === "doctor") {
      mockUser = { id: "2", name: "Dr. Alejandro Gómez", email: "dr.gomez@medisys.com", role: "DOCTOR" };
    } else if (lowercaseUser === "assistant") {
      mockUser = { id: "3", name: "Ana Asistente", email: "ana@medisys.com", role: "ASSISTANT" };
    }

    if (mockUser) {
      setUser(mockUser);
      localStorage.setItem("medisys_user", JSON.stringify(mockUser));
      
      const paths = {
        ADMIN: "/admin",
        DOCTOR: "/doctor",
        ASSISTANT: "/assistant",
      };
      router.push(paths[mockUser.role]);
    } else {
      throw new Error("Usuario no reconocido");
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("medisys_user");
    router.push("/login");
  };

  const hasRole = (roles: UserRole[]) => {
    return user ? roles.includes(user.role) : false;
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
