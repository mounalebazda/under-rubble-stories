import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  section: string;
}

const timelineItems: TimelineItem[] = [
  { id: "gaza-history", title: "Gaza History", section: "gaza-history" },
  { id: "stories-somod", title: "Stories of Ostol Somod", section: "stories-somod" },
  { id: "journalist-saleh", title: "The Death of Journalist Saleh", section: "journalist-saleh" },
  { id: "sinwar", title: "The Death of Sinwar", section: "sinwar" },
  { id: "alquds-mosque", title: "Al-Quds Mosque", section: "alquds-mosque" },
  { id: "final-video", title: "Final Video", section: "final-video" },
];

export const Timeline = () => {
  const [activeSection, setActiveSection] = useState("gaza-history");

  useEffect(() => {
    const handleScroll = () => {
      const sections = timelineItems.map(item => document.getElementById(item.section));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(timelineItems[i].section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
        
        {/* Timeline items */}
        <ul className="space-y-8">
          {timelineItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.section)}
                className={cn(
                  "flex items-center gap-4 transition-all duration-300 group",
                  "hover:translate-x-1"
                )}
                aria-label={`Navigate to ${item.title}`}
              >
                {/* Circle */}
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 transition-all duration-300",
                    activeSection === item.section
                      ? "bg-accent border-accent scale-125"
                      : "bg-background border-muted-foreground group-hover:border-accent"
                  )}
                />
                
                {/* Label */}
                <span
                  className={cn(
                    "text-sm transition-all duration-300 whitespace-nowrap",
                    activeSection === item.section
                      ? "text-accent font-medium opacity-100"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  )}
                >
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
