import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import Screenshots from "@/components/Screenshots";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <HeroSection />
      <GameFeatures />
      <Screenshots />
    </div>
  );
};

export default Index;
