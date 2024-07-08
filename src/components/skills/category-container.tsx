export default function CategoryContainer({
  children,
  categoryName,
}: {
  children: React.ReactNode;
  categoryName: string;
}) {
  return (
    <div className="group/category grid min-h-[200px] gap-4">
      <p className="text-center text-xl font-bold transition-all group-hover/category:text-primary">
        {categoryName}
      </p>

      <div className="grid grid-cols-3 gap-4 rounded-lg border-2 border-border p-4 transition-all group-hover/category:border-primary group-hover/category:bg-muted">
        {children}
      </div>
    </div>
  );
}
