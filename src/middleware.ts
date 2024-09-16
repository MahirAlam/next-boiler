import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { AppConfig } from "./utils/configs";

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});
// eslint-disable-next-line import/no-default-export -- middleware has to be default export
export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|monitoring).*)", "/", "/(api)(.*)"], // Also exclude tunnelRoute used in Sentry from the matcher
};
