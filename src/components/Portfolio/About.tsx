import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap } from "lucide-react";

export default function About() {
  const keySkills = [
    "Communication Skills", "Decision Making", "Problem Solving", "Collaboration & Teamwork",
    "Attention to Detail", "Adaptability & Flexibility", "Time Management", "Stakeholder Management",
    "Creativity & Innovation", "Critical Thinking", "Empathy & User Centric Thinking", "Conflict Resolution",
    "Leadership & Ownership", "Interpersonal Skills", "Client Handling & Presentation", "Meticulous Design",
    "Web Performance", "JavaScript Libraries"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional user experiences through clean, efficient code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 bg-card border-border shadow-subtle">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Professional Summary</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Data-driven professional with extensive experience in software engineering and web development. 
                Specialized in Front-End development with expertise in React JS, JavaScript, and modern web technologies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Proficient in building responsive, user-friendly web applications using React, Redux, Material UI, 
                SCSS, and Bootstrap. Skilled in agile methodologies, reusable components, and enhancing user experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Experience</p>
                    <p className="text-sm text-muted-foreground">2+ Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Zap className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Availability</p>
                    <p className="text-sm text-muted-foreground">Immediate</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border shadow-subtle">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Key Skills & Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {keySkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}