
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background grid-background">
      <Header />
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8">
        <HeroSection />
        
        <div id="about" className="my-16 md:my-24">
          <AboutSection />
        </div>

        <Separator className="my-16 bg-primary/20" />

        <div id="projects" className="my-16 md:my-24">
          <ProjectsSection />
        </div>

        <Separator className="my-16 bg-primary/20" />

        <div id="contact" className="my-16 md:my-24">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
