import AboutMe from "@/components/about-me/about-me";
import Projects from '@/components/projects/projects';
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <AboutMe />

      <Skills />

      {/* <Projects /> */}
    </main>
  );
}
