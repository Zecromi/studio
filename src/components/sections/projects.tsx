
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TypewriterText } from "@/components/typewriter-text";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/project-modal";
import React from "react";


const projects = [
  {
    title: "Gestalh",
    description: "Página para el área de recursos humanos desarrollada en ASP.NET para la gestión y control de los empleados de la empresa.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    color: "hsl(180, 50%, 40%)",
    liveUrl: "#",
  },
  {
    title: "Web Candidatos",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    color: "hsl(236, 58.90%, 27.60%)",
    liveUrl: "#",
  },
  {
    title: "Gespa Web",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["React", "BootstrapReact", "Sass", "Axios","NodeJs"],
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    color: "hsl(0, 100.00%, 50.00%)",
    liveUrl: "#",
  },
  {
    title: "Coorin Web",
    description: "Pagina para la consulta de cuentas, como migración de un aplicativo interno, a pagina web",
    tags: ["React", "Tailwind", "Preline"],
    image: PlaceHolderImages.find(img => img.id === 'project-4'),
    color: "hsl(150, 56.70%, 35.30%)",
    liveUrl: "#",
  }
];

const ProjectsSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        <TypewriterText text="> Proyectos..." />
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <Card 
                  className="group overflow-hidden border-primary/30 bg-card transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] h-full flex flex-col"
                  style={{'--project-color': project.color} as React.CSSProperties}
                >
                  <CardHeader className="p-0">
                    {project.image && (
                      <div className="overflow-hidden rounded-t-lg border-b border-primary/30 group-hover:border-[var(--project-color)]">
                          <Image
                            src={project.image.imageUrl}
                            alt={project.image.description}
                            width={600}
                            height={400}
                            data-ai-hint={project.image.imageHint}
                            className="h-full w-full object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                          />
                      </div>
                    )}
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
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
