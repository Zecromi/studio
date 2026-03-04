"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/typewriter-text";
import { GraffitiOM } from "@/components/graffiti-om";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import PixelSnow from "@/component/PixelSnow";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";

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

  // Memoize spring config to prevent unnecessary re-initializations
  const springConfig = useMemo(() => ({ stiffness: 100, damping: 20, mass: 0.5 }), []);
  const springMouseXTarget = useSpring(mouseX, springConfig);
  const springMouseYTarget = useSpring(mouseY, springConfig);

  const logoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: logoRef,
    offset: ["start end", "end start"]
  });

  const rawLogoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rawCatY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const catRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Combine transforms efficiently
  const mouseLogoX = useTransform(springMouseXTarget, (val) => val * 0.02);
  const mouseLogoYOffset = useTransform(springMouseYTarget, (val) => val * 0.02);
  const logoY = useTransform([rawLogoY, mouseLogoYOffset], ([y1, y2]) => (y1 as number) + (y2 as number));

  // Depth perspective for Graffiti (moves slightly opposite and slower)
  const mouseGraffitiX = useTransform(springMouseXTarget, (val) => val * -0.01);
  const mouseGraffitiYOffset = useTransform(springMouseYTarget, (val) => val * -0.01);
  const graffitiY = useTransform([rawLogoY, mouseGraffitiYOffset], ([y1, y2]) => (y1 as number) * 0.4 + (y2 as number));

  const mouseCatX = useTransform(springMouseXTarget, (val) => val * 0.1);
  const mouseCatYOffset = useTransform(springMouseYTarget, (val) => val * 0.1);
  const catY = useTransform([rawCatY, mouseCatYOffset], ([y1, y2]) => (y1 as number) + (y2 as number));

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-7rem)] w-[100%] max-w-7xl mx-auto flex-col items-center justify-center overflow-hidden text-center dark:bg-zinc-950/80 rounded-[2rem] md:rounded-[3rem]  my-4 border-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Effect - Isolated for performance */}

      {/* Main Content - Decoupled from background re-renders */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-12 px-8">
        <div className="space-y-4 flex flex-col items-center relative">
          {/* Faded blur background */}
          <div className="absolute inset-0 bg-background/5 dark:bg-zinc-950/20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] -z-10 rounded-full" />

          <div className="relative flex justify-center items-center w-full py-8" ref={logoRef}>
            {/* Graffiti Background - Deep Layer */}
            <motion.div
              style={{
                y: graffitiY,
                x: mouseGraffitiX,
              }}
              className="absolute inset-0 flex items-center justify-center opacity-70 dark:opacity-90 pointer-events-none scale-150 z-0 will-change-transform drop-shadow-[0_0_20px_gray] dark:drop-shadow-[0_0_25px_gray]"
            >
              <div
                className="w-full h-full bg-gray-500 dark:bg-gray-400"
                style={{
                  WebkitMaskImage: 'url(/Graffiiti_lines.svg)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskImage: 'url(/Graffiiti_lines.svg)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                }}
              />
            </motion.div>

            {/* Logo Layer - High Layer */}
            <motion.div
              style={{
                y: logoY,
                x: mouseLogoX,
              }}
              className="z-10 will-change-transform relative"
            >
              <h1 className="text-4xl font-bold tracking-tighter text-foreground dark:text-primary sm:text-5xl md:text-6xl lg:text-7xl flex justify-center py-2 h-auto">
                <GraffitiOM className="text-black dark:text-black w-[90vw] max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[750px] h-[500px] md:h-[550px] m-2 drop-shadow-2xl dark:drop-shadow-[0_0_35px_hsl(var(--primary)/0.8)]" />
              </h1>
            </motion.div>

            {/* Cyber Cat Layer - Floating on top */}
            <motion.div
              style={{
                y: catY,
                rotate: catRotate,
                x: mouseCatX,
              }}
              className="absolute z-20 pointer-events-none will-change-transform"
            >
              <Image
                src="/CyberCat.png"
                alt="Cybernetic Cat"
                width={180}
                height={180}
                priority // Critical for LCP performance
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

        <div className="mt-12 relative">
          <Button asChild variant="outline" className="border-primary/50 text-foreground dark:text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300">
            <a href="#about">
              Explorar <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;









