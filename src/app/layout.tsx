import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import BotpressChat from "@/components/BotpressChat";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar />
          <BotpressChat />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
