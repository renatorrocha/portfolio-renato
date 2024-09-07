import React from "react";
import BlurFadeText from "../blur-fade-text";
import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import BlurFade from "../blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-start sm:gap-2">
          <div className="flex flex-1 flex-col space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />

            <BlurFadeText
              className="max-w-[600px] text-secondary md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-36 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
