import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { UserRole } from "./_constants/nav-items";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRole: UserRole = "ADMIN"; 

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#FEFEFF] pt-20">
        <AppSidebar role={currentRole} />
        
        <SidebarInset className="flex flex-col bg-[#FEFEFF]">
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
