import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surewin-ai-portfolio.vercel.app"),
  title: {
    default: "Portfolio & Resume Hub | Sherwin",
    template: "%s",
  },
  description:
    "Technical Product Manager portfolio focused on rapid prototyping, AI-native workflows, and hands-on product execution.",
  openGraph: {
    title: "Portfolio & Resume Hub | Sherwin",
    description:
      "Technical Product Manager portfolio focused on rapid prototyping, AI-native workflows, and hands-on product execution.",
    url: "https://surewin-ai-portfolio.vercel.app",
    siteName: "Sherwin Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Resume Hub | Sherwin",
    description:
      "Technical Product Manager portfolio focused on rapid prototyping, AI-native workflows, and hands-on product execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
