
"use client";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Search, Filter, Briefcase, UserPlus, FileText } from "lucide-react";
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
      <DialogTitle className="sr-only">{project.title}</DialogTitle>
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
        <h2 className="text-2xl mb-2" style={{ color: project.color }}>{project.title}</h2>
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
                {project.title === 'Gestalh' ? (
                <div className="h-full w-full bg-[#0f2c4a] rounded-sm p-3 text-white font-sans text-xs">
                    <div className="flex justify-center items-center mb-2">
                         <p className="text-lg font-serif">Precandidatos / Reportes</p>
                    </div>
                     <div className="bg-white/10 rounded-full p-1 flex justify-around mb-4 text-[10px]">
                        <button className="bg-white/20 text-white py-1 px-2 rounded-full">Nuevo Precandidato</button>
                        <button className="py-1 px-2 rounded-full">Consultar Reporte</button>
                         <button className="py-1 px-2 rounded-full">Actualizar/Referido</button>
                    </div>
                    <div className="bg-gray-100 text-black rounded-md p-3">
                         <div className="text-center mb-2">
                            <Briefcase className="w-6 h-6 inline-block text-[#3b82f6]" />
                            <p className="font-serif text-sm">Precandidato / Entrevista</p>
                            <p className="text-[10px] text-gray-500">Inserte datos solicitados</p>
                         </div>
                        <div className="flex gap-2 text-[10px]">
                            <div className="w-1/2">
                                <label className="flex items-center text-gray-600 mb-1"><Search className="w-3 h-3 mr-1"/> Ingrese datos</label>
                                <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                            </div>
                            <div className="w-1/2">
                                 <label className="flex items-center text-gray-600 mb-1"><Filter className="w-3 h-3 mr-1"/> Filtro</label>
                                <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
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
                )}
            </div>
            
            {/* Mini Window 2 */}
            <div className="border rounded-md p-4" style={{ borderColor: `${project.color}80` }}>
                <h3 className="font-bold mb-2 text-sm">// Visor_Datos</h3>
                 <div className="space-y-3">
                    <Skeleton className="h-4 w-24" style={{ backgroundColor: `${project.color}40`}} />
                    <Skeleton className="h-24 w-full" style={{ backgroundColor: `${project.color}20`}} />
                    <div className="flex justify-end gap-2">
                         <Skeleton className="h-6 w-16" style={{ backgroundColor: `${project.color}30`}} />
                         <Skeleton className="h-6 w-16" style={{ backgroundColor: `${project.color}30`}} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </DialogContent>
  );
}

    