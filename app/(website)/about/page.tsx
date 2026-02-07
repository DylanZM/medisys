import { AboutHero } from "./_components/AboutHero";
import { StorySection } from "./_components/StorySection";
import { MissionVision } from "./_components/MissionVision";
import { Footer } from "@/components/home/footer/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <StorySection />
      <MissionVision />
      <Footer />
    </main>
  );
}
