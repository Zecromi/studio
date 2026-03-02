


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center text-sm text-foreground/80">
          <p>&copy; {currentYear} CYBERTERMINAL. Todo reservado por mi.</p>
          <p>Estatus: <span className="text-primary">ONLINE</span> | Locación: <span className="text-primary">Cyberspace Grid 7</span></p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest hidden sm:block">Built_with:</span>
          <div className="flex items-center gap-3 text-lg text-primary/60">
            <i className="devicon-astro-plain" title="Astro" />
            <i className="devicon-nextjs-plain" title="Next.js" />
            <i className="devicon-react-original" title="React" />
            <i className="devicon-tailwindcss-plain" title="Tailwind CSS" />
            <i className="devicon-typescript-plain" title="TypeScript" />
            <i className="devicon-framer-original" title="Framer Motion" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
