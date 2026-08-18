import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { resume, siteUrl } from "@/data/resume";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const { profile } = resume;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-zinc-900">
        {children}
      </body>
    </html>
  );
}
