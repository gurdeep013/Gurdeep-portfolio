import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MapPin } from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden" data-testid="section-contact">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-rust"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
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

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="font-heading text-2xl mb-6">SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="focus:ring-teal focus:border-teal"
                  data-testid="input-name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="focus:ring-teal focus:border-teal"
                  data-testid="input-email"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="resize-none focus:ring-teal focus:border-teal"
                  data-testid="input-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-rust hover:bg-rust/90"
                disabled={isSubmitting}
                data-testid="button-send-message"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card) => (
                <Card 
                  key={card.id} 
                  className="p-6 hover-elevate cursor-pointer group"
                  onClick={() => card.copyable ? handleCopy(card) : window.open(card.href, "_blank")}
                  data-testid={`contact-${card.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-teal/10 shrink-0">
                      <card.icon className="h-5 w-5 text-teal" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{card.label}</p>
                      <p className="font-medium truncate">{card.value}</p>
                    </div>
                    {card.copyable && (
                      <div className="shrink-0">
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

            <Card className="p-6 bg-gradient-to-br from-rust/10 to-teal/10">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-rust" />
                <h4 className="font-semibold">Based in India</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to remote opportunities worldwide. Let's build something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
