export const FinalVideo = () => {
  return (
    <section
      id="final-video"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 text-center">
          Voices Under the Rubble
        </h2>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-card rounded-lg overflow-hidden shadow-2xl border border-border mb-8">
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full h-full"
            poster="/path-to-thumbnail.jpg"
          >
            {/* 👇 Replace this path with your public video path */}
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption */}
        <div className="text-center space-y-6">
          <p className="text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
            These are not just statistics. They are mothers, fathers, children, and dreamers.
            They are journalists who risked everything for truth, doctors who stayed when others fled,
            and ordinary people who showed extraordinary courage.
          </p>

          <p className="text-3xl font-serif italic text-accent">
            May their stories never be buried.
          </p>
        </div>

        {/* Memorial */}
        <div className="mt-16 p-8 bg-card/50 rounded-lg border border-border backdrop-blur-sm">
          <p className="text-center text-muted-foreground text-sm">
            This website is dedicated to preserving the memory and dignity of those who lived,
            resisted, and died under the rubble. Their voices will not be silenced.
          </p>
        </div>
      </div>
    </section>
  );
};
