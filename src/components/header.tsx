"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Acerca de" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-lg font-bold text-primary md:text-xl">
          > CyberPortafolio_
        </Link>
      
        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary hover:text-glow"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
