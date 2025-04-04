import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "jogo da Forca",
  description: "Jogo da Forca com Next.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: {
          userButtonBox: "h-12 px-3 text-foreground hover:bg-input rounded-lg !focus-visible:outline-none",
          userButtonBox__open: "!bg-input !outline-none",
          userButtonPopoverCard: "!bg-background !shadow-lg !rounded-xl !border-2 !border-border",
          userButtonPopoverMain: "!bg-transparent !text-foreground",
          userButtonPopoverActionButton: "!text-foreground !hover:text-foreground",
          userButtonPopoverFooter: "!hidden",
          footer: "!hidden"
        },
      }}
    >
      <html lang="pt-br">
        <body
          className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
