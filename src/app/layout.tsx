import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivan Goranov | Front-end Developer & UI Specialist",
  description:
    "Front-end developer crafting exceptional web experiences with React, Next.js, and modern JavaScript. Award-winning programmer specializing in responsive, user-centered interfaces.",
  keywords: [
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "JavaScript Programmer",
    "Web Development",
    "UI/UX Design",
    "Portfolio",
    "Ivan Goranov",
    "Responsive Design",
    "Front-end Engineer",
    "Bulgarian Developer",
  ],
  authors: [{ name: "Ivan Goranov" }],
  creator: "Ivan Goranov",
  publisher: "Ivan Goranov",
  robots: "index, follow",
  openGraph: {
    title: "Ivan Goranov | Front-end Developer & UI Specialist",
    description:
      "Award-winning front-end developer specializing in modern web technologies. View my portfolio showcasing React, Next.js and TypeScript projects.",
    type: "website",
    locale: "en_US",
    url: "https://igoranov.com",
    siteName: "Ivan Goranov Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ivan Goranov Front-end Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Goranov | Front-end Developer",
    description: "Check out my portfolio of web development projects",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://igoranov.com",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ivan Goranov",
              "url": "https://igoranov.com",
              "image": "https://igoranov.com/icon.png",
              "sameAs": [
                "https://www.linkedin.com/in/ivan-goranov/",
                "https://github.com/IvanGoranov02",
                "https://www.instagram.com/ivgoranov/"
              ],
              "jobTitle": "Front-end Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "Web Development", "UI Design"]
            }
          `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans selection:bg-emerald-300/20"
        )}
      >
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
