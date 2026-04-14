
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypewriterText } from "@/components/typewriter-text";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/project-modal";
import React from "react";
import { ExternalLink, Star, StarHalf, UserRound, Heart, Brain, Trophy, Code, Database, Layers, Hexagon, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { useState, lazy, Suspense } from "react";

const GestalhMockup = lazy(() => import("../projects/gestalh-mockup").then(m => ({ default: m.GestalhMockup })));
const WebCandidatosMockup = lazy(() => import("../projects/web-candidatos-mockup").then(m => ({ default: m.WebCandidatosMockup })));
const GespaWebMockup = lazy(() => import("../projects/gespa-web-mockup").then(m => ({ default: m.GespaWebMockup })));
const CoorinMockup = lazy(() => import("../projects/coorin-mockup").then(m => ({ default: m.CoorinMockup })));
const GestalhV2Mockup = lazy(() => import("../projects/gestalh-v2-mockup").then(m => ({ default: m.GestalhV2Mockup })));
const ProjectIframePreview = lazy(() => import("../projects/project-iframe").then(m => ({ default: m.ProjectIframePreview })));
import { GraffitiP } from "../graffiti-p";
import { GraffitiS } from "../graffiti-s";

const projects = [
  {
    title: "Gestalh",
    description: "Modernización de sistema (.exe) legacy a plataforma web centralizada. Eliminó la necesidad de accesos manuales por servidor, simplificando radicalmente los procesos de contratación, alta y gestión de usuarios en cualquier entorno del ecosistema interno.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    color: "hsl(180, 50%, 40%)",
    liveUrl: "#",
    icon: Star,
    role: "Desarrollo Individual",
  },
  {
    title: "Web Candidatos",
    description: "Transformación digital de los procesos de reclutamiento. Sustituyó los formatos físicos por una plataforma robusta para la gestión de solicitudes, documentación técnica y estudios socioeconómicos, optimizando los tiempos de procesamiento y la integridad de la información.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    color: "hsl(236, 59.70%, 52.40%)",
    liveUrl: "#",
    icon: UserRound,
    role: "Trabajo en Equipo",
  },
  {
    title: "Gespa Web",
    description: "Plataforma avanzada para la gestión de cartera y procesos de cobranza. Ejecuté la migración estratégica de sistemas legacy a un entorno web moderno y altamente seguro (integración con OKTA), optimizando el seguimiento de pagos y la experiencia del usuario.",
    tags: ["React", "BootstrapReact", "Sass", "Axios", "NodeJs", "OKTA"],
    color: "hsl(0, 100.00%, 50.00%)",
    liveUrl: "#",
    icon: Heart,
    role: "Trabajo en Equipo",
  },
  {
    title: "Coorin Web",
    description: "Solución táctica para la gestión financiera y cobranza. Digitalizó la consulta de cuentas y el control de pagos mediante la migración de flujos de trabajo internos hacia una arquitectura web escalable, unificando la administración de usuarios y garantizando una mayor eficiencia operativa.",
    tags: ["React", "Tailwind", "Preline", "Axios"],
    color: "hsl(150, 56.70%, 35.30%)",
    liveUrl: "#",
    icon: Brain,
    role: "Trabajo en Equipo",
  },
  {
    title: "Gestalh 2.0",
    description: "Evolución integral a un sistema ERP de Recursos Humanos. Lideré la migración a la versión 2.0, logrando una reducción significativa en errores de captura de datos y optimizando la productividad administrativa mediante la automatización de procesos clave.",
    tags: ["React", "Tailwind", "Shadcn", "Axios", "Zustand", "Next.JS", "WebHooks"],
    color: "hsl(205, 56.70%, 35.30%)",
    liveUrl: "#",
    icon: StarHalf,
    role: "Desarrollo Individual",
  },
  {
    title: "Gimnasia",
    description: "Plataforma integral de gestión deportiva (ERP) diseñada para centralizar la administración de atletas, clubes y eventos. Incluye automatización de reportes (PDF/Excel), dashboard analítico en tiempo real con Recharts y una experiencia de usuario premium con Framer Motion.",
    tags: ["React", "Next.JS", "Tailwind 4", "Framer Motion", "Recharts", "Zustand", "jsPDF", "ExcelJS"],
    color: "hsl(280, 80%, 65%)",
    liveUrl: "https://www.guem.mx/",
    icon: Trophy,
    role: "Trabajo en Equipo",
  }
];

const getTechIcon = (tag: string, className: string = "text-xs mr-1") => {
  const lowerTag = tag.toLowerCase();

  // Mapping for Devicons (Icon font classes)
  const deviconMap: Record<string, string> = {
    'asp.net': 'devicon-dot-net-plain',
    'c#': 'devicon-csharp-plain',
    'sql server': 'devicon-mysql-plain',
    'mysql': 'devicon-mysql-plain',
    'react': 'devicon-react-original',
    'next.js': 'devicon-nextjs-plain',
    'typescript': 'devicon-typescript-plain',
    'tailwind': 'devicon-tailwindcss-plain',
    'nodejs': 'devicon-nodejs-plain',
    'sass': 'devicon-sass-original',
    'bootstrap': 'devicon-bootstrap-plain',
    'docker': 'devicon-docker-plain',
    'mongodb': 'devicon-mongodb-plain',
    'firebase': 'devicon-firebase-plain',
    'git': 'devicon-git-plain',
    'github': 'devicon-github-original',
  };

  const deviconClass = deviconMap[lowerTag] || deviconMap[lowerTag.split(' ')[0]];

  if (deviconClass) {
    return <i className={`${deviconClass} ${className}`} />;
  }

  // Fallback to Lucide icons
  if (lowerTag.includes('sql') || lowerTag.includes('postgres') || lowerTag.includes('mongo') || lowerTag.includes('database')) return <Database className="w-3 h-3 mr-1" />;
  if (lowerTag.includes('react') || lowerTag.includes('next') || lowerTag.includes('shadcn')) return <Layers className="w-3 h-3 mr-1" />;
  if (lowerTag.includes('node') || lowerTag.includes('api') || lowerTag.includes('express')) return <Hexagon className="w-3 h-3 mr-1" />;
  if (lowerTag.includes('tailwind') || lowerTag.includes('css') || lowerTag.includes('sass')) return <Palette className="w-3 h-3 mr-1" />;

  return <Code className="w-3 h-3 mr-1" />;
};

const ProjectPreview = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<Skeleton className="w-full h-full rounded-lg bg-black/10 border-2 border-primary/20 scale-90" />}>
        {project.title === 'Gestalh' ? (
          <div className="h-full w-full pointer-events-none scale-90 origin-top-left flex justify-center w-[111%]">
            <GestalhMockup />
          </div>
        ) : project.title === 'Web Candidatos' ? (
          <div className="h-full w-full pointer-events-none scale-90 origin-top-left flex justify-center w-[111%]">
            <WebCandidatosMockup />
          </div>
        ) : project.title === 'Gespa Web' ? (
          <div className="h-full w-full pointer-events-none scale-90 origin-top-left flex justify-center w-[111%]">
            <GespaWebMockup />
          </div>
        ) : project.title === 'Coorin Web' ? (
          <div className="h-full w-full pointer-events-none scale-90 origin-top-left flex justify-center w-[111%]">
            <CoorinMockup />
          </div>
        ) : project.title === 'Gestalh 2.0' ? (
          <div className="h-full w-full pointer-events-none scale-90 origin-top-left flex justify-center w-[111%]">
            <GestalhV2Mockup />
          </div>
        ) : project.title === 'Gimnasia' ? (
          <ProjectIframePreview url={project.liveUrl} title={project.title} />
        ) : (
          <div className="h-full w-full bg-background/50 p-4">
            {/* Fallback for other projects */}
          </div>
        )}
      </Suspense>
    </div>
  )
}


const StackedCarousel = ({ items }: { items: typeof projects }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative flex min-h-[650px] w-full flex-col items-center justify-center overflow-hidden py-12">
      {/* Background Graffiti P - Left */}
      <div className="absolute right-1/2 mr-[80px] sm:mr-[120px] md:mr-[160px] top-1/2 -translate-y-1/2 h-[250px] w-[180px] md:h-[350px] md:w-[250px] opacity-60 pointer-events-none z-0 drop-shadow-xl dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] text-foreground dark:text-primary transition-colors">
        <GraffitiP />
      </div>

      {/* Background Graffiti S - Right */}
      <div className="absolute left-1/2 ml-[80px] sm:ml-[120px] md:ml-[160px] top-1/2 -translate-y-1/2 h-[250px] w-[180px] md:h-[350px] md:w-[250px] opacity-60 pointer-events-none z-0 drop-shadow-xl dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] text-foreground dark:text-primary transition-colors">
        <GraffitiS />
      </div>

      <div className="relative h-[550px] w-full max-w-[450px] z-10">
        <AnimatePresence mode="popLayout">
          {items.map((project, i) => {
            // Only render top 3 cards for performance and visual clarity
            const isTop = i === index;
            const isSecond = i === (index + 1) % items.length;
            const isThird = i === (index + 2) % items.length;

            if (!isTop && !isSecond && !isThird) return null;

            let position = 0;
            if (isSecond) position = 1;
            if (isThird) position = 2;

            const Icon = project.icon || ExternalLink;

            return (
              <motion.div
                key={project.title}
                style={{
                  zIndex: 3 - position,
                  '--project-color': project.color,
                  cursor: isTop ? 'grab' : 'default',
                } as any}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{
                  scale: 1 - position * 0.05,
                  y: position * 40,
                  x: position * 10,
                  rotate: position * 2,
                  opacity: 1,
                }}
                exit={{ x: 500, opacity: 0, rotate: 20 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) next();
                  else if (info.offset.x < -100) prev();
                }}
                className="absolute inset-0"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card
                      className="group flex h-full flex-col overflow-hidden rounded-[32px] border-2 border-primary/20 bg-background/80 shadow-2xl backdrop-blur-xl transition-colors hover:border-[var(--project-color)]/50"
                    >
                      <CardHeader className="p-0 relative h-[250px]">
                        <div className="h-full w-full overflow-hidden border-b-2 border-primary/10 group-hover:border-[var(--project-color)]/30">
                          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                            <ProjectPreview project={project} />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />
                          <div className="absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_20%,transparent)] pointer-events-none z-10" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <Icon className="w-16 h-16 text-[var(--project-color)] drop-shadow-[0_0_15px_var(--project-color)]" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-grow flex-col justify-center p-8 text-center">
                        <div className="flex flex-col gap-2 mx-auto mb-4">
                          <Badge className="w-fit mx-auto bg-[var(--project-color)]/10 text-[var(--project-color)] border-[var(--project-color)]/20 flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--project-color)] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--project-color)]"></span>
                            </span>
                            PROYECTO_UI
                          </Badge>
                          <Badge variant="outline" className="w-fit mx-auto border-primary/20 text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-mono">
                            {project.role}
                          </Badge>
                        </div>
                        <CardTitle className="mb-4 text-3xl font-bold tracking-tighter text-glow transition-all duration-300 group-hover:text-[var(--project-color)] group-hover:[text-shadow:0_0_15px_var(--project-color)]">
                          {project.title}
                        </CardTitle>
                        <p className="line-clamp-3 text-sm leading-relaxed text-foreground/70">
                          {project.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex flex-wrap justify-center gap-2 p-8 pt-0">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="border-primary/20 text-[10px] uppercase tracking-widest text-primary/60 group-hover:border-[var(--project-color)]/40 group-hover:text-[var(--project-color)] flex items-center">
                            {getTechIcon(tag)}
                            <span className="truncate max-w-[120px]">{tag}</span>
                          </Badge>
                        ))}
                      </CardFooter>
                    </Card>
                  </DialogTrigger>
                  <ProjectModal project={project} allProjects={items} />
                </Dialog>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex items-center gap-8">
        <button
          onClick={prev}
          className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/20 transition-all hover:border-primary hover:bg-primary/10 active:scale-90"
        >
          <ChevronLeft className="h-6 w-6 text-primary transition-transform group-hover:-translate-x-1" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              className={`h-2 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-primary text-glow' : 'w-2 bg-primary/20'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/20 transition-all hover:border-primary hover:bg-primary/10 active:scale-90"
        >
          <ChevronRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div >
  );
};


const ProjectsSection = () => {
  return (
    <section className="w-full">
      <StackedCarousel items={projects} />
    </section>
  );
};

export default ProjectsSection;


