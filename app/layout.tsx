import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { LoadingScreen } from "@/components/ui/loading-screen";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://sifatshams.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Sifat Bin Anwar is a full stack web developer from Bangladesh building scalable, modern and high-performance web applications with clean architecture and exceptional user experience.",
  keywords: [
    "Sifat Bin Anwar",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Bangladesh Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: SITE.name, url: SITE.github }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Full stack web developer building scalable, modern and high-performance web applications.",
    siteName: `${SITE.name} Portfolio`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Full stack web developer building scalable, modern and high-performance web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
