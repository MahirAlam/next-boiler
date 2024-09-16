import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { AppConfig } from "@/utils/configs";

// NextJS Boilerplate uses Crowdin as the localization software.
// As a developer, you only need to take care of the English (or another default language) version.
// Other languages are automatically generated and handled by Crowdin.

// The localisation files are synced with Crowdin using GitHub Actions.
// By default, there are 3 ways to sync the message files:
// 1. Automatically sync on push to the `main` branch
// 2. Run manually the workflow on GitHub Actions
// 3. Every 24 hours at 5am, the workflow will run automatically

// Using internationalization in Server Components
// eslint-disable-next-line import/no-default-export -- it works in this way
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) {
    notFound();
  }

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- it has a type
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
