"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { OmiomLogo } from "@/components/omiom-logo";
import { ArrowDown, Cpu, Binary, Code, SquareChevronRight, Braces } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import PixelSnow from "@/component/PixelSnow";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useRef } from "react";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  useEffect(() => {
    setMounted(true);
  }, []);

  // Spring configuration for smooth follow
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const springMouseXTarget = useSpring(mouseX, springConfig);
  const springMouseYTarget = useSpring(mouseY, springConfig);

  const logoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"]
  });

  const rawLogoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rawCatY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const catRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Combine scroll-based Y with mouse-based offsets
  const mouseLogoX = useTransform(springMouseXTarget, (val) => val * 0.02);
  const mouseLogoYOffset = useTransform(springMouseYTarget, (val) => val * 0.02);
  const logoY = useTransform([rawLogoY, mouseLogoYOffset], ([y1, y2]) => (y1 as number) + (y2 as number));

  const mouseCatX = useTransform(springMouseXTarget, (val) => val * 0.1);
  const mouseCatYOffset = useTransform(springMouseYTarget, (val) => val * 0.1);
  const catY = useTransform([rawCatY, mouseCatYOffset], ([y1, y2]) => (y1 as number) + (y2 as number));

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] w-[95%] max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden text-center bg-[#bfb797] dark:bg-zinc-950/80 rounded-[2rem] md:rounded-[3rem] shadow-2xl my-4 border border-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <PixelSnow
        color={mounted && resolvedTheme === "light" ? "#afa479" : "#ffffff"}
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={225}
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
        <div className="space-y-4 flex flex-col items-center z-10 relative py-12 px-8">
          {/* Faded blur background */}
          <div className="absolute inset-0 bg-background/5 dark:bg-zinc-950/20 backdrop-blur-[12px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] -z-10 rounded-full" />

          <div className="relative flex justify-center items-center w-full py-8" ref={logoRef}>
            {/* Logo Layer */}
            <motion.div
              style={{
                y: logoY,
                x: mouseLogoX,
              }}
              className="z-10"
            >
              <h1 className="text-4xl font-bold tracking-tighter text-foreground dark:text-primary sm:text-5xl md:text-6xl lg:text-7xl flex justify-center py-2 h-auto drop-shadow-md dark:text-glow">
                <OmiomLogo className="w-[80vw] max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] h-[250px] dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] drop-shadow-sm m-2" />
              </h1>
            </motion.div>

            {/* Cyber Cat Layer - Floating on top */}
            <motion.div
              style={{
                y: catY,
                rotate: catRotate,
                x: mouseCatX,
              }}
              className="absolute z-20 pointer-events-none"
            >
              <Image
                src="/CyberCat.png"
                alt="Cybernetic Cat"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.8)] bg-zinc-950/50 backdrop-blur-sm"
              />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl text-glow transition-colors">
            <TypewriterText text="オミ" />
          </h3>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/70 dark:text-foreground/80 md:text-xl font-medium">
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
    </section >
  );
};

export default HeroSection;









