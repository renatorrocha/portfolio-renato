import MyProfilePic from "@/assets/my-pic.jpg";
import {
  CodeIcon,
  LightningBoltIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import SoftSkillTag from "./soft-skill-tag";

export default function AboutMe() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                About Me
              </h2>

              <p className="text-muted-foreground md:text-lg">
                Hi, I&apos;m Renato Rocha, a passionate frontend engineer with a
                keen eye for design and a love for crafting beautiful,
                user-friendly web experiences. With almost 2 years of
                experience, I&apos;ve honed my skills in modern web
                technologies.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <SoftSkillTag
                  TagIcon={CodeIcon}
                  tagName="Frontend Development"
                />

                <SoftSkillTag
                  TagIcon={MagicWandIcon}
                  tagName="Problem Solving"
                />

                <SoftSkillTag
                  TagIcon={LightningBoltIcon}
                  tagName="Proactivity"
                />
              </div>
            </div>
          </div>

          <figure className="flex items-center justify-center">
            <Image
              src={MyProfilePic}
              alt="Renato's picture"
              width={400}
              height={400}
              className="max-w-full rounded-lg object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
