
"use client";

import { TypewriterText } from "@/components/typewriter-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-primary text-glow sm:text-5xl md:text-6xl lg:text-7xl">
          <TypewriterText text="John Doe" delay={100} />
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
          <TypewriterText text="Cybernetic Web Architect & Digital Craftsman" delay={50} startDelay={1000} />
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="border-accent text-accent">Full-Stack Developer</Badge>
          <Badge variant="outline" className="border-accent text-accent">UI/UX Enthusiast</Badge>
          <Badge variant="outline" className="border-accent text-accent">Next.js Specialist</Badge>
        </div>
      </div>
      <div className="mt-12">
        <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
          <a href="#about">
            Explore <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
