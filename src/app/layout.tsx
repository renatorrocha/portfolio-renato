import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themes-provider";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <nav className="flex flex-col items-center border-b p-5">
            <div className="w-full max-w-6xl">
              <Header />
            </div>
          </nav>

          <main className="flex flex-col items-center">
            <div className="w-full max-w-6xl">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
