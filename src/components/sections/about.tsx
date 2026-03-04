
"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const technologies = [
  { name: "Astro", icon: "devicon-astro-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "ASP.NET", icon: "devicon-dot-net-plain" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "React Hook Form", icon: "devicon-react-original" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Github", icon: "devicon-github-original" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "Next.JS", icon: "devicon-nextjs-plain" },
  { name: "Typescript", icon: "devicon-typescript-plain" },
  { name: "Zustand", icon: "devicon-zustand-plain" },
  { name: "Axios", icon: "devicon-axios-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
  { name: "Framer Motion", icon: "devicon-framer-original" },
  { name: "Swagger", icon: "devicon-swagger-plain" },
  { name: "shadcn/ui", icon: "devicon-tailwindcss-plain" }
];

const getDevicon = (tech: string) => {
  const mapping: Record<string, string> = {
    "ASP.NET": "devicon-dot-net-plain",
    "SQL Server": "devicon-microsoftsqlserver-plain",
    "MySQL": "devicon-mysql-plain",
    "C#": "devicon-csharp-plain",
    "ASP.NET Core": "devicon-dotnetcore-plain",
    "React.js": "devicon-react-original",
    "React": "devicon-react-original",
    "NodeJS": "devicon-nodejs-plain",
    "Tailwind": "devicon-tailwindcss-plain",
    "Next.js": "devicon-nextjs-plain",
    "TypeScript": "devicon-typescript-plain",
    "Docker": "devicon-docker-plain",
    "Axios": "devicon-axios-plain",
    "Git": "devicon-git-plain",
    "Astro": "devicon-astro-plain",
    "Bootstrap": "devicon-bootstrap-plain",
    "Bootstrap React": "devicon-bootstrap-plain",
    "Framer Motion": "devicon-framer-original",
    "Swagger": "devicon-swagger-plain",
    "NodeJs": "devicon-nodejs-plain",
    "Zustand": "devicon-zustand-plain",
    "shadcn/ui": "devicon-tailwindcss-plain",
    "Framer": "devicon-framer-original",
    "SSMS": "devicon-microsoftsqlserver-plain",
    "Postman": "devicon-postman-plain",
    "OKTA": "devicon-okta-plain",
    "Tailwind 4": "devicon-tailwindcss-plain",
    "Recharts": "devicon-react-original",
    "jsPDF": "devicon-javascript-plain",
    "ExcelJS": "devicon-javascript-plain",
  };

  const normalized = tech.trim();
  return mapping[normalized] || mapping[normalized.split(' ')[0]] || null;
};

const timelineData = [
  {
    year: "2022",
    title: "GESTALH - Recursos Humanos",
    description: "Modernización de sistema (.exe) legacy a plataforma web centralizada. Eliminó la necesidad de accesos manuales por servidor, simplificando procesos de contratación y alta.",
    tech: ["ASP.NET", "SQL Server", "C#", "Bootstrap", "SSMS"],
    color: "hsl(180, 50%, 40%)",
  },
  {
    year: "2024",
    title: "WEB CANDIDATOS",
    description: "Transformación digital de reclutamiento. Sustitución de formatos físicos por una plataforma robusta para la gestión de solicitudes, documentación y estudios socioeconómicos.",
    tech: ["ASP.NET", "SQL Server", "C#", "Bootstrap", "SSMS"],
    color: "hsl(236, 59.70%, 52.40%)",
  },
  {
    year: "2025",
    title: "GESPA WEB",
    description: "Plataforma avanzada para gestión de cartera. Migración estratégica a entorno web seguro con integración OKTA, optimizando el seguimiento de pagos y procesos de cobranza.",
    tech: ["React.js", "Axios", "Swagger", "NodeJS", "Bootstrap React", "OKTA"],
    color: "hsl(0, 100.00%, 50.00%)",
  },
  {
    year: "2025",
    title: "COORIN WEB",
    description: "Solución táctica financiera. Digitalización de consulta de cuentas y control de pagos mediante arquitectura web escalable, unificando la administración operativa.",
    tech: ["React", "Tailwind", "Axios", "NodeJS", "Flyon UI"],
    color: "hsl(150, 56.70%, 35.30%)",
  },
  {
    year: "2026",
    title: "GESTALH 2.0",
    description: "Evolución integral a ERP de RRHH. Lideré la migración a la versión 2.0, reduciendo errores de captura y optimizando la productividad mediante automatización avanzada.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Axios", "Zustand", "shadcn/ui", "Framer Motion"],
    color: "hsl(205, 56.70%, 35.30%)",
  },
  {
    year: "2026",
    title: "GIMNASIA - Control Nacional",
    description: "ERP deportivo integral para centralizar la administración de atletas y eventos. Incluye reportes automatizados, dashboards en tiempo real y UX premium.",
    tech: ["Next.js", "TypeScript", "Tailwind 4", "Framer Motion", "Recharts", "Zustand", "jsPDF", "ExcelJS"],
    color: "hsl(280, 65%, 45%)",
  }
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="w-full relative py-12">
      <div className="space-y-16">
        {/* Misión y Perfil */}
        <div className="grid gap-8 items-start">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
              // Perfil_Profesional
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg max-w-4xl">
              Desarrollador Full Stack con 4 años de experiencia en la transformación digital de sistemas empresariales. Enfocado en el diseño de arquitecturas web modernas y en la migración estratégica de sistemas legacy hacia ecosistemas escalables de alto rendimiento. Con trayectoria en el desarrollo de plataformas ERP para Recursos Humanos y Deporte, priorizando la automatización de procesos operativos, la seguridad (OKTA) y la integridad de la información. Comprometido con la creación de interfaces funcionales y analíticas eficientes utilizando el stack de Next.js, React y Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <h3 className="mb-12 text-2xl font-semibold text-primary text-glow">
            // Historial_de_Proyectos
          </h3>

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-primary/10">
            {/* Animated Progress Line */}
            <motion.div
              className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent origin-top z-0"
              style={{ scaleY }}
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Dot */}
                <div
                  style={{ '--hover-color': item.color } as any}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] group-hover:shadow-[0_0_20px_var(--hover-color)] group-hover:border-[var(--hover-color)] transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-[var(--hover-color)] animate-pulse" />
                </div>

                {/* Content Card */}
                <div
                  style={{ '--hover-color': item.color } as any}
                  className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-primary/10 bg-primary/5 backdrop-blur-sm hover:border-[var(--hover-color)]/30 hover:bg-[var(--hover-color)]/5 transition-all duration-300 ml-14 md:ml-0 group-hover:shadow-[0_0_30px_var(--hover-color)/0.1]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="text-primary group-hover:text-[var(--hover-color)] font-mono text-sm font-bold transition-colors">{item.year}</span>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-[var(--hover-color)] transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => {
                      const iconClass = getDevicon(t);
                      return (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary/80 uppercase tracking-widest font-bold group-hover:border-[var(--hover-color)]/40 group-hover:text-[var(--hover-color)] transition-all flex items-center gap-1.5"
                        >
                          {iconClass && <i className={`${iconClass} text-xs`} />}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Tech Arsenal Section */}
        <div className="pt-8">
          <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
            // Tech_Arsenal
          </h3>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {technologies.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 flex flex-col items-center justify-center gap-3 p-4 h-24 w-24 rounded-2xl group/tech hover:-translate-y-1 shadow-sm hover:shadow-primary/20"
              >
                {tech.icon ? (
                  <i className={`${tech.icon} text-3xl transition-all duration-300 group-hover/tech:scale-110 group-hover/tech:drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]`} />
                ) : (
                  <div className="text-3xl font-bold opacity-30 select-none">?</div>
                )}
                <span className="text-[10px] font-bold uppercase tracking-wider text-center leading-tight">
                  {tech.name}
                </span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
