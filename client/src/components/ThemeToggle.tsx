import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isScrolled?: boolean;
}

export default function ThemeToggle({ isScrolled = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full transition-all duration-300 ${
        isScrolled 
          ? "bg-muted hover:bg-muted/80 text-foreground" 
          : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
      }`}
      data-testid="button-theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className={`h-5 w-5 transition-transform hover:rotate-12 ${isScrolled ? "text-amber-500" : "text-yellow-400"}`} />
      ) : (
        <Moon className={`h-5 w-5 transition-transform hover:-rotate-12 ${isScrolled ? "text-foreground" : "text-white"}`} />
      )}
    </Button>
  );
}
