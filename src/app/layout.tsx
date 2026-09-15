import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mpy | Portfolio",
  description: "Portfolio of Alif Mas Sastro Nugroho - Full Stack Developer specializing in modern web experiences",
  icons: {
    icon: "/Favicon.png",
  },
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