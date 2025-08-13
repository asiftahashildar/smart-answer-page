import { useState } from "react";
import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import TechnicalSkills from "@/components/Portfolio/TechnicalSkills";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import ChatModal from "@/components/ChatModal";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onOpenChat={() => setIsChatOpen(true)} />
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />
        <About />
        <TechnicalSkills />
        <Experience />
        <Education />
      </main>
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;