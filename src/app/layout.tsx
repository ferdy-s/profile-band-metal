import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://profile-band-metal.vercel.app/";
const logoUrl = `${siteUrl}/logo.png`;
const ogImage = `${siteUrl}/pussy-destroyer.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Pussy Destroyer | Extreme Metal Band",
    template: "%s | Pussy Destroyer",
  },

  description:
    "Pussy Destroyer is an extreme metal band delivering brutal death metal, deathcore, and dark sonic violence.",

  keywords: [
    "metal band",
    "deathcore",
    "brutal death metal",
    "extreme metal",
    "band indonesia",
  ],

  authors: [{ name: "Pussy Destroyer" }],
  creator: "Pussy Destroyer",

  openGraph: {
    title: "Pussy Destroyer | Extreme Metal Band",
    description:
      "Extreme metal entity delivering sonic brutality and dark atmosphere.",
    url: siteUrl,
    siteName: "Pussy Destroyer",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Pussy Destroyer Band",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pussy Destroyer | Extreme Metal Band",
    description: "Extreme metal band delivering brutal sonic destruction.",
    images: [ogImage],
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD SCHEMA (ORGANIZATION) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Pussy Destroyer",
              url: siteUrl,
              logo: logoUrl,
              image: ogImage,
              description:
                "Extreme metal band delivering brutal death metal and dark sonic atmosphere.",
              genre: ["Deathcore", "Brutal Death Metal"],
              sameAs: [
                "https://instagram.com/",
                "https://youtube.com/",
                "https://spotify.com/",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
