"use client";
import { urlFor } from "@/client";
import CategoryCard from "@components/CategoryCard/CategoryCard";
import Divider from "@components/Divider/Divider";
import { Header } from "@components/Header/Header";
import Skeleton from "@components/Skeleton/Skeleton";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { BusinessWorkshopsPageStructure } from "@model/PagesStructure";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function BusinessWorkshopsPage() {
  const t = useTranslations("BusinessWorkshops");
  const locale = useLocale();

  const [pageStructure, setPageStructure] = useState<
    BusinessWorkshopsPageStructure | undefined
  >(undefined);

  useEffect(() => {
    fetch(`/api/getPages/businessWorkshops`)
      .then((res) => res.json())
      .then((data: any) => setPageStructure(data[0]));
  }, []);

  if (!pageStructure) {
    return (
      <div className="flex flex-col">
        <Skeleton height={72} width={540} />
        <Skeleton height={42} width={300} className="mt-14" />
        <Skeleton height={250} className="mb-14 mt-12" />
        {Array(4)
          .fill(null)
          .map(() => (
            <div className="flex flex-col">
              <Skeleton height={300} />
              <Skeleton height={2} className="my-4" />
            </div>
          ))}
      </div>
    );
  }

  return (
    <main className="flex flex-col">
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
      {pageStructure?.workshops.map((workshop) => (
        <>
          <CategoryCard
            image={{
              src: urlFor(workshop.image.asset._ref).url(),
              alt: `${workshop.title[locale as Locales]}`,
              objectPosition: "center",
            }}
            subtitle={workshop.description[locale as Locales]}
            title={workshop.title[locale as Locales]}
            disabled={pageStructure.isWIP}
            subCategories={workshop.subcategories?.map(
              (subcategory) => subcategory[locale as Locales],
            )}
          />
          <Divider category="businessWorkshops" className="my-4 opacity-50" />
        </>
      ))}
    </main>
  );
}
