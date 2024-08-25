import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_global_components/Footer";
import Header from "./_global_components/Header";

export const metadata: Metadata = {
  title: "Portfolio - Thomas LAGENEBRE",
  description: "Je m'appelle Thomas Lagenebre, j'ai 25 ans. Je suis développeur web et voici mon portfolio et mon CV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
