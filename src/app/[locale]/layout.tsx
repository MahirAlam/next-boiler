import "@/styles/global.css";

import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
// eslint-disable-next-line camelcase -- it is unstable so it can't be helped
import { unstable_setRequestLocale } from "next-intl/server";

import { AppConfig } from "@/utils/configs";

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

const RootLayout = (props: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
