export default function CategoryContainer({
  children,
  categoryName,
}: {
  children: React.ReactNode;
  categoryName: string;
}) {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold">{categoryName}</h3>
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </div>
  );
}
