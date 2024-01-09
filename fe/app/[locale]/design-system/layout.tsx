import { locales } from "@/config";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";

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
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
