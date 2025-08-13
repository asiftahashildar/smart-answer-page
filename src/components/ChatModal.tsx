import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import QuestionAnswer from "@/components/QuestionAnswer";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-foreground">
              Ask Sumaiyya Anything
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            Have questions about my experience, skills, or projects? Ask away!
          </p>
        </DialogHeader>
        <div className="p-6 pt-4 overflow-y-auto max-h-[calc(90vh-120px)]">
          <QuestionAnswer />
        </div>
      </DialogContent>
    </Dialog>
  );
}