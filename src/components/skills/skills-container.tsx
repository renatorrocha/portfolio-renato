import { IconProps } from "@radix-ui/react-icons/dist/types";

export default function SkillsContainer({
  skillName,
  SkillIcon,
}: {
  skillName: string;
  SkillIcon: React.ComponentType<IconProps>;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-full bg-muted p-3">
        <SkillIcon />
      </div>

      <span className="text-sm font-medium">{skillName}</span>
    </div>
  );
}
