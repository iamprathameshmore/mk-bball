import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Bebas_Neue, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MK Basketball Culture | Elite Academy in Central India",
  description: "The epicenter of Central India basketball. Elite training academy forging champions in Amravati. Premium coaching, tournaments, and professional player development.",
  keywords: ["basketball", "training", "Amravati", "sports academy", "coaching", "tournaments", "elite"],
  authors: [{ name: "MK Basketball Club" }],
  openGraph: {
    title: "MK Basketball Culture | Elite Academy",
    description: "Forging champions in Central India",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${bebasNeue.variable} ${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0B0C] text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
