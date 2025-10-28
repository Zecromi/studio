
"use client";

import { DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  liveUrl: string;
};

type ProjectModalProps = {
  project: Project;
};

export function ProjectModal({ project }: ProjectModalProps) {
  return (
    <DialogContent 
        className="font-code text-primary bg-background/80 backdrop-blur-sm border-2 rounded-lg shadow-[0_0_30px] p-0 max-w-4xl w-[90vw] h-[80vh] flex flex-col"
        style={{ 
            borderColor: project.color,
            color: project.color,
            boxShadow: `0 0 30px ${project.color}33`
        }}
    >
      <header className="flex items-center justify-between p-4 border-b-2" style={{ borderColor: project.color }}>
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }}></div>
            <p className="text-sm">/projects/{project.title.toLowerCase().replace(/ /g, "-")}</p>
        </div>
        <button className="text-primary hover:text-white">
            <X className="h-5 w-5" />
        </button>
      </header>
      
      <div className="p-6 overflow-y-auto flex-grow grid-background">
        <h2 className="text-3xl mb-2" style={{ color: project.color }}>{project.title}</h2>
        <p className="text-foreground/80 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-base" style={{ borderColor: project.color, color: project.color }}>
                {tag}
            </Badge>
            ))}
        </div>
        
        <Button asChild variant="link" className="p-0 text-base mb-8" style={{ color: project.color }}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
            </a>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mini Window 1 */}
            <div className="border rounded-md p-4" style={{ borderColor: `${project.color}80` }}>
                <h3 className="font-bold mb-2 text-sm">// Dashboard_Actividad</h3>
                <div className="space-y-3">
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
                </div>
            </div>
            
            {/* Mini Window 2 */}
            <div className="border rounded-md p-4" style={{ borderColor: `${project.color}80` }}>
                <h3 className="font-bold mb-2 text-sm">// Status_Sistema</h3>
                 <div className="space-y-3">
                    <Skeleton className="h-4 w-full" style={{ backgroundColor: `${project.color}20`}} />
                    <Skeleton className="h-4 w-full" style={{ backgroundColor: `${project.color}20`}} />
                    <Skeleton className="h-4 w-5/6" style={{ backgroundColor: `${project.color}20`}} />
                     <div className="flex items-center gap-2 pt-4">
                        <Skeleton className="h-6 w-6 rounded-full" style={{ backgroundColor: `${project.color}40`}} />
                        <Skeleton className="h-4 w-24" style={{ backgroundColor: `${project.color}20`}} />
                     </div>
                </div>
            </div>
        </div>
      </div>
    </DialogContent>
  );
}
