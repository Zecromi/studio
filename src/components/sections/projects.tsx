
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TypewriterText } from "@/components/typewriter-text";

const projects = [
  {
    title: "Gestalh",
    description: "Página para el área de recursos humanos desarrollada en ASP.NET para la gestión y control de los empleados de la empresa.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    color: "hsl(180, 50%, 40%)",
  },
  {
    title: "Web Candidatos",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["ASP.NET", "SQL Server", "C#"],
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    color: "hsl(236, 58.90%, 27.60%)",
  },
  {
    title: "Gespa Web",
    description: "Pagina creada para que los usuarios nuevos que van a ingresar a la empresa ingresaran sus datos personales y documentación.",
    tags: ["React", "BootstrapReact", "Sass", "Axios","NodeJs"],
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    color: "hsl(0, 100.00%, 50.00%)",
  },
  {
    title: "Coorin Web",
    description: "Pagina para la consulta de cuentas, como migración de un aplicativo interno, a pagina web",
    tags: ["React", "Tailwind", "Preline"],
    image: PlaceHolderImages.find(img => img.id === 'project-4'),
    color: "hsl(150, 56.70%, 35.30%)",
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
          <Card 
            key={project.title} 
            className="group overflow-hidden border-primary/30 bg-card transition-all hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            style={{'--project-color': project.color} as React.CSSProperties}
          >
            <CardHeader>
              {project.image && (
                 <div className="overflow-hidden rounded-md border border-primary/30 group-hover:border-[var(--project-color)]">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      width={600}
                      height={400}
                      data-ai-hint={project.image.imageHint}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>
              )}
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-2xl text-primary transition-colors group-hover:text-[var(--project-color)] group-hover:drop-shadow-[0_0_5px_var(--project-color)] glitch-hover">{project.title}</CardTitle>
              <p className="text-foreground/80">{project.description}</p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
               <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border-primary/20 bg-primary/10 text-primary group-hover:border-[var(--project-color)] group-hover:bg-[var(--project-color)]/10 group-hover:text-[var(--project-color)]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="link" className="p-0 text-primary group-hover:text-[var(--project-color)]">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ver proyecto <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
