import ToggleTheme from "./toggle-themes";
import { GithubProfileUrl, LinkedInProfileUrl } from "@/lib/constants";
import { Separator } from "../ui/separator";
import NavLink from "./nav-link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <nav>
        <p className="font-semibold">
          Renato<span className="text-primary font-bold">.dev</span>
        </p>
      </nav>

      <nav className="flex h-6 items-center gap-2">
        <div className="flex gap-2">
          <NavLink url={GithubProfileUrl}>
            <GitHubLogoIcon />
            <p>Github</p>
          </NavLink>

          <NavLink url={LinkedInProfileUrl}>
            <LinkedInLogoIcon />
            <p>LinkedIn</p>
          </NavLink>
        </div>

        <Separator orientation="vertical" className="mx-2" />

        <ToggleTheme />
      </nav>
    </header>
  );
}
