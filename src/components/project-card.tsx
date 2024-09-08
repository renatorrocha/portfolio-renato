import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Markdown from "react-markdown";
import { Badge } from "./ui/badge";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

interface IProjectCard {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  image,
  video,
  links,
  className,
}: IProjectCard) {
  return (
    <Card
      className={
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <Markdown className="prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  variant="outline"
                  className="flex gap-1 px-2 py-1 text-[10px]"
                >
                  {link.type === "Website" ? (
                    <GlobeIcon className="size-4" />
                  ) : (
                    <GitHubLogoIcon className="size-4" />
                  )}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
