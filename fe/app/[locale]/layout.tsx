import { Inter } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
