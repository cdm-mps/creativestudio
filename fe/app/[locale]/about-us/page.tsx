"use client";
import { AboutUsProps } from "@/app/[locale]/about-us/AboutUs.models";
import { AboutUs } from "@/app/api/models/AboutUs";
import { urlFor } from "@/client";
import Acknowledgements from "@components/Acknowledgements/Acknowledgements";
import CategoryBarList from "@components/CategoryBar/CategoryBarList";
import Divider from "@components/Divider/Divider";
import { Header } from "@components/Header/Header";
import Skeleton from "@components/Skeleton/Skeleton";
import TeamElementRow from "@components/TeamElementRow/TeamElementRow";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const AboutUsPageSkeleton = () => {
  return (
    <div className="mx-40 flex flex-col">
      <Skeleton className="mb-14" height={72} width={229} />
      <Skeleton height={42} width={300} />
      <Skeleton className="my-14" height={476} />
      <Skeleton height={576} />
      <Skeleton className="my-14" height={476} />
      <Skeleton height={490} />
    </div>
  );
};

export default function AboutUsPage() {
  const [pageContent, setPageContent] = useState<AboutUsProps>();
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    fetch("/api/getPages/aboutUs")
      .then((res) => res.json())
      .then((data: AboutUs[]) => {
        const content = data[0];
        setPageContent({
          description: content.description[locale as Locales],
          highlight: content.highlight[locale as Locales],
          team: content.team.map((element) => ({
            name: element.name,
            role: element.role[locale as Locales],
            image: {
              src: urlFor(element.image.teamElement_image.src).url(),
              alt: element.image.teamElement_image.title,
              objectPosition: element.image.teamElement_image.objectPosition,
            },
          })),
        } as AboutUsProps);
      });
  }, []);

  if (!pageContent) {
    return <AboutUsPageSkeleton />;
  }

  return (
    <main className="mx-40 flex flex-col">
      <Title title={t("Menu.aboutUs")} category="businessWorkshops" />
      <Header
        highlight={pageContent.highlight}
        description={pageContent.description}
      />
      <CategoryBarList />
      <div className="flex flex-col gap-10 py-52">
        <span className="pb-14 text-center font-league-gothic text-3xl uppercase md:text-7xl">
          {t("AboutUs.team")}
        </span>
        <TeamElementRow teamElements={pageContent.team} />
      </div>
      <div className="flex flex-col gap-12">
        <Divider />
        <Acknowledgements />
        <Divider />
      </div>
    </main>
  );
}
