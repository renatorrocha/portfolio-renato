import { BackgroundBeams } from "@/components/bg-beams";
import AboutSection from "@/components/sections/about";
import EducationSection from "@/components/sections/education";
import HeroSection from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";
import Head from 'next/head';

export default function Home() {
  return (
    <>
<Head>
  <title>Renato Dev</title>
  <meta
          name="description"
          content="Descrição clara e concisa sobre o conteúdo da página."
        />
</Head>

    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection />

      <BackgroundBeams />

      <AboutSection />

      <WorkSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />
    </main>
    </>
  );
}
