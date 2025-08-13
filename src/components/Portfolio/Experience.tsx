import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Maventech Labs",
      position: "Software Engineer",
      duration: "Sep 2023 - Present",
      location: "Bengaluru, KA",
      projects: [
        {
          name: "Microsites",
          responsibilities: [
            "Regular Updates and Maintenance: Performed regular updates to websites, including content management and visual enhancements, ensuring a seamless user experience.",
            "Bug Fixing: Identified and resolved technical issues to optimize website performance and enhance user experience.",
            "Design Updates: Refreshed website visuals by updating logos and design elements to align with modern trends and modern look."
          ]
        },
        {
          name: "KSRTC Avatar 6",
          responsibilities: [
            "Top Route Management: Managed and updated navigation routes to improve user accessibility and streamline website navigation.",
            "Efficient Bus and Cargo Management: Streamlined the management and scheduling of bus and cargo services, enhancing operational efficiency for state-run roadway services.",
            "Software Engineering Principles: Applied robust software engineering practices to ensure high standards of quality, scalability, and performance.",
            "User-Friendly Interface: Delivered a responsive and intuitive interface to enhance the overall user experience for passengers and administrators.",
            "Service Scheduling: Facilitated the efficient planning and organization of bus and cargo service schedules to optimize resource allocation.",
            "Real-Time Tracking: Enabled real-time tracking of buses and cargo for improved operational transparency and efficiency.",
            "Reporting and Analytics: Provided insightful analytics and reporting capabilities to monitor performance and support decision-making."
          ]
        }
      ],
      techStack: ["React Js", "Redux", "React Router", "SCSS", "JavaScript", "HTML", "CSS", "JavaScript", "PHP", "CMS Tools", "Graphic Design Tools"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experience building scalable web applications and solving complex problems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-card border-border shadow-subtle">
              <div className="space-y-6">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    </div>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-8">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-2 border-primary pl-6 space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">Project: {project.name}</h4>
                      
                      <div className="space-y-3">
                        {project.responsibilities.map((responsibility, respIndex) => (
                          <div key={respIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}