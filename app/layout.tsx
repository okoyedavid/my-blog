import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/editor/editor-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "ThePost",
  title: {
    default: "ThePost — Montreal News, Culture and City Life",
    template: "%s | ThePost",
  },
  description:
    "Discover Montreal news, culture, business, events and city life through independent local journalism from ThePost.",
  keywords: [
    "Montreal",
    "Montreal news",
    "Montreal culture",
    "Montreal business",
    "local journalism",
  ],
  authors: [{ name: "ThePost Team" }],
  creator: "ThePost",
  publisher: "ThePost",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "ThePost",
    title: "ThePost — Montreal News, Culture and City Life",
    description:
      "Discover Montreal news, culture, business, events and city life through independent local journalism from ThePost.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThePost — Montreal News, Culture and City Life",
    description:
      "Discover Montreal news, culture, business, events and city life through independent local journalism from ThePost.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
