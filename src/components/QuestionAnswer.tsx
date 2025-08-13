import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Sparkles, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SAMPLE_QUESTIONS = [
  "What is artificial intelligence?",
  "How do I learn programming?",
  "What are the benefits of meditation?",
  "How does blockchain technology work?"
];

const SAMPLE_ANSWERS = {
  "What is artificial intelligence?": "Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of performing tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding. AI systems can analyze data, recognize patterns, and make decisions with minimal human intervention.",
  "How do I learn programming?": "Learning programming is a journey that requires patience and practice. Start with a beginner-friendly language like Python or JavaScript. Use online resources like freeCodeCamp, Codecademy, or YouTube tutorials. Practice by building small projects, join coding communities, and don't be afraid to make mistakes - they're part of the learning process!",
  "What are the benefits of meditation?": "Meditation offers numerous benefits for both mental and physical health. It can reduce stress and anxiety, improve focus and concentration, enhance emotional regulation, boost immune function, and promote better sleep. Regular practice can also increase self-awareness and cultivate a sense of inner peace and well-being.",
  "How does blockchain technology work?": "Blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) linked and secured using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. This creates an immutable and transparent record that's maintained across multiple computers, making it secure and decentralized."
};

export default function QuestionAnswer() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('https://ashu007.app.n8n.cloud/webhook-test/3a63de4d-5df3-45b8-a026-1ddbe505b523', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.output || data.message || "I received your question and processed it successfully!");
      
      toast({
        title: "Answer received!",
        description: "Your question has been processed successfully.",
      });
    } catch (error) {
      console.error('Error sending question:', error);
      setAnswer("Sorry, I encountered an error while processing your question. Please try again later.");
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSampleQuestion = (sampleQuestion: string) => {
    setQuestion(sampleQuestion);
    setAnswer("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Question Input Section */}
      <Card className="p-8 bg-question-bg border-border shadow-subtle">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="question" className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Ask your question
            </label>
            <Textarea
              id="question"
              placeholder="What would you like to know? Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[120px] bg-background border-border text-foreground placeholder:text-muted-foreground resize-none text-lg"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={!question.trim() || isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 h-12 shadow-primary"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Generating answer...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Get Answer
              </div>
            )}
          </Button>
        </form>
      </Card>

      {/* Sample Questions */}
      {!answer && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-answer-accent" />
            Try these sample questions:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SAMPLE_QUESTIONS.map((sampleQuestion, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleSampleQuestion(sampleQuestion)}
                className="text-left justify-start p-4 h-auto bg-muted/50 border-border hover:bg-muted text-foreground hover:text-foreground transition-all duration-200"
              >
                {sampleQuestion}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Answer Section */}
      {answer && (
        <Card className="p-8 bg-answer-bg border-border shadow-subtle animate-slide-up">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-answer-accent" />
              Answer
            </h3>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg">
                {answer}
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setQuestion("");
                setAnswer("");
              }}
              className="mt-6 bg-muted/50 border-border hover:bg-muted text-foreground"
            >
              Ask another question
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}