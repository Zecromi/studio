"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Layers, BrainCircuit } from "lucide-react";

const skills = [
  { name: "TypeScript / JavaScript", level: 95, icon: <Code /> },
  { name: "React / Next.js", level: 90, icon: <Layers /> },
  { name: "Node.js / Express", level: 85, icon: <Database /> },
  { name: "Cybernetic Integration", level: 75, icon: <BrainCircuit /> },
];

const technologies = [
  "Astro", "Tailwind CSS", "shadcn/ui", "Firebase", "Genkit",
  "Zod", "React Hook Form", "Vercel", "Docker", "Git", "Figma"
];

const AboutSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">
        &gt; Accessing profile_data...
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
            // Mission_Objective
          </h3>
          <p className="text-foreground/80">
            A seasoned developer specializing in crafting robust and scalable web applications. My core directive is to merge elegant design with high-performance code to create seamless user experiences. I thrive in the ever-evolving landscape of web technologies, constantly upgrading my internal systems to meet new challenges.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-primary text-glow">
             // Skill_Matrix
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
