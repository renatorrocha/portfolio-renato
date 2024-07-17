import { Skill } from "@/types";

export default function CategoryContainer({
  categoryName,
  categorySkills,
}: {
  categorySkills: Skill[];
  categoryName: string;
}) {
  return (
    <div className="group/category grid gap-4">
      <p className="text-center text-xl font-bold transition-all group-hover/category:text-primary">
        {categoryName}
      </p>

      <div className="grid h-[300px] w-[340px] grid-cols-3 items-center gap-4 rounded-lg border-2 border-border p-4 transition-all group-hover/category:border-primary group-hover/category:bg-muted">
        {categorySkills.map((Skill) => (
          <div
            key={Skill.name}
            className="group/icon flex flex-col items-center justify-center gap-2"
          >
            <figure className="rounded-full bg-secondary p-3 transition-all group-hover/icon:scale-110 group-hover/icon:bg-primary">
              <Skill.icon className="text-secondary-foreground group-hover/icon:text-secondary" />
            </figure>

            <span className="truncate text-center text-sm font-medium transition-all group-hover/icon:font-bold">
              {Skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
