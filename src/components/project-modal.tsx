"use client";

import { useState, useEffect } from "react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase, FileText, Sparkles } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { GestalhMockup } from "./projects/gestalh-mockup";
import { WebCandidatosMockup } from "./projects/web-candidatos-mockup";
import { GespaWebMockup } from "./projects/gespa-web-mockup";
import { CoorinMockup } from "./projects/coorin-mockup";
import { GestalhV2Mockup } from "./projects/gestalh-v2-mockup";
import { GimnasiaMockup } from "./projects/gimnasia-mockup";
type Project = {
  title: string;
  description: string;
  tags: string[];
  color: string;
  liveUrl: string;
  role?: string;
  icon?: any;
};

type ProjectModalProps = {
  project: Project;
  allProjects?: Project[];
};

const getTechIcon = (tag: string, className: string = "w-4 h-4 mr-2") => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('sql') || lowerTag.includes('postgres') || lowerTag.includes('mongo') || lowerTag.includes('database') || lowerTag.includes('firebase')) return <FileText className={className} />;
  if (lowerTag.includes('react') || lowerTag.includes('next')) return <Sparkles className={className} />;
  return <Briefcase className={className} />;
};

export function ProjectModal({ project, allProjects = [] }: ProjectModalProps) {
  const [activeProject, setActiveProject] = useState<Project>(project);

  // Sync state if modal is opened with a different specific project
  useEffect(() => {
    setActiveProject(project);
  }, [project]);

  const projectsList = allProjects.length > 0 ? allProjects : [project];

  return (
    <DialogContent
      className="font-code text-primary bg-background/90 backdrop-blur-md border-2 rounded-2xl sm:rounded-3xl shadow-[0_0_40px] p-0 max-w-4xl w-[95vw] h-[90vh] sm:h-[80vh] flex flex-col overflow-hidden transition-all duration-500"
      style={{
        borderColor: activeProject.color,
        color: activeProject.color,
        boxShadow: `0 0 40px ${activeProject.color}22`,
        '--scrollbar-thumb-color': activeProject.color,
      } as React.CSSProperties}
    >
      <DialogTitle className="sr-only">{activeProject.title}</DialogTitle>

      <header className="flex items-center justify-between p-4 px-6 border-b border-primary/10 transition-colors duration-500" style={{ borderColor: `${activeProject.color}33` }}>
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full animate-pulse transition-colors duration-500" style={{ backgroundColor: activeProject.color }}></div>
          <p className="text-xs sm:text-sm font-mono opacity-70 truncate lowercase transition-colors duration-500">
            projects/{activeProject.title.replace(/\s+/g, "-")}
          </p>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto custom-scrollbar bg-grid-white/[0.02] p-4 sm:p-8">
        <Tabs
          value={activeProject.title}
          onValueChange={(val) => {
            const selected = projectsList.find(p => p.title === val);
            if (selected) setActiveProject(selected);
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <TabsList className="w-full flex flex-wrap h-auto justify-start mb-8 bg-transparent p-0 gap-2">
            {projectsList.map(p => (
              <TabsTrigger
                key={p.title}
                value={p.title}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent data-[state=active]:border-primary/20 transition-all rounded-full px-4 py-2 text-xs"
                style={activeProject.title === p.title ? { color: p.color, borderColor: `${p.color}44`, backgroundColor: `${p.color}11` } : {}}
              >
                {p.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-500">{activeProject.title}</h2>
              <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-2xl">{activeProject.description}</p>

              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="px-3 py-1 text-xs border-primary/30 flex items-center gap-2 transition-colors duration-500 hover:bg-primary/5"
                    style={{ borderColor: `${activeProject.color}44`, color: activeProject.color }}
                  >
                    {getTechIcon(tag, "w-3.5 h-3.5")}
                    {tag}
                  </Badge>
                ))}
              </div>

              {activeProject.title === 'Gimnasia' ? (
                <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-colors duration-500" style={{ color: activeProject.color }}>
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Explorar Proyecto <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-colors duration-500" style={{ color: activeProject.color }}>
                      <span className="flex items-center gap-2">Explorar Proyecto <ExternalLink className="h-4 w-4" /></span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="font-code border-primary/20 bg-background/95 backdrop-blur-xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Proyecto Interno Bancario</AlertDialogTitle>
                      <AlertDialogDescription className="text-foreground/70">
                        Este proyecto fue desarrollado de manera interna como un servicio bancario. Por razones de seguridad y confidencialidad, no puedo enlazarlo públicamente 🥲​ .
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction className="bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20">Entendido</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono opacity-50 uppercase tracking-widest">// Dashboard_Interface</h3>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="border border-primary/10 rounded-xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm p-1 transition-colors duration-500" style={{ borderColor: `${activeProject.color}33` }}>
                <div className="min-h-[300px] w-full relative overflow-hidden">
                  {activeProject.title === 'Gestalh' ? (
                    <GestalhMockup />
                  ) : activeProject.title === 'Web Candidatos' ? (
                    <WebCandidatosMockup />
                  ) : activeProject.title === 'Gespa Web' ? (
                    <GespaWebMockup />
                  ) : activeProject.title === 'Coorin Web' ? (
                    <CoorinMockup />
                  ) : activeProject.title === 'Gestalh 2.0' ? (
                    <GestalhV2Mockup />
                  ) : activeProject.title === 'Gimnasia' ? (
                    <GimnasiaMockup />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center gap-6 text-primary/20 p-12">
                      <Sparkles className="w-24 h-24 animate-pulse transition-colors duration-500" style={{ color: `${activeProject.color}33` }} />
                      <div className="space-y-4 w-full max-w-sm">
                        <Skeleton className="h-4 w-full transition-colors duration-500" style={{ backgroundColor: `${activeProject.color}11` }} />
                        <Skeleton className="h-4 w-2/3 mx-auto transition-colors duration-500" style={{ backgroundColor: `${activeProject.color}11` }} />
                        <div className="flex gap-4 pt-6">
                          <Skeleton className="h-24 flex-grow rounded-2xl transition-colors duration-500" style={{ backgroundColor: `${activeProject.color}11` }} />
                          <Skeleton className="h-24 flex-grow rounded-2xl transition-colors duration-500" style={{ backgroundColor: `${activeProject.color}11` }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </DialogContent>
  );
}
