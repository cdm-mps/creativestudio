"use client";
import { GetContactsPageOutputDto } from "@/app/api/models/GetContactsPage.models";
import { Instagram } from "@assets/icons/Instagram";
import { Map } from "@assets/images/Map";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import ContactInfo from "@components/ContactInfo/ContactInfo";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";
import { PropsWithChildren, useEffect, useState } from "react";
import { ContactsPageSkeleton } from "./skeleton";

export default function ContactsPage() {
  const t = useTranslations();
  const [pageContent, setPageContent] = useState<GetContactsPageOutputDto>();

  useEffect(() => {
    fetch(`/api/getPages/contacts`)
      .then((res) => res.json())
      .then((data: GetContactsPageOutputDto) => setPageContent(data));
  }, []);

  const PageStructure = ({ children }: PropsWithChildren) => (
    <main className="mx-40 flex flex-col ">
      <div className="flex">
        <div className="h-fit w-[calc(50vw-80px)]">
          <Title title={t("Menu.contacts")} category="businessWorkshops" />
          <div className="my-12 font-noto-sans text-[28px] italic">
            {t("Contacts.firstHighlight")}
          </div>
          {children}
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

  if (!pageContent) {
    return (
      <PageStructure>
        <ContactsPageSkeleton />
      </PageStructure>
    );
  }

  return (
    <PageStructure>
      <ContactInfo
        email={pageContent?.email}
        mobilePhone={pageContent.phone}
        socials={[{ icon: <Instagram />, text: pageContent.instagram }]}
      />
    </PageStructure>
  );
}
