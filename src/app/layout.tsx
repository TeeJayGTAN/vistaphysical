import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitaphysical Clinic | Sunderland Osteopathy & Massage",
  description: "Diagnose, Treat & Cure your Body's Aches and Pains. Sunderland's leading Osteopathy, Massage Therapy and Medical Acupuncture clinic. Same day appointments available.",
  keywords: ["Osteopath Sunderland", "Massage Sunderland", "Back Pain Relief", "Sciatica Treatment", "Sports Massage"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
