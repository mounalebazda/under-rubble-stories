import mosqueImage from "@/assets/alquds-mosque.jpg";

export const AlQudsMosque = () => {
  return (
    <section id="alquds-mosque" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16 text-center">
          Al-Quds Mosque
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Al-Aqsa Mosque, known as Al-Quds, stands in Jerusalem as the third holiest site in Islam. 
              For centuries, it has been a beacon of faith, a place where prophets walked and prayers echoed 
              through time. Its golden dome has witnessed empires rise and fall, yet it remains—a testament 
              to endurance and devotion.
            </p>

            <p className="text-lg leading-relaxed">
              For Palestinians, Al-Quds represents more than religious significance—it is the heart of their 
              identity, their claim to history, their connection to the land. Every Friday, thousands gather 
              to pray, despite checkpoints, despite restrictions, despite the risk.
            </p>

            <p className="text-lg leading-relaxed">
              The mosque has survived conquests, fires, earthquakes, and raids. Through crusades and conflicts, 
              its foundations remained unshaken. Today, it stands under siege of a different kind—political 
              tensions, settlement encroachment, and the constant threat of escalation.
            </p>

            <p className="text-lg leading-relaxed">
              Yet every dawn, the call to prayer still rings out. Pilgrims still come, touching the ancient 
              stones with reverence. In Gaza, in Ramallah, in refugee camps scattered across the world, Muslims 
              turn toward Al-Quds—not just in prayer, but in hope.
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={mosqueImage} 
              alt="Al-Quds Mosque" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <p className="text-2xl text-center text-accent font-serif italic leading-relaxed">
            "Al-Quds remains a center of hope and faith, a symbol that no matter how great the siege, 
            the spirit of a people cannot be conquered."
          </p>
        </div>
      </div>
    </section>
  );
};
