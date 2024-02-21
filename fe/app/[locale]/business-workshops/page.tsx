"use client";

import { GetBusinessWorkshopsPageOutputDto } from "@/app/api/models/GetBusinessWorkshopsPage.models";
import { urlFor } from "@/client";
import CategoryCard from "@components/CategoryCard/CategoryCard";
import Divider from "@components/Divider/Divider";
import { Header } from "@components/Header/Header";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BusinessWorkshopsSkeleton } from "./skeleton";

export default function BusinessWorkshopsPage() {
  const t = useTranslations("BusinessWorkshops");
  const locale = useLocale();

  const [pageStructure, setPageStructure] =
    useState<GetBusinessWorkshopsPageOutputDto>();

  useEffect(() => {
    fetch(`/api/getPages/businessWorkshops`)
      .then((res) => res.json())
      .then((data: GetBusinessWorkshopsPageOutputDto) =>
        setPageStructure(data),
      );
  }, []);

  if (!pageStructure) {
    return <BusinessWorkshopsSkeleton />;
  }

  return (
    <main className="mx-40 flex flex-col">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <Title title={t("title")} category="businessWorkshops" />
          {categoriesDictionary["businessWorkshops"]("max-md:w-4 h-auto")}
        </div>
        {pageStructure.isWIP && (
          <div className="flex h-fit rounded-lg border-2 border-businessWorkshops p-2">
            <span className="font-league-gothic text-xl uppercase text-businessWorkshops">
              {t("workInProgress")}
            </span>
          </div>
        )}
      </div>
      <Header
        highlight={pageStructure.highlight[locale as Locales]}
        description={pageStructure.description[locale as Locales]}
      />
      {pageStructure?.workshops.map((workshop: any) => (
        <>
          <CategoryCard
            image={{
              src: urlFor(workshop.src).url(),
              alt: `${workshop.title[locale as Locales]}`,
              objectPosition: "center",
            }}
            subtitle={workshop.description[locale as Locales]}
            title={workshop.title[locale as Locales]}
            disabled={pageStructure.isWIP}
            subCategories={workshop.subcategories?.map(
              (subcategory: any) => subcategory[locale as Locales],
            )}
          />
          <Divider category="businessWorkshops" className="my-4 opacity-50" />
        </>
      ))}
    </main>
  );
}
