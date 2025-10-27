import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Project Chimera",
    description: "A decentralized identity management system using blockchain for enhanced security and user control.",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS"],
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    color: "hsl(180, 50%, 40%)",
  },
  {
    title: "Project Neon",
    description: "An interactive data visualization platform for urban transit systems, rendered in a real-time 3D environment.",
    tags: ["React", "Three.js", "D3.js", "Firebase"],
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    color: "hsl(300, 60%, 50%)",
  },
  {
    title: "Project Oracle",
    description: "AI-powered code generation tool that learns from existing codebases to suggest improvements and new features.",
    tags: ["Genkit", "Astro", "Python", "LangChain"],
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    color: "hsl(45, 100%, 50%)",
  },
  {
    title: "Project Gridrunner",
    description: "A full-featured e-commerce platform with a retro-futuristic UI, built for performance and scalability.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "shadcn/ui"],
    image: PlaceHolderImages.find(img => img.id === 'project-4'),
    color: "hsl(240, 60%, 60%)",
  }
];

const ProjectsSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        &gt; Loading project_archives...
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
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
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
