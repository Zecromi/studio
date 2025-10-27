
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { ArrowDown, Cpu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconTransform = {
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.05}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(-100px 60px 9px hsl(var(--primary) / 0.5))'
  };


  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden text-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
       <Cpu 
         className="absolute top-4 right-2 h-32 w-32 text-primary/80 transition-transform duration-300 ease-out"
         style={iconTransform}
         strokeWidth={1}
       />
      <div className="space-y-4 flex flex-col items-center z-10">
        <Image
            src="/CyberCat.png"
            alt="Cybernetic Cat"
            width={100}
            height={100}
            className="rounded-full border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.7)] mb-4"
        />
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl text-glow">
          <TypewriterText text="Omar OM" />
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
          <TypewriterText text="Diseñador web y artesano digital" startDelay={1000} />
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="border-primary/50 text-primary"> Desarrollador Full-Stack</Badge>
          <Badge variant="outline" className="border-primary/50 text-primary">Entusiasta UI/UX</Badge>
          
        </div>
      </div>
      <div className="mt-12 z-10">
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
          <a href="#about">
            Explorar <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;



