import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alita Work Token",
  description: "Alita Work Token presells Alita's working time in XEC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
