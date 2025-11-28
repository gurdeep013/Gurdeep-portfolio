import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MapPin, FileText } from "lucide-react";

const RESUME_LINK = "https://drive.google.com/file/d/1hUHN7DC2U2nQwH4ap8lZ7af6Uh5c1nWe/view?usp=sharing";

interface ContactCard {
  id: string;
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  copyable?: boolean;
}

const contactCards: ContactCard[] = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "gurdeepsinghere@gmail.com",
    href: "mailto:gurdeepsinghere@gmail.com",
    copyable: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+91 95578346089",
    href: "tel:+919557834608",
    copyable: true,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/gurdeepsinghere/",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "View My Code",
    href: "https://github.com/gurdeep013",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (card: ContactCard) => {
    if (!card.copyable) return;
    
    try {
      await navigator.clipboard.writeText(card.value);
      setCopiedId(card.id);
      toast({
        title: "Copied!",
        description: `${card.label} copied to clipboard`,
      });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden" data-testid="section-contact">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-rust animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="text-teal font-medium tracking-wide uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground tracking-wide">
            LET'S CONNECT
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactCards.map((card, index) => (
              <Card 
                key={card.id} 
                className="p-6 hover-elevate cursor-pointer group"
                onClick={() => card.copyable ? handleCopy(card) : window.open(card.href, "_blank")}
                data-testid={`contact-${card.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 rounded-full bg-teal/10 group-hover:bg-teal/20 transition-colors">
                    <card.icon className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{card.label}</p>
                    <p className="font-medium text-sm truncate max-w-[150px]">{card.value}</p>
                  </div>
                  {card.copyable && (
                    <div className="h-4">
                      {copiedId === card.id ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-rust hover:bg-rust/90 text-white px-8 group"
              asChild
              data-testid="button-send-message"
            >
              <a href="mailto:gurdeepsinghere@gmail.com">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Me a Message
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-teal text-teal hover:bg-teal/10 px-8"
              asChild
              data-testid="button-view-resume"
            >
              <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>

          <Card className="p-6 bg-gradient-to-br from-rust/10 to-teal/10 mt-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-rust" />
              <h4 className="font-semibold">Based in India</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to remote opportunities worldwide. Let's build something amazing together!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
