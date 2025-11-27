import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Cloud, BarChart3, Users, Lightbulb, MessageSquare, Trophy } from "lucide-react";

const stats = [
  { value: "6M+", label: "Records Analyzed", icon: Database },
  { value: "100+", label: "Students Mentored", icon: Users },
  { value: "5K+", label: "Transactions Reviewed", icon: BarChart3 },
  { value: "20+", label: "Fraud Patterns Identified", icon: Lightbulb },
];

const skillCategories = [
  {
    title: "Data Analysis",
    skills: [
      { name: "SQL", proficiency: 95 },
      { name: "Excel", proficiency: 90 },
      { name: "Tableau", proficiency: 85 },
      { name: "Looker Studio", proficiency: 80 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", proficiency: 88 },
      { name: "Pandas", proficiency: 85 },
      { name: "NumPy", proficiency: 82 },
      { name: "Matplotlib", proficiency: 78 },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MySQL", proficiency: 90 },
      { name: "BigQuery", proficiency: 75 },
      { name: "AWS", proficiency: 70 },
      { name: "Firebase", proficiency: 72 },
    ],
  },
];

const softSkills = [
  "Critical Reasoning",
  "Stakeholder Collaboration",
  "Data Storytelling",
  "Team Leadership",
  "Problem Solving",
  "Communication",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">Get to Know Me</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            THE STORY BEHIND THE DATA
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science Engineering graduate from Chandigarh University with a deep passion 
              for uncovering insights hidden within data. My journey into data analytics began with a 
              simple curiosity: how can numbers tell stories that drive real business impact?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From analyzing over 6 million transaction records to mentoring 100+ aspiring tech 
              professionals, I've developed a unique blend of technical expertise and communication 
              skills that help bridge the gap between raw data and actionable insights.
            </p>
            <p className="text-lg text-rust font-medium italic">
              "Data tells stories; I help translate them."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card 
                key={stat.label} 
                className="p-6 text-center hover-elevate"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <stat.icon className="h-8 w-8 text-teal mx-auto mb-3" />
                <p className="font-heading text-4xl text-rust mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-3xl text-foreground mb-8 text-center">TECHNICAL SKILLS</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.title} className="p-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  {category.title === "Data Analysis" && <BarChart3 className="h-5 w-5 text-teal" />}
                  {category.title === "Programming" && <Code className="h-5 w-5 text-teal" />}
                  {category.title === "Databases & Cloud" && <Cloud className="h-5 w-5 text-teal" />}
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase()}`}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-teal to-rust rounded-full transition-all duration-1000"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-3xl text-foreground mb-6 text-center">SOFT SKILLS</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                className="px-4 py-2 text-sm bg-teal/10 text-teal border-teal/20"
                data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
