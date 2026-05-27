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
  title: "Darren Richard Kern Headley | Executive Technology Leadership",
  description:
    "Director of Information Technology and Digital Transformation. Executive leadership in enterprise IT operations, AI adoption, cybersecurity governance, and institutional modernization.",
  alternates: {
    canonical: "https://darren-headley-personal-site.vercel.app/",
  },
  openGraph: {
    title: "Darren Richard Kern Headley | Executive Technology Leadership",
    description:
      "Director of Information Technology and Digital Transformation with 20+ years of enterprise technology leadership experience.",
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
