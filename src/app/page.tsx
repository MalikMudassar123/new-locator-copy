import HeroSection from "@/components/HeroSection";
import RoadSection from "@/components/RoadSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <HeroSection />

      {/* Road needs elevated z-index to layer over hero bottom edge */}
      <div style={{ position: 'relative', zIndex: 200 }}>
        <RoadSection />
      </div>
    </main>
  );
}
