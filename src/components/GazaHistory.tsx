import historyImage from "@/assets/gaza-history.jpg";

export const GazaHistory = () => {
  return (
    <section id="gaza-history" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16 text-center">
          Gaza History
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Gaza, one of the oldest cities in the world, has been a crossroads of civilizations for millennia. 
              From ancient Canaanites to Roman conquerors, from Islamic golden ages to Ottoman rule, Gaza has 
              witnessed the rise and fall of empires.
            </p>
            
            <p className="text-lg leading-relaxed">
              Its strategic location on the Mediterranean coast made it a vital trading hub, connecting Africa, 
              Asia, and Europe. The city flourished with bustling markets, grand mosques, and a rich cultural 
              tapestry woven by generations of poets, scholars, and artisans.
            </p>
            
            <p className="text-lg leading-relaxed">
              In modern times, Gaza became home to hundreds of thousands of Palestinian refugees displaced in 1948. 
              Despite decades of conflict and blockade, the spirit of its people remained unbroken. Through wars 
              and hardships, Gaza stood as a symbol of resistance and steadfastness.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={historyImage} 
              alt="Historical Gaza" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <p className="text-xl text-center text-foreground/90 leading-relaxed">
            Today, Gaza has become a global symbol of steadfastness—a testament to the resilience of a people 
            who refuse to be forgotten, despite living under one of the longest and most brutal sieges in modern history.
          </p>
        </div>
      </div>
    </section>
  );
};
