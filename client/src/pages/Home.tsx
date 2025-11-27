import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-background ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </>
  );
}
