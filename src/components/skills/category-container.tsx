export default function CategoryContainer({
  children,
  categoryName,
}: {
  children: React.ReactNode;
  categoryName: string;
}) {
  return (
    <div className="group/category grid gap-4">
      <p className="text-center text-xl font-bold transition-all group-hover/category:text-primary">
        {categoryName}
      </p>

      <div className="grid h-[300px] w-[340px] grid-cols-3 items-center gap-4 rounded-lg border-2 border-border p-4 transition-all group-hover/category:border-primary group-hover/category:bg-muted">
        {children}
      </div>
    </div>
  );
}
