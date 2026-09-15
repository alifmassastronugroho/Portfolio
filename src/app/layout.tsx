import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALIF MAS SASTRO NUGROHO | Full Stack Development Portfolio",
  description: "Portfolio of Alif Mas Sastro Nugroho - Full Stack Developer specializing in modern web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}