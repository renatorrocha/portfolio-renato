import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/providers/themes-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routing } from "@/services/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "renato.dev | Portfolio",
  description:
    "Portfolio of Renato Rocha, a software developer specializing in Front-end and Mobile development with expertise in technologies like React, Next.js, and more.",
  keywords: [
    "Renato Rocha",
    "Front-end Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Developer",
  ],
  openGraph: {
    title: "renato.dev | Portfolio",
    description:
      "Explore the portfolio of Renato Rocha, a developer dedicated to creating amazing experiences on the web and mobile devices.",
    url: "https://renatodev.com",
    siteName: "renato.dev",
    images: [
      {
        url: "/project-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Renato Rocha - Developer",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          inter.className,
          "mx-auto min-h-screen max-w-2xl overflow-x-hidden bg-background px-6 py-12 font-sans antialiased sm:py-16",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
