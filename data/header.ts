export interface NavItem {
  title: string;
  href: string;
}

export const NAVBAR: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "Doctors", href: "/doctors" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];