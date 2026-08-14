import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Снэпбилд — платформа для создания маркетинговых материалов",
  description: "Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="/assets/css/38d310b04484773c.css" />
        <link rel="stylesheet" href="/assets/css/hero-motion.css" />
        <link rel="stylesheet" href="/assets/css/overrides.css" />
        <link rel="stylesheet" href="/assets/css/large-screens.css" />
      </head>
      <body className="antialiased">
        {children}
        <script src="/assets/js/hero-motion.js" defer></script>
      </body>
    </html>
  );
}
