import { MySkills } from "@/lib/constants";
import TechContainer from "./tech-container";

export default function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Skills
            </h2>

            <p className="text-muted-foreground md:text-lg">
              Proficient in a wide range of frontend technologies and tools.
            </p>
          </div>

          <div className="mx-auto max-w-5xl px-8">
            <TechContainer techCategories={MySkills} />
          </div>
        </div>
      </div>
    </section>
  );
}
