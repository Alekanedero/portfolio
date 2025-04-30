import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "./Providers";
import { PropsWithChildren } from "react";
import { SiteConfig } from "@/lib/site-config";
import Head from "next/head";

const anekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          anekTelugu.variable,
          "bg-background text-foreground h-full font-sans"
        )}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
