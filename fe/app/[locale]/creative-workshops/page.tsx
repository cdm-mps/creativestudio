"use client";

import { GetCreativeWorkshopsPageOutputDto } from "@/app/api/models/GetCreativeWorkshopsPage.models";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import { Header } from "@components/Header/Header";
import Title from "@components/Title/Title";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CreativeWorkshopsSkeleton } from "./skeleton";

export default function CreativeWorkshopsPage() {
  const t = useTranslations("CreativeWorkshops");
  const locale = useLocale();

  const [pageStructure, setPageStructure] =
    useState<GetCreativeWorkshopsPageOutputDto>();

  useEffect(() => {
    fetch(`/api/getPages/creativeWorkshops`, { cache: "no-cache" })
      .then((res) => res.json())
      .then((data: GetCreativeWorkshopsPageOutputDto) =>
        setPageStructure(data),
      );
  }, []);

  if (!pageStructure) {
    return <CreativeWorkshopsSkeleton />;
  }

  return (
    <main className="mx-12 flex flex-col md:mx-40">
      <div className="w-full">
        <Title title={t("title")} category="businessWorkshops" />
        <Header
          highlight={pageStructure?.highlight[locale as Locales]}
          description={pageStructure?.description[locale as Locales] || ""}
        />
        <div className="mb-14 mt-6 flex justify-center">
          <span className="font-league-gothic text-4xl uppercase md:text-7xl">
            {t("ourServices")}
          </span>
        </div>
        <div className="group flex flex-col justify-center lg:flex-row lg:flex-wrap">
          {Object.keys(pageStructure.elementDescription).map((key, i) => (
            <CategoryElement
              key={i}
              size="medium"
              category={key as Category}
              description={
                pageStructure.elementDescription[key as Category][
                  locale as Locales
                ]
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
