
"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layers, Hexagon, Palette } from "lucide-react";
import { TypewriterText } from "@/components/typewriter-text";
import TiltedCard from "@/component/TiltedCard";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
  { name: "TypeScript / JavaScript", level: 80, icon: <Code /> },
  { name: "React / Native", level: 80, icon: <Layers /> },
  { name: "Node.js", level: 85, icon: <Hexagon /> },
  { name: "MySQLServer", level: 80, icon: <Database /> },
  { name: "Tailwind / CSS / Sass", level: 75, icon: <Palette /> },
];

const technologies = [
  "Astro", "Tailwind CSS", "shadcn/ui", "Firebase", "ASP.NET",
  "Postman", "React Hook Form", "Docker", "Git", "Github", "C#", "Java", "Next.JS", "Typescript", "Zustand", "Axios"
];

const AboutSection = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Apply spring smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate coordinates for the swap using the smoothed progress.
  // We want the GIFs to cross paths at scrollYProgress around 0.5
  // GIF 1 (Misión): Moves from (0,0) towards the position of GIF 2.
  // GIF 2 (Skills): Moves from (0,0) towards the position of GIF 1.

  // Note: These values are estimations for a diagonal swap.
  // Misión moves right -> left, top -> bottom.
  const x1 = useTransform(smoothProgress, [0.2, 0.8], ["-4%", "-350%"]);
  const y1 = useTransform(smoothProgress, [0.2, 0.8], ["10px", "620px"]);

  // Skills moves left -> right, bottom -> top.
  const x2 = useTransform(smoothProgress, [0.2, 0.8], ["0%", "350%"]);
  const y2 = useTransform(smoothProgress, [0.2, 0.8], ["0px", "-620px"]);

  // Opacity and scale for a "passing through dimensions" feel
  const opacity = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [1, 0.7, 0.7, 1]);
  const scale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [1, 0.85, 1]);

  return (
    <section ref={containerRef} className="w-full relative">
      <div className="space-y-12">
        {/* Row 1: Misión & Placeholder - Wider text, narrower square image */}
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] items-center">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
              // Misión_Objetivos
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Desarrollador Full Stack con 4 años de experiencia sólida en el ciclo completo de desarrollo de software (SDLC). Especializado en la modernización de sistemas empresariales, migrando aplicaciones legacy a arquitecturas web escalables utilizando ASP.NET Core, C# y React.js. Experto en optimización de bases de datos y creación de interfaces de usuario eficientes con Next.js y Tailwind CSS. Enfocado en la entrega de código limpio, mantenible y soluciones de alto impacto para la gestión administrativa y financiera.
            </p>
          </div>
          <motion.div
            style={{
              x: isMobile ? 0 : x1,
              y: isMobile ? 0 : y1,
              opacity: isMobile ? 1 : opacity,
              scale: isMobile ? 1 : scale,
              zIndex: 5
            }}
            className="flex justify-center"
          >
            <TiltedCard
              imageSrc="/tecla_neon.png"
              altText="Misión y Objetivos"
              captionText="Misión y Objetivos"
              containerHeight="220px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="500px"
              showTooltip={true}
              rotateAmplitude={12}
              scaleOnHover={1.05}
            />
          </motion.div>
        </div>

        {/* Row 2: Placeholder & Skills - Narrower square image, wider text */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] items-center">
          <motion.div
            style={{
              x: isMobile ? 0 : x2,
              y: isMobile ? 0 : y2,
              opacity: isMobile ? 1 : opacity,
              scale: isMobile ? 1 : scale,
              zIndex: 10
            }}
            className="flex justify-center order-2 md:order-1"
          >
            <TiltedCard
              imageSrc="/code_skills.gif"
              altText="Skills"
              captionText="Digital Skills"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              showTooltip={true}
              rotateAmplitude={15}
              scaleOnHover={1.1}
            />
          </motion.div>
          <div className="order-1 md:order-2">
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

        {/* Tech Arsenal Section */}
        <div className="pt-8">
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
      </div>
    </section>
  );
};

export default AboutSection;
