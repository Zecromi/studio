
"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu, Github, Linkedin } from "lucide-react";
import React from "react";

const Header = () => {
  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Mi Perfil" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-lg font-bold text-primary md:text-xl">
          &gt; Portfolio_Omiom
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
          <div className="flex items-center gap-1 border-l border-primary/20 pl-4 ml-2">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:bg-primary/10">
              <a href="https://github.com/Zecromi" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary hover:text-glow transition-all">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9 hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/omar-o-1b50b7212" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary hover:text-glow transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/80 backdrop-blur-sm">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:text-glow"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-8">
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
