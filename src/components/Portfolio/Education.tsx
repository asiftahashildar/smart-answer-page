import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in technology and engineering
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-border shadow-subtle">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Bachelor of Technology</h3>
                    <p className="text-lg text-primary font-semibold">Visveswaraya Technological University (VTU)</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jun 2018 - Jun 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Chikodi, KA</span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full">
                  <span className="text-2xl font-bold text-white">B.Tech</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}