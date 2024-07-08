import { IconProps } from "@radix-ui/react-icons/dist/types";

export default function SoftSkillTag({
  tagName,
  TagIcon,
}: {
  tagName: string;
  TagIcon: React.ComponentType<IconProps>;
}) {
  return (
    <div className="flex items-center gap-2">
      <TagIcon className="h-4 w-4 text-primary" />
      <span className="text-muted-foreground">{tagName}</span>
    </div>
  );
}
