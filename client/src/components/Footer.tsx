import { Github, Linkedin, Mail, Download, Heart } from "lucide-react";
import materIcon from "@assets/favicon-96x96_1764259277503.png";

const RESUME_LINK = "https://drive.google.com/file/d/1hUHN7DC2U2nQwH4ap8lZ7af6Uh5c1nWe/view?usp=sharing";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/gurdeep013", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gurdeepsinghere/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gurdeepsinghere@gmail.com", label: "Email" },
];

const resources = [
  { label: "Resume", href: RESUME_LINK, icon: Download },
  { label: "GitHub Profile", href: "https://github.com/gurdeep013", icon: Github },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t relative overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rust via-teal to-rust" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("#hero")}>
              <img src={materIcon} alt="Mater" className="h-10 w-10 group-hover:rotate-12 transition-transform" />
              <span className="font-heading text-2xl group-hover:text-rust transition-colors">GURDEEP SINGH</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Data-driven insights, human-centered solutions.
            </p>
            <p className="text-xs text-muted-foreground">
              Turning complex data into actionable stories.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-rust transition-colors hover:translate-x-1 inline-block"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">CONNECT</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-rust/10 hover:text-rust transition-all hover:scale-110 hover:rotate-6"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-rust transition-colors group"
                    data-testid={`footer-resource-${resource.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <resource.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Gurdeep Singh © {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-mcqueen fill-mcqueen animate-pulse" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
