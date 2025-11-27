import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Cloud, BarChart2, Cpu, Briefcase } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  provider: string;
  icon: typeof Cloud;
  description: string;
  highlight?: string;
  skills: string[];
  verifyLink: string;
}

const certifications: Certification[] = [
  {
    id: "aws",
    title: "AWS Fundamentals Specialization",
    provider: "Coursera",
    icon: Cloud,
    description: "Learned AWS services, deployment basics, and cloud security fundamentals",
    skills: ["AWS EC2", "S3", "RDS", "Cloud Security"],
    verifyLink: "https://www.coursera.org/account/accomplishments/specialization/GJM74Q5WKHUN",
  },
  {
    id: "tableau",
    title: "Data Visualization with Tableau Specialization",
    provider: "Coursera",
    icon: BarChart2,
    description: "Built interactive dashboards and enhanced data storytelling capabilities",
    skills: ["Tableau", "Dashboard Design", "Data Storytelling"],
    verifyLink: "https://www.coursera.org/account/accomplishments/specialization/J9NXB6K2YXS3",
  },
  {
    id: "iot",
    title: "Introduction to Internet of Things",
    provider: "NPTEL – IIT Kharagpur",
    icon: Cpu,
    description: "Covered IoT architecture, embedded systems, and sensor networks",
    highlight: "Top 2% of learners",
    skills: ["IoT Architecture", "Embedded Systems", "Sensor Networks"],
    verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS83S4333005820028842",
  },
  {
    id: "deloitte",
    title: "Data Analytics Job Simulation",
    provider: "Deloitte Australia via Forage",
    icon: Briefcase,
    description: "Hands-on industry experience simulation as data analyst with real-world datasets",
    skills: ["Data Analysis", "Business Insights", "Client Communication"],
    verifyLink: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68ea9e3662069f649c6ab3f1_1760366707720_completion_certificate.pdf",
  },
];

export default function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-24 bg-muted/30" data-testid="section-certifications">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">Always Growing</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            CONTINUOUS LEARNING PATH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id} 
              className={`p-6 hover-elevate group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              data-testid={`cert-${cert.id}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-rust/10 shrink-0 group-hover:bg-rust/20 transition-colors">
                  <cert.icon className="h-6 w-6 text-rust group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="font-semibold text-lg leading-tight group-hover:text-rust transition-colors">{cert.title}</h3>
                      <p className="text-sm text-teal font-medium">{cert.provider}</p>
                    </div>
                    {cert.highlight && (
                      <Badge className="bg-mcqueen/10 text-mcqueen border-mcqueen/20 shrink-0 animate-pulse">
                        {cert.highlight}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-3">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-xs bg-muted hover:scale-105 transition-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 border-teal text-teal hover:bg-teal/10 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
                    asChild
                  >
                    <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
