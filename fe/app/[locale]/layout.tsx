import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ConfigProvider } from "antd";

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
        <body>
          <ConfigProvider
            theme={{
              components: {
                Calendar: {
                  fullBg: "#000",
                  itemActiveBg: "rgba(99, 203, 248, 0.20)",
                },
                Select: {
                  optionFontSize: 20,
                  optionPadding: '10px 22px',
                  optionSelectedColor: "white",
                  optionSelectedFontWeight: "normal",
                },
              },
              token: {
                colorBgElevated: "#000",
                colorPrimary: "#63CBF8",
                colorText: "#fff",
                colorSplit: "#FFF",
                colorBgContainer: "#000",
                fontSize: 24,
                colorTextDisabled: "rgba(255, 255, 255, 0.40)",
                controlItemBgActive: "#63CBF8",
                controlItemBgHover: "rgba(255, 255, 255, 0.10)",
                fontFamily: "League Gothic",
              },
            }}
          >
            <Navbar />
            <div className="md:mt-32 mt-24 mx-6 md:min-h-[calc(100vh-190px)] min-h-[calc(100vh-139px)]">
              {children}
            </div>
            <Footer />
          </ConfigProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
