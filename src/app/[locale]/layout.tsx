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
  title: "Renato.dev",
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
