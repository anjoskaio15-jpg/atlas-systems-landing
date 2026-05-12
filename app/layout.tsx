import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlassystems.br"),
  title: {
    default: "Atlas Systems | Automações e Sistemas",
    template: "%s | Atlas Systems",
  },
  description:
    "Automações, sistemas, SaaS, landing pages e sistemas de agendamento para negócios venderem mais, organizarem processos e operarem melhor.",
  applicationName: "Atlas Systems",
  authors: [{ name: "Atlas Systems" }],
  creator: "Atlas Systems",
  publisher: "Atlas Systems",
  category: "technology",
  keywords: [
    "automações e sistemas",
    "landing pages para negócios",
    "sistemas de agendamento",
    "SaaS para negócios",
    "tecnologia para negócios",
    "sistemas sob medida",
    "automação para negócios locais",
    "Atlas Systems",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/brand/atlas-icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/brand/atlas-icon.png",
    apple: [
      {
        url: "/brand/atlas-icon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Atlas Systems",
    title: "Atlas Systems | Automações e Sistemas",
    description:
      "Sistemas, páginas e automações para negócios venderem mais e operarem melhor.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Atlas Systems - Sistemas, páginas e automações para negócios modernos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Systems | Automações e Sistemas",
    description:
      "Sistemas, páginas e automações para negócios venderem mais e operarem melhor.",
    images: [
      {
        url: "/twitter-image",
        alt: "Atlas Systems - Sistemas, páginas e automações para negócios modernos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
