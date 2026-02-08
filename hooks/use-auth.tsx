"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole, LoginResponse } from "@/lib/auth-types";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
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
    const savedToken = localStorage.getItem("medisys_token");
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      apiClient.setToken(savedToken);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    
    try {
      const response = await apiClient.post<LoginResponse>("/auth/login", {
        username,
        password,
      });

      console.log("API Response:", response); // Debug: ver qué devuelve la API

      // Store the access token
      apiClient.setToken(response.access_token);
      localStorage.setItem("medisys_token", response.access_token);

      // Check if user object exists in response
      if (!response.user) {
        throw new Error("La API no devolvió los datos del usuario. Verifica que tu endpoint devuelva el objeto 'user'.");
      }

      // Map API role to UserRole type
      const roleMapping: Record<string, UserRole> = {
        "ADMIN": "ADMIN",
        "DOCTOR": "DOCTOR",
        "ASSISTANT": "ASSISTANT",
        // Add lowercase versions for flexibility
        "admin": "ADMIN",
        "doctor": "DOCTOR",
        "assistant": "ASSISTANT",
      };

      const userRole = roleMapping[response.user.role] || "ASSISTANT";

      // Create user object from API response
      const user: User = {
        id: response.user.id,
        email: response.user.email,
        name: response.user.email.split("@")[0], // Use email prefix as name for now
        role: userRole,
      };

      setUser(user);
      localStorage.setItem("medisys_user", JSON.stringify(user));
      
      // Redirect based on role from API
      const paths = {
        ADMIN: "/admin",
        DOCTOR: "/doctor",
        ASSISTANT: "/assistant",
      };
      router.push(paths[userRole]);
    } catch (error: any) {
      console.error("Login error:", error); // Debug: ver el error completo
      throw new Error(error.message || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    apiClient.setToken(null);
    localStorage.removeItem("medisys_user");
    localStorage.removeItem("medisys_token");
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
