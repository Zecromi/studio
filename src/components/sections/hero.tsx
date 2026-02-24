"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { ArrowDown, Cpu, Binary, Code, SquareChevronRight, Braces } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PixelSnow from "@/component/PixelSnow";

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
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.03}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(-175px 150px 6px hsl(var(--primary) / 0.5))'

  };

  const iconTransformLeft = {
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.08}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(120px -60px 6px hsl(var(--primary) / 0.5))'
  };

  const iconTransformRight = {
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.05}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(-120px -120px 6px hsl(var(--primary) / 0.8))'
  };
  const iconTransformTop = {
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.09}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(120px 120px 6px hsl(var(--primary) / 0.6))'
  };
  const iconTransformCenterRight = {
    transform: `translateY(${offsetY * 0.2}px) translateX(${-mousePosition.x * 0.05}px) translateY(${-mousePosition.y * 0.05}px)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(-120px 0px 6px hsl(var(--primary) / 0.5))'

  };
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden text-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <PixelSnow
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
        className="w-full h-full flex-1 flex flex-col items-center justify-center"
      >
        <div className="space-y-4 flex flex-col items-center z-10 relative">
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
          <h3 className="text-2xl font-bold tracking-tighter text-info sm:text-5xl md:text-4xl lg:text-5xl text-glow">
            <TypewriterText text="オミ" />
          </h3>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
            <TypewriterText text="Desarrollador Full-Stack" startDelay={1000} />
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="border-primary/50 text-primary">Entusiasta</Badge>
            <Badge variant="secondary">UI/UX</Badge>
          </div>
        </div>

        <div className="mt-12 z-10 relative">
          <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
            <a href="#about">
              Explorar <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </Button>
        </div>
      </PixelSnow>
    </section>
  );
};

export default HeroSection;









