import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <AboutMe />

      <Skills />
      
      <Projects />
    </main>
  );
}
