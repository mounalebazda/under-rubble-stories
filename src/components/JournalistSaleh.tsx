import journalistImage from "@/assets/journalist-tribute.jpg";

export const JournalistSaleh = () => {
  return (
    <section id="journalist-saleh" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-16 text-center">
          The Death of Journalist Saleh
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={journalistImage} 
              alt="Journalist tribute" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              Saleh Al-Najjar was not just a journalist—he was a witness. His camera captured what the world 
              tried to ignore: the lifeless bodies pulled from rubble, the children screaming for parents who 
              would never answer, the hospitals overwhelmed with the wounded and the dying.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              On a cold October morning, while documenting an airstrike's aftermath, Saleh himself became a victim. 
              A targeted strike ended his life, but not his mission. His final broadcast, uploaded posthumously, 
              showed the truth: a destroyed ambulance, a child's shoe in the debris, and his voice, steady despite 
              the chaos—"The world must see this."
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              Over 100 journalists have been killed in Gaza, many wearing press vests, clearly marked. They died 
              doing what Saleh did: refusing to let the story be buried with the bodies.
            </p>

            {/* Quote */}
            <div className="relative mt-12 p-8 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-2xl font-serif italic text-accent text-center">
                "He died telling the world what others tried to hide."
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 mt-8">
              His lens may be shattered, but the images he captured remain—indelible proof that truth, no matter 
              how inconvenient, cannot be silenced forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
