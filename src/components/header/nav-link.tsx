import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function NavLink({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={url}
      className={buttonVariants({ className: "gap-1", variant: "outline" })}
    >
      {children}
    </Link>
  );
}
