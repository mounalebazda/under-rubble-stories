import { Timeline } from "@/components/Timeline";
import { HeroSection } from "@/components/HeroSection";
import { GazaHistory } from "@/components/GazaHistory";
import { StoriesSomod } from "@/components/StoriesSomod";
import { JournalistSaleh } from "@/components/JournalistSaleh";
import { Sinwar } from "@/components/Sinwar";
import { AlQudsMosque } from "@/components/AlQudsMosque";
import { FinalVideo } from "@/components/FinalVideo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Timeline />
      <HeroSection />
      <GazaHistory />
      <StoriesSomod />
      <JournalistSaleh />
      <Sinwar />
      <AlQudsMosque />
      <FinalVideo />
      <Footer />
    </div>
  );
};

export default Index;
