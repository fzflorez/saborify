import type { Metadata } from "next";
import "./globals.css";
import HomeHeader from "@/src/components/home-header";
import Footer from "@/src/components/footer";

export const metadata: Metadata = {
  title: "Saborify",
  description: "Descubre miles de recetas deliciosas de todo el mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 antialiased`}>
        <HomeHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
