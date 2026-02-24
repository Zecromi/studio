
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { InitialLoader } from '@/components/initial-loader';
import SplitText from '@/component/SplitText';

export default function Home() {
  return (
    <InitialLoader>
      <div className="flex min-h-screen flex-col bg-background grid-background">
        <Header />
        <main className="flex-grow flex flex-col pt-16">
          {/* Hero: Bottom Layer */}
          <section className="sticky top-0 z-0 h-screen w-full">
            <HeroSection />
          </section>

          {/* About: Slides over Hero */}
          <section id="about" className="relative md:sticky md:top-0 z-10 min-h-screen w-full bg-background/95 backdrop-blur-sm border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto">
                <SplitText
                  text="> Mi_perfil..."
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
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <AboutSection />
            </div>
          </section>

          {/* Projects: Slides over About */}
          <section id="projects" className="relative md:sticky md:top-0 z-20 min-h-screen w-full bg-background border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto">
                <SplitText
                  text="> Proyectos..."
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
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <ProjectsSection />
            </div>
          </section>

          {/* Contact: Slides over Projects */}
          <section id="contact" className="relative md:sticky md:top-0 z-30 min-h-screen w-full bg-background border-t border-primary/20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="sticky top-16 z-50 w-full bg-background/50 backdrop-blur-md px-4 py-4 sm:px-6 lg:px-8 border-b border-primary/10">
              <div className="container mx-auto">
                <SplitText
                  text="> Contacto..."
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
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <ContactSection />
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
