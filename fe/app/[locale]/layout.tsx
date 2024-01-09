import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "pt" };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} className="text-white bg-black p-6">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
