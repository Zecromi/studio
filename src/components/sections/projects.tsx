
"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypewriterText } from "@/components/typewriter-text";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectModal } from "@/components/project-modal";
import React from "react";
import { ExternalLink, Star, UserRound, Heart, Brain, Briefcase, User, Phone, Calendar, FileText, Menu, Mail, Search, Calculator, Bell, CheckCircle2, Cog, Share2, DollarSign, TrendingUp, BookOpen, Users, CheckSquare, Clipboard, Monitor, Lightbulb, SlidersHorizontal } from "lucide-react";


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
  if (project.title === 'Gestalh') {
    return (
        <div className="h-full w-full bg-[#0f2c4a] p-3 text-white font-sans text-xs">
            <div className="flex justify-center items-center mb-2">
                  <p className="text-lg font-serif">Precandidatos / Reportes</p>
            </div>
              <div className="bg-white/10 rounded-full p-1 flex flex-wrap justify-around mb-4 text-[10px]">
                <button className="bg-white/20 text-white py-1 px-2 rounded-full m-1">Nuevo Precandidato</button>
                <button className="py-1 px-2 rounded-full m-1">Consultar Reporte</button>
                  <button className="py-1 px-2 rounded-full m-1">Actualizar/Referido</button>
            </div>
            <div className="bg-gray-100 text-black rounded-md p-3">
                  <div className="text-center mb-2">
                    <Briefcase className="w-6 h-6 inline-block text-[#3b82f6]" />
                    <p className="font-serif text-sm">Precandidato / Entrevista</p>
                    <p className="text-[10px] text-gray-500">Inserte datos solicitados</p>
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px]">
                    <div className="space-y-2">
                        <label className="flex items-center text-gray-600 mb-1"><User className="w-3 h-3 mr-1"/> Nombre</label>
                        <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                        <label className="flex items-center text-gray-600 mb-1"><Phone className="w-3 h-3 mr-1"/> Telefono</label>
                        <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                        <label className="flex items-center text-gray-600 mb-1"><Calendar className="w-3 h-3 mr-1"/> Fecha</label>
                        <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                    </div>
                      <div className="space-y-2">
                        <label className="flex items-center text-gray-600 mb-1"><User className="w-3 h-3 mr-1"/> Apellido</label>
                        <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                        <label className="flex items-center text-gray-600 mb-1"><Briefcase className="w-3 h-3 mr-1"/> Entrevista</label>
                        <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  if (project.title === 'Web Candidatos') {
    return (
        <div className="h-full w-full bg-white font-sans text-xs text-gray-800 flex flex-col">
            <div className="bg-[#2c3e50] text-white p-4 text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-2" />
              <h4 className="text-xl font-serif">Solicitud de Empleo</h4>
              <p className="text-xs text-gray-300">Ingresa la siguiente información para realizar tu solicitud de empleo:</p>
              <div className="inline-block bg-green-300 text-green-900 text-[10px] px-2 py-0.5 rounded-full mt-2">290323020811</div>
            </div>
            <div className="p-2 text-[10px] overflow-x-auto">
              <div className="flex space-x-1">
                <button className="bg-[#2c3e50] text-white px-2 py-1 rounded-t-md whitespace-nowrap">Documentos</button>
                {['Datos Personales', 'Escolaridad', 'Empleos', 'Socioeconomico', 'No Conflicto Intereses', 'Bienes', 'Aviso Privacidad'].map(tab => (
                  <button key={tab} className="text-gray-500 px-2 py-1 rounded-t-md bg-gray-200 whitespace-nowrap">{tab}</button>
                ))}
              </div>
            </div>
            <div className="p-4 flex-grow">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <FileText className="w-10 h-10 text-[#2c3e50] shrink-0" />
                <div>
                  <h5 className="text-2xl font-serif text-gray-600 mb-1">Documentos</h5>
                  <p className="text-[10px] text-gray-500 mb-2">Si todos los documentos fueron cargados correctamente, continue el proceso en la pestaña (Datos personales)</p>
                </div>
              </div>
            </div>
          </div>
    )
  }
  if (project.title === 'Gespa Web') {
    return (
        <div className="h-full w-full bg-[#181a1b] p-3 text-white font-sans text-[10px] leading-tight flex flex-col gap-2">
            <div className="flex items-center justify-between bg-[#111] p-1 rounded-sm text-xs flex-wrap">
              <div className="flex items-center gap-2 mb-2 sm:mb-0">
                <Menu className="w-4 h-4"/>
                <Heart className="w-4 h-4 text-red-500" />
                <span className="font-bold">GESPA</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-[9px] flex-wrap mb-2 sm:mb-0">
                <span>Productividad</span><span>/</span><span>Recuperación</span><span>/</span><span>Tiempos</span><span>/</span><span>Simulador</span><span>/</span><span>Información</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gray-400">05:58:53</div>
                <div className="flex items-center bg-[#222] border border-gray-600 rounded-sm">
                  <Search className="w-3 h-3 mx-1"/>
                  <span className="text-gray-500 hidden sm:inline">Buscar...</span>
                  <div className="w-10 h-4"/>
                </div>
                <div className="bg-gray-700 rounded-full w-5 h-5"/>
              </div>
            </div>
            
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-2">
              <div className="lg:col-span-2 flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Mail className="w-4 h-4"/> American Express</div>
                  <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Phone className="w-4 h-4"/> Vicidial</div>
                  <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Heart className="w-4 h-4"/> Situación</div>
                </div>
                <div className="bg-[#222] p-2 rounded-md flex-grow">
                  <div className="flex justify-between items-center text-gray-400 mb-1">
                    <div className="flex items-center gap-1"><User className="w-3 h-3" /> -</div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-blue-500"/>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"/>
                      <Cog className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="text-gray-500 grid grid-cols-1 sm:grid-cols-3 gap-1 text-[8px]">
                    <span>Producto: --</span><span>Activacia: --</span><span>Expediente: AMX--</span>
                    <span>No. Cliente: --</span><span>RFC: --</span><span>Edad: --</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col gap-2">
                 <div className="bg-[#222] p-2 rounded-md flex-grow">
                    <div className="flex justify-between items-center text-gray-400 mb-2">
                      <span>0 Cuentas</span>
                      <Share2 className="w-3 h-3"/>
                    </div>
                    <p className="text-gray-500">Selecciona una cuenta para trabajar en el flujo</p>
                 </div>
                 <div className="grid grid-cols-2 gap-2 text-xs">
                    <button className="bg-green-800/50 border border-green-500 p-1 rounded-md flex items-center justify-center gap-1"><Calculator className="w-3 h-3"/> Calculadora</button>
                    <button className="bg-blue-800/50 border border-blue-500 p-1 rounded-md flex items-center justify-center gap-1"><Calendar className="w-3 h-3"/> Calendario</button>
                 </div>
                 <div className="bg-[#222] p-2 rounded-md">
                    <div className="flex items-center gap-1 mb-2 text-gray-400"><Bell className="w-3 h-3"/> Mis Recordatorios</div>
                    <p className="text-gray-500 text-center">No hay recordatorios.</p>
                 </div>
              </div>
            </div>
          </div>
    )
  }
   if (project.title === 'Coorin Web') {
    return (
        <div className="h-full w-full bg-[#eef1f4] font-sans text-xs text-gray-800 flex flex-col sm:flex-row">
            <div className="w-full sm:w-12 bg-white flex sm:flex-col items-center justify-around sm:justify-start py-2 sm:py-4 sm:space-y-6">
              <SlidersHorizontal className="w-5 h-5 text-gray-500" />
              <Search className="w-5 h-5 text-gray-500" />
              <Lightbulb className="w-5 h-5 text-gray-500" />
              <FileText className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-1 p-4">
              <h4 className="text-xl font-bold text-gray-700 mb-4">Ejecutivos</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><CheckSquare className="w-4 h-4 mx-auto mb-1"/><p>Metas</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><User className="w-4 h-4 mx-auto mb-1"/><p>Validadores</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><Users className="w-4 h-4 mx-auto mb-1"/><p>Encargados</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><Clipboard className="w-4 h-4 mx-auto mb-1"/><p>Catalogos</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#008272] rounded-lg p-2 text-center text-white"><FileText className="w-4 h-4 mx-auto mb-1"/><p>Scripts</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><Monitor className="w-4 h-4 mx-auto mb-1"/><p>Pantalla</p><p className="font-bold">Abrir</p></div>
              </div>

              <h4 className="text-xl font-bold text-gray-700 mb-4">Consultas</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-[10px]">
                <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><DollarSign className="w-4 h-4 mx-auto mb-1"/><p>Cuentas</p><p className="font-bold">Abrir</p></div>
                <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><TrendingUp className="w-4 h-4 mx-auto mb-1"/><p>Productividad</p><p className="font-bold">Abrir</p></div>
              </div>
            </div>
          </div>
    )
  }
  return null;
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
                          <div className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
                            <ProjectPreview project={project} />
                          </div>
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

    