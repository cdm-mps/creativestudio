"use client";
import { GetContactsPageOutputDto } from "@/app/api/models/GetContactsPage.models";
import { Map } from "@assets/images/Map";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import ContactInfo from "@components/ContactInfo/ContactInfo";
import Title from "@components/Title/Title";
import { categories } from "@model/Category";
import { useTranslations } from "next-intl";
import { PropsWithChildren, useEffect, useState } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
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
    <main className="flex-comt-24 fle0 mx-12 md:mx-40">
      <div className="flex max-md:flex-col">
        <div className="h-fit md:w-[calc(50vw-80px)]">
          <Title title={t("Menu.contacts")} category="businessWorkshops" />
          <div className="my-8 font-league-gothic text-4xl">
            {t("Contacts.firstHighlight")}
          </div>
          {children}
          <div className="my-8 font-league-gothic text-4xl">
            {t("Contacts.secondHighlight")}
          </div>
          <div className="flex flex-wrap max-md:flex-col max-md:items-center">
            {categories.map((category) => (
              <CategoryElement category={category} size="small" />
            ))}
          </div>
        </div>
        <div className="w-[50vw] max-md:hidden">
          <Map type="desktop" />
        </div>
        <div className="mt-20 md:hidden">
          <Map type="mobile" />
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
        mobilePhone={pageContent.phone.split("/")}
        socials={[
          { icon: <FaFacebook size={24} />, url: pageContent.facebook },
          { icon: <RiInstagramFill size={24} />, url: pageContent.instagram },
          { icon: <FaTiktok size={24} />, url: pageContent.tiktok },
        ]}
      />
    </PageStructure>
  );
}
