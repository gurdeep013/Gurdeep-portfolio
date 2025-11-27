import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import cacPhoto from "@assets/cac_Perview_photo_1764259277504.jpg";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "leadership";
  icon: typeof Briefcase;
  highlights: string[];
  skills: string[];
  image?: string;
}

const experiences: Experience[] = [
  {
    id: "metacrafters",
    title: "Data & Blockchain Operations Intern",
    company: "Metacrafters",
    location: "Remote",
    period: "Jun 2023 – Aug 2023",
    type: "work",
    icon: Briefcase,
    highlights: [
      "Reviewed 5K+ transaction entries, improved fix speed by 15%",
      "Cleaned large log datasets, identified 20+ failure patterns",
      "Collaborated with engineering team on data-driven solutions",
      "Developed automated reporting scripts reducing manual effort",
    ],
    skills: ["Data Cleaning", "Pattern Recognition", "Cross-functional Collaboration", "Python"],
  },
  {
    id: "cac",
    title: "Founding Member — Technical & Video Lead",
    company: "CAC (Connecting All Circles)",
    location: "Chandigarh University",
    period: "Jul 2022 – Dec 2024",
    type: "leadership",
    icon: Users,
    highlights: [
      "Produced event media for Kawach Hackathon and major university events",
      "Mentored 100+ juniors in public speaking and anchoring",
      "Led team coordination and organizational leadership",
      "Built community of aspiring tech professionals",
    ],
    skills: ["Leadership", "Video Production", "Mentorship", "Event Management"],
    image: cacPhoto,
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("metacrafters");

  return (
    <section id="experience" className="py-24 bg-background" data-testid="section-experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">Where I've Been</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            PROFESSIONAL JOURNEY
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rust via-teal to-rust/30 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`experience-${exp.id}`}>
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-rust border-4 border-background z-10 mt-8" />
                
                <Card 
                  className={`ml-0 md:ml-16 overflow-hidden transition-all duration-300 ${
                    expandedId === exp.id ? "ring-2 ring-rust/30" : ""
                  }`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${exp.type === "work" ? "bg-rust/10" : "bg-teal/10"}`}>
                          <exp.icon className={`h-6 w-6 ${exp.type === "work" ? "text-rust" : "text-teal"}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-rust font-medium">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-muted rounded-md transition-colors">
                        {expandedId === exp.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {expandedId === exp.id && (
                    <div className="px-6 pb-6 space-y-4 animate-fade-in">
                      <div className="h-px bg-border" />
                      
                      {exp.image && (
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <img 
                            src={exp.image} 
                            alt={exp.company}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-medium mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-rust mt-1 shrink-0">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-muted text-muted-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
