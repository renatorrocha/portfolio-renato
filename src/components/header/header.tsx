import ToggleTheme from "../theme-toggle";
import { GithubProfileUrl, LinkedInProfileUrl } from "@/lib/constants";
import { Separator } from "../ui/separator";
import NavLink from "./nav-link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <nav>
        <p className="text-xl font-semibold">
          Renato<span className="font-bold text-primary">.dev</span>
        </p>
      </nav>

      <nav className="flex h-6 items-center gap-2">
        <div className="flex gap-2">
          <NavLink url={GithubProfileUrl}>
            <GitHubLogoIcon />
            <p className="hidden md:inline-block">Github</p>
          </NavLink>

          <NavLink url={LinkedInProfileUrl}>
            <LinkedInLogoIcon />
            <p className="hidden md:inline-block">LinkedIn</p>
          </NavLink>
        </div>

        <Separator orientation="vertical" className="mx-2" />

        <ToggleTheme />
      </nav>
    </header>
  );
}
