import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stefano Wijegunaratne | Frontend Developer",
  description:  "Frontend developer portfolio featuring projects built with React, Next.js and TypeScript.",
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
