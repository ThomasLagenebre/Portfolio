import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_global_components/Footer";
import Header from "./_global_components/Header";

export const metadata: Metadata = {
  title: "Monsieur Web",
  description: "Je m'appelle Thomas Lagenebre, je suis développeur web freelance spécialisé dans la création de sites internet modernes et sur-mesure. Je propose des solutions web adaptées à vos besoins : sites vitrines, e-commerce, et plus. Profitez de mon expertise pour améliorer votre présence en ligne et atteindre vos objectifs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-primary bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
