
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center text-center">
      <div className="space-y-4 flex flex-col items-center">
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
          <TypewriterText text="Cybernetic Web Architect & Digital Craftsman" startDelay={1000} />
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="border-primary/50 text-primary"> Desarrollador Full-Stack</Badge>
          <Badge variant="outline" className="border-primary/50 text-primary">UI/UX Entusiasta</Badge>
          <Badge variant="outline" className="border-primary/50 text-primary">.Net</Badge>
        </div>
      </div>
      <div className="mt-12">
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
