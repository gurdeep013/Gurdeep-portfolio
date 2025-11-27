import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import headshotImage from "@assets/gurdeep_picture_headshot_1764259277503.png";
import carsWallpaper from "@assets/mcqueen-cars-wallpaper-image_1764259334756.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/gurdeep013", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurdeepsinghere/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gurdeepsinghere@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Like Mater fixing cars, I fix data problems — one insight at a time";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${carsWallpaper})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4 animate-fade-in">
              <p className="text-teal font-medium tracking-wide uppercase text-sm">
                Data Analyst & Problem Solver
              </p>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white tracking-wide">
                GURDEEP SINGH
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Turning Numbers into Narratives
              </p>
            </div>
            
            <p className="text-lg text-white/80 min-h-[3rem] font-mono" data-testid="text-tagline">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-rust hover:bg-rust/90 text-white border-rust-foreground"
                onClick={scrollToProjects}
                data-testid="button-view-work"
              >
                View My Work
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal/10 backdrop-blur-sm"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/30 to-rust/30 rounded-full blur-3xl" />
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rust shadow-2xl">
                  <img 
                    src={headshotImage} 
                    alt="Gurdeep Singh" 
                    className="w-full h-full object-cover"
                    data-testid="img-headshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
}
