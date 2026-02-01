import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://darren-headley-personal-site.vercel.app"),
  title: "Darren Headley | Technology Services",
  description:
    "Darren Headley — Director of Information Technology Services at COSTAATT. AI-driven transformation, cybersecurity operations, and workflow automation.",
  alternates: {
    canonical: "https://darren-headley-personal-site.vercel.app/",
  },
  openGraph: {
    title: "Darren Headley | Technology Services",
    description:
      "Director of Information Technology Services at COSTAATT. AI-driven transformation, cybersecurity operations, and workflow automation.",
    url: "https://darren-headley-personal-site.vercel.app/",
    type: "website",
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
      </body>
    </html>
  );
}
