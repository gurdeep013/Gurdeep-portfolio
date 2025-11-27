import { Card } from "@/components/ui/card";
import { GraduationCap, School, Award } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  icon: typeof GraduationCap;
  highlights?: string[];
}

const education: Education[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology - Computer Science Engineering",
    institution: "Chandigarh University",
    location: "Punjab, India",
    period: "2021 – 2025",
    icon: GraduationCap,
    highlights: [
      "Relevant coursework: Data Structures, Databases, Machine Learning",
      "Active member of technical clubs and hackathons",
      "Specialized in Data Analytics and Business Intelligence",
    ],
  },
  {
    id: "class12",
    degree: "Class 12th (CBSE)",
    institution: "DAV Centenary Public School",
    location: "Haridwar, India",
    period: "2021",
    score: "85%",
    icon: School,
  },
  {
    id: "class10",
    degree: "Class 10th (CBSE)",
    institution: "DAV Centenary Public School",
    location: "Haridwar, India",
    period: "2019",
    score: "89.4%",
    icon: School,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-background" data-testid="section-education">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">Foundation</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            ACADEMIC FOUNDATION
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rust via-teal to-rust/30 hidden md:block" />
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative" data-testid={`education-${edu.id}`}>
                  <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-teal border-4 border-background z-10 mt-6" />
                  
                  <Card className="ml-0 md:ml-16 p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${index === 0 ? "bg-rust/10" : "bg-teal/10"} shrink-0`}>
                        <edu.icon className={`h-6 w-6 ${index === 0 ? "text-rust" : "text-teal"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                            <p className="text-rust font-medium">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.location} • {edu.period}</p>
                          </div>
                          {edu.score && (
                            <div className="flex items-center gap-2 bg-teal/10 px-3 py-1 rounded-full">
                              <Award className="h-4 w-4 text-teal" />
                              <span className="font-semibold text-teal">{edu.score}</span>
                            </div>
                          )}
                        </div>
                        
                        {edu.highlights && (
                          <ul className="mt-4 space-y-2">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-rust mt-1 shrink-0">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
