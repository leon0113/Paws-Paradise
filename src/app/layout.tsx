import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paws Paradise - A pet daycare",
  description: "Best daycare for your pets!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen`}>{children}</body>
    </html>
  );
}
