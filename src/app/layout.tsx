import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CostaMar by Priscila | Clínica de Estética & Bem-Estar",
  description:
    "Clínica de estética em Portugal. Estética corporal, facial, cabelereira, nail designer e terapias holísticas. Resultados reais com tecnologia avançada e experiência exclusiva.",
  keywords: [
    "estética",
    "clínica de estética",
    "body sculpting",
    "radiofrequência",
    "limpeza de pele",
    "mesa radiônica",
    "chakras",
    "Portugal",
    "CostaMar",
    "Priscila",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "CostaMar by Priscila",
    description: "Clínica de Estética & Bem-Estar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${josefinSans.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
