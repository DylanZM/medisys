'use client'

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { LogIn, User, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { useAuth } from "@/hooks/use-auth"

export default function LoginPage() {
  const { login, isLoading: isAuthLoading } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    try {
      await login(user)
    } catch (err: any) {
      setError(err.message || "Credenciales inválidas")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-muted p-4 md:p-8">
      <div className="relative w-full max-w-[400px]">
        <Card className="relative overflow-hidden border-border-subtle bg-white dark:bg-black">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
              <User className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight text-black">
              Bienvenido
            </CardTitle>
            <CardDescription className="text-text-muted">
              Ingresa tus credenciales para acceder a tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-2 pb-8">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="user"
                  className="text-sm font-medium leading-none text-black"
                >
                  Nombre de usuario
                </label>
                <Input
                  id="user"
                  placeholder="Nombre de usuario"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="username"
                  autoCorrect="off"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="h-11 border-border-subtle text-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none text-black"
                  >
                    Contraseña
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline hover:underline-offset-4"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 border-border-subtle pr-10 text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                disabled={isAuthLoading}
                className="w-full h-12 text-base font-semibold transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {isAuthLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Cargando...
                  </span>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Iniciar Sesión
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
