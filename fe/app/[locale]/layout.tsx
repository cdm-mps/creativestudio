import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";
import Footer from "@/app/components/Footer/Footer";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} className="text-white bg-black p-6">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
