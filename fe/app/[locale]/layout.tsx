import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "pt" };
}) {
  const messages = useMessages();
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} className="text-white bg-black">
      <NextIntlClientProvider messages={messages}>
        <body className="min-h-screen p-6">
          <Navbar />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
