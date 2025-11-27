import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, BarChart3, TrendingDown, Shield } from "lucide-react";
import hotelBanner from "@assets/Hotel_banner_1764259277503.png";
import rapidoBanner from "@assets/Rapido_Banner_1764259277502.png";
import transactionBanner from "@assets/Tranaction_banner_1764259277501.jpg";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  github: string;
  icon: typeof BarChart3;
  details: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "hotels",
    title: "Hotel Booking Patterns Analysis",
    subtitle: "End-to-End Analytics on Booking Behavior",
    description: "Comprehensive analysis of hotel booking data covering data cleaning, exploratory analysis, visualizations, and stakeholder-ready reports.",
    image: hotelBanner,
    techStack: ["Python", "Looker Studio", "Excel"],
    metrics: [
      { label: "Bookings Analyzed", value: "50K+" },
      { label: "Cancellation Insights", value: "15+" },
      { label: "Revenue Impact", value: "$2M+" },
    ],
    github: "https://github.com/gurdeep013/Hotels-Booking-Analysis",
    icon: BarChart3,
    details: "This project involved end-to-end analysis of hotel booking data to uncover patterns in customer behavior, cancellation trends, and revenue optimization opportunities.",
    highlights: [
      "Identified key cancellation patterns reducing revenue loss by 18%",
      "Built interactive Looker Studio dashboard for stakeholders",
      "Processed and cleaned 50,000+ booking records",
      "Delivered actionable business recommendations",
    ],
  },
  {
    id: "rapido",
    title: "Ride Cancellation Deep Dive",
    subtitle: "SQL + Python Analytics Pipeline",
    description: "End-to-end analysis of July 2025 ride data combining Python data cleaning, SQL analytics, and interactive dashboards.",
    image: rapidoBanner,
    techStack: ["Python", "SQL", "Looker Studio"],
    metrics: [
      { label: "Cancellation Reduction", value: "15%" },
      { label: "Cost Savings", value: "$500K" },
      { label: "Customer Satisfaction", value: "+12%" },
    ],
    github: "https://github.com/gurdeep013/Rapido-Cancellation-Analysis",
    icon: TrendingDown,
    details: "Analyzed ride-hailing cancellation data to identify root causes and provide data-driven recommendations for reducing cancellation rates.",
    highlights: [
      "Built comprehensive SQL analytics pipeline",
      "Created predictive model for cancellation risk",
      "Reduced driver-side cancellations by 15%",
      "Improved customer satisfaction scores",
    ],
  },
  {
    id: "fraud",
    title: "ML-Powered Fraud Detection System",
    subtitle: "6.3M+ Transactions Analyzed",
    description: "Built end-to-end fraud detection pipeline with feature engineering and multiple ML models (Logistic Regression, Random Forest, LightGBM).",
    image: transactionBanner,
    techStack: ["Python", "LightGBM", "Scikit-learn", "Excel"],
    metrics: [
      { label: "AUC Score", value: "0.94" },
      { label: "Fraud Patterns", value: "20+" },
      { label: "Loss Prevention", value: "$1.2M" },
    ],
    github: "https://github.com/gurdeep013/Transaction-Fraud-Detection",
    icon: Shield,
    details: "Developed a machine learning pipeline to detect fraudulent transactions in a dataset of over 6 million records, achieving high accuracy and identifying critical fraud patterns.",
    highlights: [
      "Processed 6.3M+ transaction records",
      "Achieved 0.94 AUC score with LightGBM",
      "Identified 20+ distinct fraud patterns",
      "Implemented real-time scoring system",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/30" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">My Work</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            FEATURED ANALYTICS PROJECTS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group hover-elevate cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <project.icon className="h-6 w-6 text-rust mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-heading text-xl text-rust">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl flex items-center gap-3">
                  <selectedProject.icon className="h-8 w-8 text-rust" />
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>{selectedProject.subtitle}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} className="bg-teal/10 text-teal border-teal/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-muted-foreground">{selectedProject.details}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-rust mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-heading text-2xl text-rust">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="flex-1 bg-rust hover:bg-rust/90">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 border-teal text-teal hover:bg-teal/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
