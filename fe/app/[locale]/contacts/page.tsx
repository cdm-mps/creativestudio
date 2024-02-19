"use client";
import { Contacts } from "@/app/api/models/Contacts";
import { Instagram } from "@assets/icons/Instagram";
import { Youtube } from "@assets/icons/Youtube";
import { Map } from "@assets/images/Map";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import ContactInfo from "@components/ContactInfo/ContactInfo";
import Skeleton from "@components/Skeleton/Skeleton";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const t = useTranslations();
  const [pageContent, setPageContent] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/getPages/contacts`)
      .then((res) => res.json())
      .then((data: Contacts[]) => setPageContent(data[0].contacts));
  }, []);

  return (
    <main className="mx-40 flex flex-col">
      <div className="flex">
        <div className="h-fit w-[calc(50vw-80px)]">
          <Title title={t("Menu.contacts")} category="businessWorkshops" />
          <div className="my-12 font-noto-sans text-[28px] italic">
            {t("Contacts.firstHighlight")}
          </div>
          {pageContent.length > 0 ? (
            <ContactInfo
              email={pageContent[0]}
              mobilePhone={pageContent[1]}
              socials={[
                { icon: <Instagram />, text: "@creativestudio" },
                { icon: <Youtube />, text: "/creativestudio" },
              ]}
            />
          ) : (
            <Skeleton className="mt-12" height={105} />
          )}
          <div className="my-12 font-noto-sans text-[28px] italic">
            {t("Contacts.secondHighlight")}
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
