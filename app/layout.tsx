import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Providers from "@/components/providers";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SITE } from "@/lib/data";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://sifat-me.vercel.app";

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
    "Sifat",
    "Sifat Shams",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Sifat Coder",
    "Node.js Site",
    "Web Developer",
    "Bangladesh Developer",
    "Web Developer Portfolio",
    "Software Engineer Bangladesh",
  ],
  authors: [{ name: SITE.name, url: SITE.github }],
  creator: SITE.name,
  publisher: SITE.name,
  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Full stack web developer building scalable, modern and high-performance web applications.",
    siteName: `${SITE.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "Full stack web developer building scalable, modern and high-performance web applications.",
    images: ["/og-image.png"],
    creator: "@sifatshams",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: siteUrl,
    jobTitle: SITE.role,
    sameAs: [SITE.github],
    knowsAbout: [
      "Web Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
    ],
  };

  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* schema injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <CursorFollower />
        <Navbar />
        <Providers>
          <main>{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
