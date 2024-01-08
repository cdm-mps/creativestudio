import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";

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
    <html lang={locale}>
      <body className="text-white bg-black">{children}</body>
    </html>
  );
}
