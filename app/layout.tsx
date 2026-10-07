import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    { path: "./fonts/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Roboto-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const deploymentUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: "Tran Ngoc Ha | Structural BIM Lead | BIM Coordinator",
  description:
    "Portfolio of Tran Ngoc Ha, a Structural BIM Lead and BIM Coordinator delivering LOD 300-350 Revit models for high-rise residential projects, with in-house Revit automation tools.",
  keywords: [
    "Tran Ngoc Ha",
    "BIM Engineer",
    "Structural BIM Lead",
    "BIM Coordinator",
    "Structural BIM Coordination",
    "BIM Team Leadership",
    "BIM Standards",
    "Revit",
    "Navisworks",
    "BIM Coordination",
    "Construction Documentation",
  ],
  authors: [{ name: "Tran Ngoc Ha" }],
  creator: "Tran Ngoc Ha",
  openGraph: {
    title: "Tran Ngoc Ha | Structural BIM Lead | BIM Coordinator",
    description:
      "Portfolio showcasing structural BIM leadership, coordination, standards, model management, and project delivery experience.",
    type: "website",
    images: [
      {
        url: "/og-v2.png",
        width: 1200,
        height: 630,
        alt: "Tran Ngoc Ha - Structural BIM Lead and BIM Coordinator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Ngoc Ha | Structural BIM Lead | BIM Coordinator",
    description:
      "Structural BIM leadership, coordination, standards, model management, and project delivery portfolio.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
