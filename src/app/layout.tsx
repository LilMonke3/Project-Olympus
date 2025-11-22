import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yunan Mitolojisi - Antik Tanrılar ve Efsaneler",
  description: "Yunan mitolojisini keşfedin. Zeus, Poseidon, Athena ve daha birçok tanrının hikayeleri. Infinite scroll ile zengin içerik.",
  keywords: ["Yunan mitolojisi", "tanrılar", "efsaneler", "Zeus", "Poseidon", "Athena", "mitoloji"],
  authors: [{ name: "Z.ai Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Yunan Mitolojisi - Antik Tanrılar ve Efsaneler",
    description: "Yunan mitolojisini keşfedin. Infinite scroll ile zengin içerik.",
    url: "https://chat.z.ai",
    siteName: "Yunan Mitolojisi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunan Mitolojisi - Antik Tanrılar ve Efsaneler",
    description: "Yunan mitolojisini keşfedin. Infinite scroll ile zengin içerik.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="yunan-mitolojisi-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}