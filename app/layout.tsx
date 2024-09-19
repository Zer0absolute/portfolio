import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {cn} from "@/lib/utils";
import { Anek_Telugu } from '@next/font/google';

const anekTelugu = Anek_Telugu({
    subsets: ['latin'], // ou 'telugu' si vous avez besoin du script en telugu
    variable: '--font-caption',
});

export const metadata: Metadata = {
  title: "Maël Colomé · Software Engineer",
  description: "Portfolio Maël Colomé · Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full"}>
      <body
        className={cn(GeistSans.variable,GeistMono.variable, anekTelugu.variable, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
