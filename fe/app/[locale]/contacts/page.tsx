import { Instagram } from "@assets/icons/Instagram";
import { Youtube } from "@assets/icons/Youtube";
import { Map } from "@assets/images/Map";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import ContactInfo from "@components/ContactInfo/ContactInfo";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations("Menu");

  return (
    <main className="flex flex-col">
      <div className="flex">
        <div className="ml-20 w-[calc(50vw-80px)] h-fit">
          <Title title={t("Contacts")} category="businessWorkshops" />
          <div className="font-noto-sans italic text-[28px] my-12">
            Queres saber mais? Fala connosco!
          </div>
          <ContactInfo
            email="hello@creativestudionofilters.io"
            mobilePhone="910 000 000"
            socials={[
              { icon: <Instagram />, text: "@creativestudio" },
              { icon: <Youtube />, text: "/creativestudio" },
            ]}
          />
          <div className="font-noto-sans italic text-[28px] my-12">
            Ou descobre mais explorando a nossa “casa”...
          </div>
          <div className="flex ">
            <CategoryElement category="editions" size="small" />
            <CategoryElement category="masterclasses" size="small" />
            <CategoryElement category="creativeTalks" size="small" />
            <CategoryElement category="workshops" size="small" />
            <CategoryElement category="artisticResidences" size="small" />
          </div>
        </div>
        <div className="w-[50vw]">
          <Map />
        </div>
      </div>
    </main>
  );
}
