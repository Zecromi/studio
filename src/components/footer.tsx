
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center text-sm text-foreground/80">
          <p>&copy; {currentYear} CYBERTERMINAL. Todo reservado por mi.</p>
          <p>Estatus: <span className="text-primary">ONLINE</span> | Locación: <span className="text-primary">Cyberspace Grid 7</span></p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Zecromi" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-black dark:hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/omar-o-1b50b7212" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-black dark:hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
