import heroImage from "@/assets/gaza-hero.jpg";
import palestinianFlag from "@/assets/palestinian-flag.png";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
          Under the Rubble
        </h1>
        <img 
          src={palestinianFlag} 
          alt="Palestinian flag" 
          className="w-20 h-12 object-cover rounded mb-6"
        />
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
          Stories of pain, resilience, and truth from Gaza
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
