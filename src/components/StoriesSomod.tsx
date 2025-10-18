import somodImage from "@/assets/somod-children.jpg";

export const StoriesSomod = () => {
  return (
    <section 
      id="stories-somod" 
      className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16 flex items-center"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${somodImage})` }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-12 text-center">
          Stories of Ostol Somod
        </h2>

        <div className="space-y-8 text-lg leading-relaxed">
          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-accent mb-4">The Boy Who Drew Hope</h3>
            <p className="text-foreground/90">
              Amid the rubble, 9-year-old Ahmed found a piece of charcoal. While others searched for food, 
              he drew on crumbled walls—flowers, birds, and smiling faces. "The bombs took our home," he said, 
              "but they can't take our dreams." His drawings became a symbol of defiance, reminding the world 
              that even in darkness, children refuse to let hope die.
            </p>
          </div>

          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-accent mb-4">The Grandmother's Olive Tree</h3>
            <p className="text-foreground/90">
              Um Mahmoud, 82, refused to leave her land despite the bombardment. Every morning, she watered 
              her olive tree—the last survivor of her family's ancient grove. "This tree saw my father, 
              my grandfather, and their grandfathers," she whispered. "As long as it stands, we stand." 
              Her somod was not just survival—it was an act of memory, of roots too deep to sever.
            </p>
          </div>

          <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-accent mb-4">The Teacher Under the Tent</h3>
            <p className="text-foreground/90">
              When the school was destroyed, Ms. Layla didn't stop teaching. She gathered children under a 
              makeshift tent and continued their lessons. "Education is resistance," she said, her voice steady 
              despite the fear in her eyes. "Every child who learns to read is a victory they cannot take from us." 
              Her students, displaced and traumatized, still came—because in Gaza, learning is an act of somod.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-serif italic text-primary">
            "Somod is not silence. It is the loudest scream against injustice."
          </p>
        </div>
      </div>
    </section>
  );
};
