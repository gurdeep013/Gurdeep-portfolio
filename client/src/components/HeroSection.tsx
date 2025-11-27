import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import headshotImage from "@assets/gurdeep_picture_headshot_1764259277503.png";
import carsWallpaper from "@assets/mcqueen-cars-wallpaper-image_1764259334756.jpg";

const RESUME_LINK = "https://drive.google.com/file/d/1hUHN7DC2U2nQwH4ap8lZ7af6Uh5c1nWe/view?usp=sharing";

const socialLinks = [
  { icon: Github, href: "https://github.com/gurdeep013", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurdeepsinghere/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gurdeepsinghere@gmail.com", label: "Email" },
];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Like Mater fixing cars, I fix data problems — one insight at a time";

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 40);
      return () => clearInterval(typeTimer);
    }, 800);
    
    return () => clearTimeout(timer);
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url(${carsWallpaper})`,
          transition: "transform 20s ease-out"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      
      <div className="absolute left-0 top-0 bottom-0 w-1 opacity-20">
        <div className="h-8 w-full bg-yellow-400 animate-road-stripe" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className={`lg:col-span-3 space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="text-teal font-medium tracking-widest uppercase text-sm inline-block relative">
                Data Analyst & Problem Solver
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-teal" />
              </p>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-2xl">
                GURDEEP SINGH
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Turning Numbers into Narratives
              </p>
            </div>
            
            <p className="text-lg text-white/80 min-h-[3rem] font-mono" data-testid="text-tagline">
              {displayedText}
              <span className="animate-pulse ml-0.5 text-rust">|</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-rust hover:bg-rust/90 text-white border-rust-foreground shadow-lg shadow-rust/30 hover:shadow-rust/50 transition-all duration-300 hover:scale-105 active:animate-rev-engine"
                onClick={scrollToProjects}
                data-testid="button-view-work"
              >
                View My Work
                <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal/10 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                data-testid="button-download-resume"
                asChild
              >
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-6"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          <div className={`lg:col-span-2 flex justify-center lg:justify-end ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal/40 to-rust/40 rounded-full blur-3xl animate-pulse" />
              <div className="relative animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-rust shadow-2xl animate-glow-pulse">
                  <img 
                    src={headshotImage} 
                    alt="Gurdeep Singh" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    data-testid="img-headshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60 hover:text-rust transition-colors" />
        </div>
      </div>
    </section>
  );
}
