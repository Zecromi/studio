"use client";

import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import { InitialLoader } from '@/components/initial-loader';
import SplitText from '@/component/SplitText';
import { User, Code2, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const AboutSection = dynamic(() => import('@/components/sections/about'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-primary/5 rounded-3xl" />,
});

const ProjectsSection = dynamic(() => import('@/components/sections/projects'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-primary/5 rounded-3xl" />,
});

const ContactSection = dynamic(() => import('@/components/sections/contact'), {
  loading: () => <div className="h-96 w-full animate-pulse bg-primary/5 rounded-3xl" />,
});

const Footer = dynamic(() => import('@/components/footer'));

// Componente para manejar carga perezosa al scroll
function ScrollLazyWrapper({ children, minHeight = "400px" }: { children: React.ReactNode, minHeight?: string }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Comienza a cargar 200px antes de llegar
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: isInView ? "auto" : minHeight }}>
      {isInView ? children : <div className="w-full h-full animate-pulse bg-primary/5 rounded-3xl" />}
    </div>
  );
}

export default function Home() {
  return (
    <InitialLoader>
      <div className="flex min-h-screen flex-col bg-background grid-background">
        <Header />
        <main className="flex-grow flex flex-col pt-16">
          {/* Hero: Bottom Layer */}
          <section className="sticky top-0 z-0 h-screen w-full flex items-start justify-center overflow-hidden">
            <HeroSection />
            <h1
              className="absolute top-0 text-[15vw] md:text-[20vw] font-bold uppercase tracking-tighter text-foreground/10 dark:text-primary/5 pointer-events-none select-none z-0 leading-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
                maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'
              }}
            >
              PORTFOLIO
            </h1>
          </section>

          {/* About: Slides over Hero */}
          <section id="about" className="relative z-10 w-full bg-background/95 backdrop-blur-sm border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto flex items-center gap-3">

                <User className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                <SplitText
                  text="Mi_perfil..."
                  className="text-3xl font-bold md:text-4xl text-glow"
                  delay={30}
                  duration={0.5}
                  tag="h2"
                  textAlign="left"
                  from={{ opacity: 0, x: -20 }}
                  to={{ opacity: 1, x: 0 }}
                />
              </div>
            </div>
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
              <ScrollLazyWrapper minHeight="500px">
                <AboutSection />
              </ScrollLazyWrapper>
            </div>
          </section>

          {/* Projects: Slides over About */}
          <section id="projects" className="relative z-20 w-full bg-background border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto flex items-center gap-3">
                <Code2 className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                <SplitText
                  text="Proyectos..."
                  className="text-3xl font-bold md:text-4xl text-glow"
                  delay={30}
                  duration={0.5}
                  tag="h2"
                  textAlign="left"
                  from={{ opacity: 0, x: -20 }}
                  to={{ opacity: 1, x: 0 }}
                />
              </div>
            </div>
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
              <ScrollLazyWrapper minHeight="800px">
                <ProjectsSection />
              </ScrollLazyWrapper>
            </div>
          </section>

          {/* Contact: Slides over Projects */}
          <section id="contact" className="relative z-30 w-full bg-background border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto flex items-center gap-3">
                <Mail className="h-8 w-8 text-primary drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                <SplitText
                  text="Contacto..."
                  className="text-3xl font-bold md:text-4xl text-glow"
                  delay={30}
                  duration={0.5}
                  tag="h2"
                  textAlign="left"
                  from={{ opacity: 0, x: -20 }}
                  to={{ opacity: 1, x: 0 }}
                />
              </div>
            </div>
            <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
              <ScrollLazyWrapper minHeight="400px">
                <ContactSection />
              </ScrollLazyWrapper>
            </div>
          </section>
        </main>
        <div className="relative z-40 bg-background">
          <Footer />
        </div>
      </div>
    </InitialLoader>
  );
}
