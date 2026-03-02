
"use client";

import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Briefcase, User, Phone, Calendar, FileText, Menu, Heart, Mail, Cog, Search, Calculator, Bell, CheckCircle2, SlidersHorizontal, Share2, DollarSign, TrendingUp, BookOpen, Users, CheckSquare, Clipboard, Monitor, Lightbulb, Star, Award, Sparkles, Snowflake, Download, Trophy, Filter, ArrowUpDown, Pencil, Landmark, Printer, ChevronDown, Code, Database, Layers, Hexagon, Palette } from "lucide-react";
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

const getTechIcon = (tag: string, className: string = "w-4 h-4 mr-2") => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('sql') || lowerTag.includes('postgres') || lowerTag.includes('mongo') || lowerTag.includes('database') || lowerTag.includes('firebase')) return <Database className={className} />;
  if (lowerTag.includes('react') || lowerTag.includes('next') || lowerTag.includes('preline') || lowerTag.includes('shadcn') || lowerTag.includes('astro') || lowerTag.includes('vue') || lowerTag.includes('angular') || lowerTag.includes('expo') || lowerTag.includes('mobile')) return <Layers className={className} />;
  if (lowerTag.includes('node') || lowerTag.includes('axios') || lowerTag.includes('zustand') || lowerTag.includes('webhooks') || lowerTag.includes('api') || lowerTag.includes('express')) return <Hexagon className={className} />;
  if (lowerTag.includes('tailwind') || lowerTag.includes('css') || lowerTag.includes('sass') || lowerTag.includes('bootstrap')) return <Palette className={className} />;
  return <Code className={className} />;
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
          <p className="text-sm truncate">/projects/{project.title.toLowerCase().replace(/ /g, "-")}</p>
        </div>
        <button className="text-primary hover:text-white shrink-0">
          <X className="h-5 w-5" />
        </button>
      </header>

      <div className="p-6 custom-scrollbar overflow-y-auto flex-grow grid-background">
        <div className="w-full">
          <h2 className="text-2xl mb-2">{project.title}</h2>
          <p className="text-foreground/80 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-base flex items-center" style={{ borderColor: project.color, color: project.color }}>
                {getTechIcon(tag)}
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
                      <label className="flex items-center text-gray-600 mb-1"><User className="w-3 h-3 mr-1" /> Nombre</label>
                      <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                      <label className="flex items-center text-gray-600 mb-1"><Phone className="w-3 h-3 mr-1" /> Telefono</label>
                      <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                      <label className="flex items-center text-gray-600 mb-1"><Calendar className="w-3 h-3 mr-1" /> Fecha</label>
                      <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center text-gray-600 mb-1"><User className="w-3 h-3 mr-1" /> Apellido</label>
                      <div className="w-full bg-white border border-gray-200 rounded-md h-5"></div>
                      <label className="flex items-center text-gray-600 mb-1"><Briefcase className="w-3 h-3 mr-1" /> Entrevista</label>
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
                <div className="p-2 text-[10px] overflow-x-auto">
                  <div className="flex space-x-1">
                    <button className="bg-[#2c3e50] text-white px-2 py-1 rounded-t-md whitespace-nowrap">Documentos</button>
                    {['Datos Personales', 'Escolaridad', 'Empleos', 'Socioeconomico', 'No Conflicto Intereses', 'Bienes', 'Aviso Privacidad'].map(tab => (
                      <button key={tab} className="text-gray-500 px-2 py-1 rounded-t-md bg-gray-200 whitespace-nowrap">{tab}</button>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <FileText className="w-10 h-10 text-[#2c3e50] shrink-0" />
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
                <div className="flex items-center justify-between bg-[#111] p-1 rounded-sm text-xs flex-wrap">
                  <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <Menu className="w-4 h-4" />
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="font-bold">GESPA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[9px] flex-wrap mb-2 sm:mb-0">
                    <span>Productividad</span><span>/</span><span>Recuperación</span><span>/</span><span>Tiempos</span><span>/</span><span>Simulador</span><span>/</span><span>Información</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400">05:58:53</div>
                    <div className="flex items-center bg-[#222] border border-gray-600 rounded-sm">
                      <Search className="w-3 h-3 mx-1" />
                      <span className="text-gray-500 hidden sm:inline">Buscar...</span>
                      <div className="w-10 h-4" />
                    </div>
                    <div className="bg-gray-700 rounded-full w-5 h-5" />
                  </div>
                </div>

                <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="lg:col-span-2 flex flex-col gap-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Mail className="w-4 h-4" /> American Express</div>
                      <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Phone className="w-4 h-4" /> Vicidial</div>
                      <div className="bg-[#222] p-2 rounded-md flex items-center gap-2"><Heart className="w-4 h-4" /> Situación</div>
                    </div>
                    <div className="bg-[#222] p-2 rounded-md flex-grow">
                      <div className="flex justify-between items-center text-gray-400 mb-1">
                        <div className="flex items-center gap-1"><User className="w-3 h-3" /> -</div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-blue-500" />
                          <div className="w-3 h-3 bg-green-500 rounded-sm" />
                          <Cog className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="text-gray-500 grid grid-cols-1 sm:grid-cols-3 gap-1 text-[8px]">
                        <span>Producto: --</span><span>Activacia: --</span><span>Expediente: AMX--</span>
                        <span>No. Cliente: --</span><span>RFC: --</span><span>Edad: --</span>
                      </div>
                    </div>
                    <div className="bg-[#222] p-2 rounded-md">
                      <div className="flex flex-col sm:flex-row justify-between items-center mb-1">
                        <Phone className="w-4 h-4 mb-2 sm:mb-0" />
                        <div className="flex items-center">
                          <div className="bg-gray-700 border border-gray-600 rounded-l-sm px-2 py-0.5 text-blue-400"><Phone className="w-3 h-3" /></div>
                          <div className="bg-gray-800 border-y border-gray-600 px-2 text-gray-400 text-center">Número de teléfono</div>
                          <button className="bg-gray-700 border border-gray-600 rounded-r-sm px-2">Validar</button>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 sm:grid-cols-9 text-center font-bold text-gray-500 border-b border-gray-600 pb-1 text-[8px] overflow-x-auto">
                        <span className="sm:hidden">T</span><span className="sm:hidden">C</span><span className="sm:hidden">D</span><span className="sm:hidden">S</span><span className="sm:hidden">ID</span>
                        <span className="hidden sm:inline">T</span><span className="hidden sm:inline">C</span><span className="hidden sm:inline">D</span><span className="hidden sm:inline">S</span><span className="hidden sm:inline">ID</span><span>TELEFÓNO</span><span>TELEFONÍA</span><span>ORIGEN</span><span>CLASE</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex flex-col gap-2">
                    <div className="bg-[#222] p-2 rounded-md flex-grow">
                      <div className="flex justify-between items-center text-gray-400 mb-2">
                        <span>0 Cuentas</span>
                        <Share2 className="w-3 h-3" />
                      </div>
                      <p className="text-gray-500">Selecciona una cuenta para trabajar en el flujo</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button className="bg-green-800/50 border border-green-500 p-1 rounded-md flex items-center justify-center gap-1"><Calculator className="w-3 h-3" /> Calculadora</button>
                      <button className="bg-blue-800/50 border border-blue-500 p-1 rounded-md flex items-center justify-center gap-1"><Calendar className="w-3 h-3" /> Calendario</button>
                    </div>
                    <div className="bg-[#222] p-2 rounded-md">
                      <div className="flex items-center gap-1 mb-2 text-gray-400"><Bell className="w-3 h-3" /> Mis Recordatorios</div>
                      <p className="text-gray-500 text-center">No hay recordatorios para la fecha seleccionada.</p>
                    </div>
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
                  <h4 className="text-xl font-bold text-gray-700 mb-4">Ejecutivos</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><CheckSquare className="w-4 h-4 mx-auto mb-1" /><p>Metas</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><User className="w-4 h-4 mx-auto mb-1" /><p>Validadores</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><Users className="w-4 h-4 mx-auto mb-1" /><p>Encargados</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><Clipboard className="w-4 h-4 mx-auto mb-1" /><p>Catalogos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#008272] rounded-lg p-2 text-center text-white"><FileText className="w-4 h-4 mx-auto mb-1" /><p>Scripts</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#61a8a2] rounded-lg p-2 text-center text-white"><Monitor className="w-4 h-4 mx-auto mb-1" /><p>Pantalla</p><p className="font-bold">Abrir</p></div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-700 mb-4">Consultas</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-[10px]">
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><DollarSign className="w-4 h-4 mx-auto mb-1" /><p>Cuentas</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><TrendingUp className="w-4 h-4 mx-auto mb-1" /><p>Productividad</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><FileText className="w-4 h-4 mx-auto mb-1" /><p>Generales</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#3a4d39] rounded-lg p-2 text-center text-white"><BookOpen className="w-4 h-4 mx-auto mb-1" /><p>Historicos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#dde3d0] rounded-lg p-2 text-center text-[#3a4d39]"><Users className="w-4 h-4 mx-auto mb-1" /><p>Ejecutivos</p><p className="font-bold">Abrir</p></div>
                    <div className="bg-[#a2b4a2] rounded-lg p-2 text-center text-[#3a4d39]"><Calendar className="w-4 h-4 mx-auto mb-1" /><p>Dia del Ejecutivo</p><p className="font-bold">Abrir</p></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="text-gray-600 font-bold mb-2 text-xs">Ramificación</p>
                      <div className="text-red-500 text-center text-[10px] py-4">Error al obtener la jerarquia de ejecutivos</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <p className="text-gray-600 font-bold mb-2 text-xs">Sesiones</p>
                      <div className="text-gray-500 text-center text-[10px] py-4">No hay sesiones disponibles</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : project.title === 'Gestalh 2.0' ? (
              <div className="h-full w-full bg-[#f0f4f9] rounded-lg font-sans text-xs text-gray-800 flex">
                <div className="w-12 bg-white flex flex-col items-center py-4 space-y-6 border-r border-gray-200">
                  <Star className="w-6 h-6 text-blue-800" />
                  <Users className="w-5 h-5 text-gray-400" />
                  <User className="w-5 h-5 text-gray-400" />
                  <Cog className="w-5 h-5 text-gray-400" />
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="bg-white rounded-xl p-4 shadow-sm" style={{ backgroundImage: 'linear-gradient(to right, #e0f7fa, #e1f5fe)' }}>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                            <Star className="w-8 h-8 text-white" />
                          </div>
                          <div className="ml-4">
                            <p className="text-gray-600">Hola, Omar OM</p>
                            <p className="text-xl font-bold text-blue-900">Bienvenido</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3 mt-4 text-center">
                        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center">
                          <Cog className="w-5 h-5 text-yellow-500" /><span className="text-[10px] mt-1">Talento</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center">
                          <Heart className="w-5 h-5 text-red-400" /><span className="text-[10px] mt-1">Sencillez</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center">
                          <Award className="w-5 h-5 text-blue-500" /><span className="text-[10px] mt-1">Esfuerzo</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center justify-center">
                          <Sparkles className="w-5 h-5 text-purple-400" /><span className="text-[10px] mt-1">Imaginación</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="ml-3">
                            <p className="font-bold text-blue-900">Gestionando Talento Humano</p>
                            <p className="text-[10px] text-gray-500">Reclutamiento y selección, Atención al personal, Recepción</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 space-y-3">
                      <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                        <FileText className="w-6 h-6 mx-auto text-blue-800" />
                        <p className="font-bold text-lg text-blue-900 mt-1">01:57 p.m.</p>
                        <p className="text-[10px] text-gray-500">Viernes, 12 De Diciembre</p>
                        <div className="flex justify-around text-[9px] mt-2">
                          <div><p>Estado</p><p className="font-bold">Activo</p></div>
                          <div><p>Turno</p><p className="font-bold">Matutino</p></div>
                          <div><p>Sede</p><p className="font-bold">CDMX</p></div>
                        </div>
                      </div>
                      <div className="bg-blue-100 rounded-xl p-3 shadow-sm">
                        <p className="text-[10px] text-gray-500">Temporada</p>
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-blue-900">Invierno</p>
                          <Snowflake className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-[9px] text-blue-800">¡Felices Fiestas!</p>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm text-center">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-bold">OM</span>
                          <span className="text-gray-500">Sistemas</span>
                          <span className="text-gray-500">320.38</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <div className="flex items-center justify-between">
                          <BookOpen className="w-5 h-5 text-blue-800" />
                          <Download className="w-4 h-4 text-gray-400" />
                        </div>
                        <p className="font-bold text-sm mt-1">Manual de Usuario</p>
                        <p className="text-[9px] text-gray-500">Descarga la guía completa...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : project.title === 'Gimnasia' ? (
              <div className="h-full w-full bg-[#181a1b] rounded-lg font-sans text-xs text-white flex">
                <div className="w-12 bg-black/20 flex flex-col items-center py-4 space-y-6">
                  <Landmark className="w-6 h-6 text-gray-400" />
                  <FileText className="w-5 h-5 text-gray-400" />
                  <Users className="w-5 h-5 text-gray-400" />
                  <Trophy className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 p-4">
                  <h4 className="text-xl font-bold mb-4">Eventos</h4>
                  <div className="bg-black/20 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-[10px]">
                      <div>
                        <label className="block text-gray-400 mb-1">No. Evento:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7"></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Modalidad:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar</span><ChevronDown className="w-4 h-4" /></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Pirámide:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar</span><ChevronDown className="w-4 h-4" /></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Organizador:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar</span><ChevronDown className="w-4 h-4" /></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Tipo de evento:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar</span><ChevronDown className="w-4 h-4" /></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Región de evento:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar</span><ChevronDown className="w-4 h-4" /></div>
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-1">Fecha de evento:</label>
                        <div className="w-full bg-[#2a2d2f] border border-gray-600 rounded-md h-7 flex items-center justify-between px-2 text-gray-400"><span>Seleccionar fecha</span><Calendar className="w-4 h-4" /></div>
                      </div>
                      <div className="flex items-end gap-2">
                        <button className="bg-[#08a081] text-white w-full h-7 rounded-md flex items-center justify-center gap-1"><Filter className="w-3 h-3" />Filtrar</button>
                      </div>
                    </div>
                    <div className="absolute right-8 top-28">
                      <button className="bg-[#08a081] text-white w-8 h-8 rounded-full flex items-center justify-center gap-1"><Printer className="w-4 h-4" /></button>
                    </div>
                  </div>

                  <div className="bg-black/20 rounded-lg overflow-x-auto">
                    <table className="w-full text-left text-[10px]">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="p-2">Detalle</th>
                          <th className="p-2">No. Evento</th>
                          <th className="p-2 flex items-center gap-1">Nombre <ArrowUpDown className="w-3 h-3" /></th>
                          <th className="p-2">Lugar</th>
                          <th className="p-2">Sede</th>
                          <th className="p-2">Fecha de evento</th>
                          <th className="p-2 flex items-center gap-1">¿Tiene restricción? <ArrowUpDown className="w-3 h-3" /></th>
                          <th className="p-2">Estatus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { evt: "EVT-001", name: "Campeonato Nacional 2024", place: "Ciudad de México", sede: "Gimnasio Juan de la Barrera", date: "2024-05-15", restriction: "Sí", status: "Abierto", statusColor: "text-green-400" },
                          { evt: "EVT-002", name: "Copa Regional Norte", place: "Monterrey", sede: "Arena Monterrey", date: "2024-06-20", restriction: "No", status: "En Curso", statusColor: "text-yellow-400" },
                          { evt: "EVT-003", name: "Torneo de Verano", place: "Guadalajara", sede: "Polideportivo López Mateos", date: "2024-07-10", restriction: "No", status: "Cerrado", statusColor: "text-red-400" },
                          { evt: "EVT-004", name: "Gala de Invierno", place: "Puebla", sede: "Gimnasio Miguel Hidalgo", date: "2024-12-05", restriction: "Sí", status: "Abierto", statusColor: "text-green-400" },
                          { evt: "EVT-005", name: "Interclubes 2024", place: "Querétaro", sede: "Auditorio Josefa Ortiz", date: "2024-09-12", restriction: "No", status: "Cancelado", statusColor: "text-gray-400" },
                        ].map(row => (
                          <tr key={row.evt} className="border-b border-gray-800">
                            <td className="p-2"><Pencil className="w-3 h-3 text-gray-400" /></td>
                            <td className="p-2">{row.evt}</td>
                            <td className="p-2">{row.name}</td>
                            <td className="p-2">{row.place}</td>
                            <td className="p-2">{row.sede}</td>
                            <td className="p-2">{row.date}</td>
                            <td className="p-2">{row.restriction}</td>
                            <td className={`p-2 ${row.statusColor}`}>{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" style={{ backgroundColor: `${project.color}40` }} />
                  <Skeleton className="h-4 w-12" style={{ backgroundColor: `${project.color}40` }} />
                </div>
                <Skeleton className="h-8 w-full" style={{ backgroundColor: `${project.color}20` }} />
                <div className="flex gap-2">
                  <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20` }} />

                  <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20` }} />
                  <Skeleton className="h-16 w-1/3" style={{ backgroundColor: `${project.color}20` }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}


