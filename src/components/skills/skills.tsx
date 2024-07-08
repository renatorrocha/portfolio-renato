import { GitHubLogoIcon } from "@radix-ui/react-icons";
import SkillsContainer from "./skills-container";
import CategoryContainer from "./category-container";
import { MySkills } from "@/lib/constants";

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Proficient in a wide range of frontend technologies and tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
