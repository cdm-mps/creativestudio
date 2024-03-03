"use client";
import { GetAboutPageOutputDto } from "@/app/api/models/GetAboutPage.models";
import { urlFor } from "@/client";
import Acknowledgements from "@components/Acknowledgements/Acknowledgements";
import CategoryBarList from "@components/CategoryBar/CategoryBarList";
import Divider from "@components/Divider/Divider";
import { Header } from "@components/Header/Header";
import TeamElementRow from "@components/TeamElementRow/TeamElementRow";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { AboutUsPageSkeleton } from "./skeleton";

export default function AboutUsPage() {
  const [pageContent, setPageContent] = useState<GetAboutPageOutputDto>();
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetch("/api/getPages/about")
      .then((res) => res.json())
      .then((data: GetAboutPageOutputDto) => setPageContent(data));
  }, []);

  if (!pageContent) {
    return <AboutUsPageSkeleton />;
  }

  return (
    <main className="mx-12 flex flex-col md:mx-40">
      <Title title={t("Menu.aboutUs")} category="businessWorkshops" />
      <Header
        highlight={pageContent.highlight[locale as Locales]}
        description={pageContent.description[locale as Locales]}
      />
      <CategoryBarList />
      <div className="flex flex-col py-20 md:gap-10 md:py-52">
        <span className="pb-14 text-center font-league-gothic text-3xl uppercase md:text-7xl">
          {t("AboutUs.team")}
        </span>
        <TeamElementRow
          teamElements={pageContent.team.map((element) => ({
            name: element.name,
            role: element.role[locale as Locales],
            image: {
              src: urlFor(element.image.teamElement_image.src).url(),
              alt: element.image.teamElement_image.title,
              objectPosition: element.image.teamElement_image.objectPosition,
            },
          }))}
        />
      </div>
      <div className="flex flex-col gap-12">
        <Divider />
        <Acknowledgements />
        <Divider />
      </div>
    </main>
  );
}
