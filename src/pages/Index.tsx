import QuestionAnswer from "@/components/QuestionAnswer";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Zap, Shield, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">AskAI</span>
            </div>
            <Button variant="outline" className="bg-muted/50 border-border hover:bg-muted">
              About
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold bg-hero-gradient bg-clip-text text-transparent leading-tight">
                Ask Anything,
                <br />
                Get Instant Answers
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Powered by advanced AI technology, get comprehensive answers to any question in seconds.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Instant Responses",
                  description: "Get answers to your questions in seconds, not minutes"
                },
                {
                  icon: Shield,
                  title: "Reliable Information", 
                  description: "Powered by advanced AI for accurate and helpful responses"
                },
                {
                  icon: Clock,
                  title: "24/7 Available",
                  description: "Ask questions anytime, anywhere - we're always here"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Q&A Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <QuestionAnswer />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AskAI. Powered by advanced artificial intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;