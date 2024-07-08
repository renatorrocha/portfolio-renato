import MyProfilePic from "@/assets/my-pic.jpg";
import {
  CodeIcon,
  LightningBoltIcon,
  MagicWandIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start justify-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
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
                <div className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    Frontend Development
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MagicWandIcon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Problem Solving</span>
                </div>

                <div className="flex items-center gap-2">
                  <LightningBoltIcon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Proactivity</span>
                </div>
              </div>
            </div>
          </div>

          <figure className="flex items-center justify-center">
            <Image
              src={MyProfilePic}
              alt="Frontend Engineer"
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
