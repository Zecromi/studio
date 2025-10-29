
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypewriterText } from "@/components/typewriter-text";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/project-modal";
import React from "react";
import { ExternalLink, Star, UserRound, Heart, Brain, Briefcase, User, Phone, Calendar, FileText, Menu, Mail, Search, Calculator, Bell, CheckCircle2, Cog, Share2, DollarSign, TrendingUp, BookOpen, Users, CheckSquare, Clipboard, Monitor, Lightbulb, SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";


const projects = [
  {
    title: "Gestalh",
    description: "Página para el área de recursos humanos desarrollada en ASP.NET para la gestión y control de los empleados de la empresa.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    color: "hsl(180, 50%, 40%)",
    liveUrl: "#",
    icon: Star,
  },
  {
    title: "Web Candidatos",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    color: "hsl(236, 59.70%, 52.40%)",
    liveUrl: "#",
    icon: UserRound,
  },
  {
    title: "Gespa Web",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["React", "BootstrapReact", "Sass", "Axios","NodeJs"],
    color: "hsl(0, 100.00%, 50.00%)",
    liveUrl: "#",
    icon: Heart,
  },
  {
    title: "Coorin Web",
    description: "Pagina para la consulta de cuentas, como migración de un aplicativo interno, a pagina web",
    tags: ["React", "Tailwind", "Preline"],
    color: "hsl(150, 56.70%, 35.30%)",
    liveUrl: "#",
    icon: Brain,
  }
];

const ProjectPreview = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="h-full w-full bg-background/50 p-4 space-y-3">
        <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-20" style={{ backgroundColor: `${project.color}40`}} />
            <Skeleton className="h-4 w-12" style={{ backgroundColor: `${project.color}40`}} />
        </div>
        <Skeleton className="h-8 w-full" style={{ backgroundColor: `${project.color}20`}} />
        <div className="flex gap-2">
            <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20`}} />
            <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20`}} />
            <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20`}} />
        </div>
         <div className="flex gap-2">
            <Skeleton className="h-16 w-full" style={{ backgroundColor: `${project.color}20`}} />
        </div>
    </div>
  )
}


const ProjectsSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        <TypewriterText text="> Proyectos..." />
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon || ExternalLink;
          return (
            <Dialog key={project.title}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Card 
                    className="group overflow-hidden rounded-[25px] bg-card transition-all h-full flex flex-col"
                    style={{'--project-color': project.color, borderColor: 'hsl(var(--primary)/0.3)'} as React.CSSProperties}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = project.color}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(var(--primary)/0.3)'}
                  >
                    <CardHeader className="p-0 relative">
                      <div className="overflow-hidden rounded-t-[23px] border-b-2 border-primary/30 group-hover:border-[var(--project-color)] relative aspect-[3/2]">
                          <div className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0 blur-sm group-hover:blur-0">
                            <ProjectPreview project={project} />
                          </div>
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Icon className="w-12 h-12 text-[var(--project-color)] transform group-hover:scale-110 transition-transform duration-300" style={{ filter: `drop-shadow(0 0 8px ${project.color})`}}/>
                          </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="mb-2 text-2xl text-primary transition-colors group-hover:text-[var(--project-color)] group-hover:drop-shadow-[0_0_5px_var(--project-color)] glitch-hover">{project.title}</CardTitle>
                      <p className="text-foreground/80">{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="border-primary/20 bg-primary/10 text-primary group-hover:border-[var(--project-color)] group-hover:bg-[var(--project-color)]/10 group-hover:text-[var(--project-color)]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </DialogTrigger>
              <ProjectModal project={project} />
            </Dialog>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
