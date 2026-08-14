import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapBuild — дизайн-система",
  description: "Платформа, где все создается в рамках вашего бренда и дизайн-системы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="/assets/css/original-main.css" />
        <link rel="stylesheet" href="/assets/css/hero-motion.css" />
        <link rel="stylesheet" href="/assets/css/overrides.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
