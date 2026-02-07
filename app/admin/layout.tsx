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
      <div className="flex min-h-screen w-full bg-[#FEFEFF]">
        <AppSidebar role={currentRole} />
        
        <SidebarInset className="flex flex-col bg-[#FEFEFF]">
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-slate-100 bg-[#FEFEFF] backdrop-blur-md px-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900"></span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest"></span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Optional header actions can go here */}
            </div>
          </header>
          
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
