
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
        <div className="h-full w-full">
            {project.title === 'Gestalh' ? (
                <div className="h-full w-full bg-[#0f2c4a] rounded-sm p-3 text-white font-sans text-xs">
                    <div className="flex justify-center items-center mb-2">
                          <Skeleton className="h-4 w-3/5" style={{ backgroundColor: `${project.color}40`}} />
                    </div>
                      <div className="bg-white/10 rounded-full p-1 flex flex-wrap justify-around mb-4 text-[10px]">
                        <Skeleton className="h-5 w-1/4 rounded-full" style={{ backgroundColor: `${project.color}40`}} />
                        <Skeleton className="h-5 w-1/4 rounded-full" style={{ backgroundColor: `${project.color}40`}} />
                          <Skeleton className="h-5 w-1/4 rounded-full" style={{ backgroundColor: `${project.color}40`}} />
                    </div>
                    <div className="bg-gray-100 text-black rounded-md p-3">
                          <div className="text-center mb-2">
                            <Briefcase className="w-6 h-6 inline-block text-[#3b82f6]" />
                            <Skeleton className="h-4 w-4/5 mx-auto mt-1" style={{ backgroundColor: `${project.color}40`}} />
                            <Skeleton className="h-3 w-3/5 mx-auto mt-1" style={{ backgroundColor: `${project.color}40`}} />
                          </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px]">
                            <div className="space-y-2">
                                <Skeleton className="h-3 w-1/4" style={{ backgroundColor: `${project.color}40`}}/>
                                <Skeleton className="w-full h-5 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                                <Skeleton className="h-3 w-1/4" style={{ backgroundColor: `${project.color}40`}}/>
                                <Skeleton className="w-full h-5 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                                <Skeleton className="h-3 w-1/4" style={{ backgroundColor: `${project.color}40`}}/>
                                <Skeleton className="w-full h-5 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                            </div>
                              <div className="space-y-2">
                                <Skeleton className="h-3 w-1/4" style={{ backgroundColor: `${project.color}40`}}/>
                                <Skeleton className="w-full h-5 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                                <Skeleton className="h-3 w-1/4" style={{ backgroundColor: `${project.color}40`}}/>
                                <Skeleton className="w-full h-5 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                            </div>
                        </div>
                    </div>
                </div>
                ) : project.title === 'Web Candidatos' ? (
                  <div className="h-full w-full bg-white rounded-lg font-sans text-xs text-gray-800">
                    <div className="bg-[#2c3e50] text-white p-4 rounded-t-lg text-center">
                      <Briefcase className="w-8 h-8 mx-auto mb-2" />
                      <Skeleton className="h-5 w-3/4 mx-auto" style={{ backgroundColor: `${project.color}40`}} />
                      <Skeleton className="h-3 w-4/5 mx-auto mt-1" style={{ backgroundColor: `${project.color}40`}} />
                      <div className="inline-block bg-green-300 text-green-900 text-[10px] px-2 py-0.5 rounded-full mt-2">
                         <Skeleton className="h-3 w-16" style={{ backgroundColor: `${project.color}40`}} />
                      </div>
                    </div>
                    <div className="p-2 text-[10px] overflow-x-auto flex space-x-1">
                      <Skeleton className="h-6 w-20 rounded-t-md" style={{ backgroundColor: `${project.color}40`}} />
                      <Skeleton className="h-6 w-24 rounded-t-md bg-gray-200" style={{ backgroundColor: `${project.color}20`}} />
                      <Skeleton className="h-6 w-20 rounded-t-md bg-gray-200" style={{ backgroundColor: `${project.color}20`}} />
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col sm:flex-row items-start gap-3">
                        <FileText className="w-10 h-10 text-[#2c3e50] shrink-0" />
                        <div>
                          <Skeleton className="h-6 w-24 mb-2" style={{ backgroundColor: `${project.color}40`}} />
                          <Skeleton className="h-3 w-full mb-1" style={{ backgroundColor: `${project.color}20`}} />
                          <Skeleton className="h-3 w-4/5 mb-2" style={{ backgroundColor: `${project.color}20`}} />
                          <Skeleton className="h-3 w-full" style={{ backgroundColor: `${project.color}20`}} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.title === 'Gespa Web' ? (
                  <div className="h-full w-full bg-[#181a1b] rounded-md p-3 text-white font-sans text-[10px] leading-tight flex flex-col gap-2">
                    <div className="flex items-center justify-between bg-[#111] p-1 rounded-sm text-xs flex-wrap">
                      <div className="flex items-center gap-2 mb-2 sm:mb-0">
                        <Menu className="w-4 h-4"/>
                        <Heart className="w-4 h-4 text-red-500" />
                        <Skeleton className="h-4 w-12" style={{ backgroundColor: `${project.color}40`}} />
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] flex-wrap mb-2 sm:mb-0">
                        <Skeleton className="h-3 w-20" style={{ backgroundColor: `${project.color}20`}} />
                        <Skeleton className="h-3 w-24" style={{ backgroundColor: `${project.color}20`}} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-12" style={{ backgroundColor: `${project.color}20`}} />
                        <Skeleton className="w-20 h-5" style={{ backgroundColor: `${project.color}40`}} />
                        <Skeleton className="w-5 h-5 rounded-full" style={{ backgroundColor: `${project.color}40`}} />
                      </div>
                    </div>
                    <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-2">
                      <div className="lg:col-span-2 flex flex-col gap-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          <Skeleton className="h-8 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                          <Skeleton className="h-8 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                          <Skeleton className="h-8 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                        </div>
                        <Skeleton className="h-16 rounded-md flex-grow" style={{ backgroundColor: `${project.color}20`}} />
                        <Skeleton className="h-12 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                      </div>
                      <div className="lg:col-span-1 flex flex-col gap-2">
                         <Skeleton className="h-12 rounded-md flex-grow" style={{ backgroundColor: `${project.color}20`}} />
                         <div className="grid grid-cols-2 gap-2 text-xs">
                            <Skeleton className="h-8 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                            <Skeleton className="h-8 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                         </div>
                         <Skeleton className="h-10 rounded-md" style={{ backgroundColor: `${project.color}20`}} />
                      </div>
                    </div>
                  </div>
                ) : project.title === 'Coorin Web' ? (
                  <div className="h-full w-full bg-[#eef1f4] rounded-lg font-sans text-xs text-gray-800 flex flex-col sm:flex-row">
                    <div className="w-full sm:w-12 bg-white flex sm:flex-col items-center justify-around sm:justify-start py-2 sm:py-4 sm:space-y-6">
                      <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                      <Search className="w-5 h-5 text-gray-500" />
                      <Lightbulb className="w-5 h-5 text-gray-500" />
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1 p-4">
                      <Skeleton className="h-5 w-24 mb-4" style={{ backgroundColor: `${project.color}40`}} />
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                        {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-12 rounded-lg" style={{ backgroundColor: `${project.color}20`}} />)}
                      </div>
                      <Skeleton className="h-5 w-24 mb-4" style={{ backgroundColor: `${project.color}40`}} />
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                        {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-12 rounded-lg" style={{ backgroundColor: `${project.color}20`}} />)}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Skeleton className="h-16 rounded-lg" style={{ backgroundColor: `${project.color}20`}} />
                        <Skeleton className="h-16 rounded-lg" style={{ backgroundColor: `${project.color}20`}} />
                      </div>
                    </div>
                  </div>
              ) : (
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
              )}
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
