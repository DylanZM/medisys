"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "../admin/_components/app-sidebar";
import { useAuth } from "@/hooks/use-auth";

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className="h-screen w-screen flex items-center justify-center bg-white"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>;
  if (!user) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#FEFEFF] pt-20">
        <AppSidebar role={user.role} />
        
        <SidebarInset className="flex flex-col bg-[#FEFEFF]">
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
