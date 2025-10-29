
"use client";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Briefcase, User, Phone, Calendar, FileText, Menu, Heart, Mail, Cog, Search, Calculator, Bell, CheckCircle2, SlidersHorizontal, Share2 } from "lucide-react";
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
            boxShadow: `0 0 30px ${project.color}33`,
            '--scrollbar-thumb-color': project.color,
            '--scrollbar-track-color': 'transparent'
        } as React.CSSProperties}
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
      
      <div className="p-6 custom-scrollbar overflow-y-auto flex-grow grid-background">
        <div className="w-full">
          <h2 className="text-2xl mb-2">{project.title}</h2>
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
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
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
              ) : project.title === 'Web Candidatos' ? (
                <div className="h-full w-full bg-white rounded-lg font-sans text-xs text-gray-800">
                  <div className="bg-[#2c3e50] text-white p-4 rounded-t-lg text-center">
                    <Briefcase className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="text-xl font-serif">Solicitud de Empleo</h4>
                    <p className="text-xs text-gray-300">Ingresa la siguiente información para realizar tu solicitud de empleo:</p>
                    <div className="inline-block bg-green-300 text-green-900 text-[10px] px-2 py-0.5 rounded-full mt-2">290323020811</div>
                  </div>
                  <div className="bg-gray-100 p-2 text-[10px]">
                    <div className="flex space-x-1">
                      <button className="bg-[#2c3e50] text-white px-2 py-1 rounded-t-md">Documentos</button>
                      {['Datos Personales', 'Escolaridad', 'Empleos', 'Socioeconomico', 'No Conflicto Intereses', 'Bienes', 'Aviso Privacidad'].map(tab => (
                        <button key={tab} className="text-gray-500 px-2 py-1 rounded-t-md bg-gray-200">{tab}</button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-10 h-10 text-[#2c3e50]" />
                      <div>
                        <h5 className="text-2xl font-serif text-gray-600 mb-1">Documentos</h5>
                        <p className="text-[10px] text-gray-500 mb-2">Si todos los documentos fueron cargados correctamente, continue el proceso en la pestaña (Datos personales)</p>
                        <p className="text-[10px] text-gray-600">
                          Documentos cargados actualmente: CV, Acta de Nacimiento, Comprobante de domicilio, IMSS, Comprobante estudios, Constancia Fiscal, Buro Credito, Identificación, Curp, Fotografia, Carta o Constancia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : project.title === 'Gespa Web' ? (
                <div className="h-full w-full bg-[#181a1b] rounded-md p-3 text-white font-sans text-[10px] leading-tight flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-[#111] p-1 rounded-sm text-xs">
                    <div className="flex items-center gap-2">
                      <Menu className="w-4 h-4"/>
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="font-bold">GESPA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-[9px] flex-wrap">
                      <span>Productividad</span><span>/</span><span>Recuperación</span><span>/</span><span>Tiempos</span><span>/</span><span>Simulador</span><span>/</span><span>Información</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-gray-400">05:58:53</div>
                      <div className="flex items-center bg-[#222] border border-gray-600 rounded-sm">
                        <Search className="w-3 h-3 mx-1"/>
                        <span className="text-gray-500">Buscar...</span>
                        <div className="w-10 h-4"/>
                      </div>
                      <div className="bg-gray-700 rounded-full w-5 h-5"/>
                    </div>
                  </div>
                  
                  <div className="flex-grow grid grid-cols-3 gap-2">
                    <div className="col-span-2 flex flex-col gap-2">
                      <div className="grid grid-cols-3 gap-2 text-xs">
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
                        <div className="text-gray-500 grid grid-cols-3 gap-1 text-[8px]">
                          <span>Producto: --</span><span>Activacia: --</span><span>Expediente: AMX--</span>
                          <span>No. Cliente: --</span><span>RFC: --</span><span>Edad: --</span>
                        </div>
                      </div>
                      <div className="bg-[#222] p-2 rounded-md">
                        <div className="flex justify-between items-center mb-1">
                           <Phone className="w-4 h-4" />
                           <div className="flex items-center">
                             <div className="bg-gray-700 border border-gray-600 rounded-l-sm px-2 py-0.5 text-blue-400"><Phone className="w-3 h-3"/></div>
                             <div className="bg-gray-800 border-y border-gray-600 px-2 text-gray-400">Número de teléfono</div>
                             <button className="bg-gray-700 border border-gray-600 rounded-r-sm px-2">Validar</button>
                           </div>
                        </div>
                        <div className="grid grid-cols-9 text-center font-bold text-gray-500 border-b border-gray-600 pb-1 text-[8px]">
                          <span>T</span><span>C</span><span>D</span><span>S</span><span>ID</span><span>TELEFÓNO</span><span>TELEFONÍA</span><span>ORIGEN</span><span>CLASE</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 flex flex-col gap-2">
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
                          <p className="text-gray-500 text-center">No hay recordatorios para la fecha seleccionada.</p>
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
        </div>
      </div>
    </DialogContent>
  );
}
