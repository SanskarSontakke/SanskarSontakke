import type { Metadata } from "next";
import { Arimo, Geist_Mono } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanskar Sontakke",
  description:
    "Full-stack developer & hardware tinkerer building across web, mobile, desktop, and embedded platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${arimo.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {children}
      </body>
    </html>
  );
}
