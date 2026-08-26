import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/editor/editor-shell";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { site } from "@/data/site";

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const themeScript = `(() => { try { const saved = localStorage.getItem("okoye-theme"); const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.dataset.theme = dark ? "dark" : "light"; } catch { document.documentElement.dataset.theme = "light"; } })();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: "Okoye’s Log",
  title: {
    default: "Okoye’s Log — Technical Notes and Project Stories",
    template: "%s | Okoye’s Log",
  },
  description:
    "Technical notes, project write-ups, and lessons from building software by David Okoye.",
  keywords: [
    "software engineering",
    "web development",
    "technical writing",
    "projects",
    "David Okoye",
  ],
  authors: [{ name: "David Okoye", url: "https://okoyedavid.com" }],
  creator: "David Okoye",
  publisher: "Okoye’s Log",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Okoye’s Log",
    title: "Okoye’s Log — Technical Notes and Project Stories",
    description:
      "Technical notes, project write-ups, and lessons from building software by David Okoye.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Okoye’s Log — Technical Notes and Project Stories",
    description:
      "Technical notes, project write-ups, and lessons from building software by David Okoye.",
  },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
