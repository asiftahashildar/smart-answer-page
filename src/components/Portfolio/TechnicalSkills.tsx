import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Settings, Workflow } from "lucide-react";

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: "Frameworks/Libraries",
      icon: <Layers className="w-5 h-5" />,
      skills: ["React JS", "Redux", "Material UI", "React Hooks"],
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Programming Languages", 
      icon: <Code className="w-5 h-5" />,
      skills: ["JavaScript", "HTML", "CSS", "SCSS"],
      color: "bg-green-500/10 text-green-600 border-green-500/20"
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-5 h-5" />,
      skills: ["Bootstrap", "Material Icons"],
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Methodologies",
      icon: <Workflow className="w-5 h-5" />,
      skills: ["Agile", "SCRUM"],
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern web development technologies and methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-subtle hover:shadow-primary/10 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline" 
                      className={`${category.color} w-full justify-center py-2 font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}