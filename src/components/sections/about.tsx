
"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layers, BrainCircuit, Hexagon, Palette } from "lucide-react";
import { TypewriterText } from "@/components/typewriter-text";

const skills = [
  { name: "TypeScript / JavaScript", level: 80, icon: <Code /> },
  { name: "React / Native", level: 80, icon: <Layers /> },
  { name: "Node.js", level: 85, icon: <Hexagon /> },
  { name: "MySQLServer", level: 80, icon: <Database /> },
  { name: "Tailwind / CSS / Sass", level: 75, icon: <Palette /> },
];

const technologies = [
  "Astro", "Tailwind CSS", "shadcn/ui", "Firebase", "ASP.NET",
  "Postman", "React Hook Form", "Docker", "Git", "Github", "C#", "Java", "Next.JS", "Typescript","Zustand","Axios"
];

const AboutSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        <TypewriterText text="> Accesando a_perfil..." />
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
            // Misión_Objetivos
          </h3>
          <p className="text-foreground/80">
          Como diseñador de UX/UI, mi fortaleza reside en transformar ideas en interfaces web y móviles funcionales y atractivas. Valoro profundamente el trabajo en equipo y la comunicación estratégica, creyendo que son clave para tomar decisiones acertadas y alcanzar los objetivos del proyecto. Soy una persona persistente y creativa, comprometida con la excelencia en cada tarea y con una mentalidad de crecimiento constante, donde cada error es una oportunidad para aprender y mejorar.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
             // Skills
          </h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-medium">
                  <span className="flex items-center gap-2">{skill.icon} {skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2 border border-primary/50 bg-primary/10 [&>div]:bg-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
          // Tech_Arsenal
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="border-primary/50 bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
