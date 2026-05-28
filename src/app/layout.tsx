import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darren-headley-personal-site.vercel.app"),
  title: "Darren Headley | AI & Digital Transformation Executive",
  description:
    "Executive AI, cybersecurity, and digital transformation leader driving enterprise technology strategy, operational modernization, and innovation at institutional scale.",
  keywords: [
    "Darren Headley",
    "AI executive",
    "digital transformation executive",
    "cybersecurity governance",
    "enterprise technology strategy",
    "CIO leadership",
    "Trinidad and Tobago technology leader",
  ],
  alternates: {
    canonical: "https://darren-headley-personal-site.vercel.app/",
  },
  openGraph: {
    title: "Darren Headley | AI & Digital Transformation Executive",
    description:
      "AI, cybersecurity, and enterprise modernization leadership with 20+ years of technology transformation experience.",
    url: "https://darren-headley-personal-site.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://darren-headley-personal-site.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Darren Headley - AI and Digital Transformation Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darren Headley | AI & Digital Transformation Executive",
    description:
      "Executive AI, cybersecurity, and digital transformation leadership for enterprise modernization.",
    images: ["https://darren-headley-personal-site.vercel.app/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
