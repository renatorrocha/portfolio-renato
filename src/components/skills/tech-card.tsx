import { TechnologyCategory } from "@/types/technology-category";

export default function TechCard({
  techCategory,
}: {
  techCategory: TechnologyCategory;
}) {
  return (
    <div className="relative z-20 h-full w-full space-y-4 overflow-hidden rounded-2xl border-2 border-muted-foreground bg-transparent p-4 transition-all">
      <p className="relative z-20 text-center text-xl font-bold transition-all">
        {techCategory.name}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {techCategory.skills.map(({ Icon, name }) => (
          <div
            key={name}
            className="group/icon flex flex-col items-center justify-center gap-2"
          >
            <figure className="rounded-full bg-primary-foreground p-3 transition-all group-hover/icon:scale-110 group-hover/icon:bg-primary dark:bg-secondary">
              <Icon className="text-secondary-foreground group-hover/icon:text-secondary" />
            </figure>

            <span className="truncate text-center text-sm font-medium transition-all group-hover/icon:font-bold group-hover/icon:text-primary">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
    // <div className="group/category relative z-50 grid h-full w-full gap-4">
    //   <p className="text-center text-xl font-bold transition-all group-hover/category:text-primary">
    //     {techCategory.name}
    //   </p>

    //   <div className="grid h-[300px] w-[340px] grid-cols-3 relative items-center gap-4 rounded-lg border-2 border-border p-4 transition-all group-hover/category:border-primary group-hover/category:bg-muted">
    //     {techCategory.skills.map(({ Icon, name }) => (
    //       <div
    //         key={name}
    //         className="group/icon flex flex-col items-center justify-center gap-2"
    //       >
    //         <figure className="rounded-full bg-secondary p-3 transition-all group-hover/icon:scale-110 group-hover/icon:bg-primary">
    //           <Icon className="text-secondary-foreground group-hover/icon:text-secondary" />
    //         </figure>

    //         <span className="truncate text-center text-sm font-medium transition-all group-hover/icon:font-bold">
    //           {name}
    //         </span>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
