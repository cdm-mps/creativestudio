import ContactInfo from "@/app/components/ContactInfo/ContactInfo";
import Divider from "@/app/components/Divider/Divider";
import { Instagram } from "@icons/Instagram";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("DesignSystem");
  return (
    <main className="flex flex-col min-h-screen items-center p-4 bg-black text-white gap-6">
      <p className="text-white font-league-gothic uppercase text-4xl md:text-7xl">
        {t("title")}
      </p>
      {/* -------------- DIVIDER --------------*/}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          1. Divider horizontal & vertical
        </p>
        <div className="flex justify-around w-40 h-40 md:w-80 md:h-80 opacity-50 gap-x-3 md:gap-x-4">
          <Divider category="workshop" />
          <Divider category="creative-talks" orientation="vertical" />
        </div>
      </div>
      {/* -------------- CONTACT INFO --------------*/}
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          2. ContactInfo
        </p>
        <ContactInfo
          email="hello@creativestudionofilters.io"
          mobilePhone="910 000 000"
          socials={[
            { icon: <Instagram />, text: "@creativestudio" },
            { icon: <Instagram />, text: "/creativestudio" },
          ]}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-league-gothic text-2xl md:text-4xl">
          {t("footer")}
        </p>
      </div>
    </main>
  );
}
