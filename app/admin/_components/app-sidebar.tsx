"use client";

import { usePathname } from "next/navigation";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { navItems, UserRole } from "../_constants/nav-items";
import { cn } from "@/lib/utils";
import { LogOut, ChevronRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AppSidebarProps {
  role: UserRole;
}

export function AppSidebar({ role }: AppSidebarProps) {
  const pathname = usePathname();

  const filteredNavItems = navItems.filter((item) => item.roles.includes(role));

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r border-slate-100 bg-[#F7F8F9] top-20 h-[calc(100vh-80px)]"
      style={{ "--sidebar-width": "14rem" } as React.CSSProperties}
    >
      <SidebarHeader className="h-20 flex items-center px-4 border-b border-slate-50 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden -ml-2">
          <SidebarTrigger className="text-slate-500 hover:text-primary transition-colors" />
          <span className="font-bold text-slate-700 text-sm">Admin</span>
        </div>
        <div className="hidden group-data-[collapsible=icon]:block">
          <SidebarTrigger className="text-slate-500 hover:text-primary transition-colors" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:px-2">
          <SidebarGroupContent>
            <SidebarMenu className="px-3 gap-1 group-data-[collapsible=icon]:px-0">
              {filteredNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.title}
                    className={cn(
                      "h-11 rounded-xl transition-all duration-200 px-4 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center",
                      pathname === item.href 
                        ? "bg-primary/10 text-primary font-bold shadow-sm shadow-primary/5" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <a href={item.href} className="flex items-center gap-3 group-data-[collapsible=icon]:gap-0">
                      <item.icon className={cn("size-5", pathname === item.href ? "text-primary" : "text-slate-500")} />
                      <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-50 group-data-[collapsible=icon]:px-2">
        <SidebarMenu className="group-data-[collapsible=icon]:px-0">
          <SidebarMenuItem>
            <SidebarMenuButton className="h-16 rounded-xl hover:bg-slate-50 transition-all duration-300 px-3 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
              <div className="flex items-center gap-3 w-full group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-0">
                <Avatar className="h-10 w-10 border border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">AG</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden overflow-hidden">
                  <span className="text-sm font-bold text-slate-900 truncate">Dr. Alejandro Gómez</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{role}</span>
                </div>
                <ChevronRight size={16} className="ml-auto text-slate-400 group-data-[collapsible=icon]:hidden" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="mt-2">
            <SidebarMenuButton className="h-10 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors px-4 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center">
              <LogOut size={18} />
              <span className="group-data-[collapsible=icon]:hidden font-medium ml-3">Cerrar Sesión</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
