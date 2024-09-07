import { BLUR_FADE_DELAY, DATA } from "@/lib/constants";
import BlurFade from "../blur-fade";
import { ResumeCard } from "../resume-card";

export default function EducationSection() {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.institution}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.institution}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.institution}
              title={education.institution}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
