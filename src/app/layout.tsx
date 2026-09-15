import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMINE | Full Stack Developer Portfolio",
  description: "Portfolio of Amine - Full Stack Developer specializing in modern web experiences",
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