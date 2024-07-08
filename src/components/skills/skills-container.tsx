import { IconProps } from "@radix-ui/react-icons/dist/types";

export default function SkillsContainer({
  skillName,
  SkillIcon,
}: {
  skillName: string;
  SkillIcon: React.ComponentType<IconProps>;
}) {
  return (
    <div className="group/icon flex flex-col items-center gap-2">
      <figure className="rounded-full bg-muted p-3 transition-all group-hover/icon:scale-110 group-hover/icon:bg-primary">
        <SkillIcon className="group-hover/icon:text-secondary" />
      </figure>

      <span className="text-center text-sm font-medium transition-all group-hover/icon:font-bold">
        {skillName}
      </span>
    </div>
  );
}
