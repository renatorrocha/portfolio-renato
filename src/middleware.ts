import createMiddleware from "next-intl/middleware";
import { routing } from "./services/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
