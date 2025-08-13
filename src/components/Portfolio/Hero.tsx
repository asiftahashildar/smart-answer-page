import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Available for Immediate Joining
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sumaiyya Mulla
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            Software Engineer & Front-End Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data-driven professional with 2+ years of experience in Web Development, 
            Front-End, React JS, JavaScript. Passionate about creating seamless user experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>7847088313</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>sumaiyya786mulla@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Bengaluru, IN</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/sumaiyyamulla</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onOpenChat}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Ask Me Anything
          </Button>
        </div>
      </div>
    </section>
  );
}