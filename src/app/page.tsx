import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection />
      
      <AboutSection />
    </main>
  );
}
