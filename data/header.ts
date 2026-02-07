export interface NavItem {
  title: string;
  href: string;
}

export const NAVBAR: NavItem[] = [
    { title: "Inicio", href: "/" },
    { title: "Doctores", href: "/doctors" },
    { title: "Sobre Nosotros", href: "/about" },
    { title: "Contacto", href: "contact" },
];