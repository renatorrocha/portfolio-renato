import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection />

      <AboutSection />
    </main>
  );
}
