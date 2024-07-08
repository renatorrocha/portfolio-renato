export default function CategoryContainer({
  children,
  categoryName,
}: {
  children: React.ReactNode;
  categoryName: string;
}) {
  return (
    <div className="group/category grid gap-4">
      <p className="text-center text-lg font-semibold transition-all group-hover/category:text-primary">
        {categoryName}
      </p>

      <div className="grid grid-cols-3 gap-4 rounded-lg border border-primary-foreground p-4">
        {children}
      </div>
    </div>
  );
}
