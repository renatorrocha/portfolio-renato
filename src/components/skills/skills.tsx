import { GitHubLogoIcon } from "@radix-ui/react-icons";
import SkillsContainer from "./skills-container";
import CategoryContainer from "./category-container";
import { MySkills } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="py-12 md:py-16">
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

          <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MySkills.map((category) => (
              <CategoryContainer
                categoryName={category.name}
                key={category.name}
              >
                {category.skills.map((skill) => (
                  <SkillsContainer
                    key={skill.name}
                    SkillIcon={skill.icon}
                    skillName={skill.name}
                  />
                ))}
              </CategoryContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
