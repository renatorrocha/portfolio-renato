import React from "react";
import BlurFade from "../blur-fade";
import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import { ResumeCard } from "../resume-card";
import { useTranslations } from "next-intl";

export default function WorkSection() {
  const t = useTranslations("Work");
  const keys = [
    "company",
    "href",
    "badges",
    "logoUrl",
    "start",
    "end",
    "title",
    "description",
  ] as const;  

  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Professional Experience</h2>
        </BlurFade>

        {t("experiences", { returnObjects: true }).map((work, i) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? t("present")}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
