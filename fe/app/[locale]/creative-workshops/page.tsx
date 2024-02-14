"use client";
import CategoryGrid from "@components/CategoryGrid/CategoryGrid";
import { Header } from "@components/Header/Header";
import Skeleton from "@components/Skeleton/Skeleton";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { CreativeWorkshopsPageStructure } from "@model/PagesStructure";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CreativeWorkshopsPage() {
  const t = useTranslations("CreativeWorkshops");

  const [pageStructure, setPageStructure] = useState<
    CreativeWorkshopsPageStructure | undefined
  >(undefined);

  const locale = useLocale();

  useEffect(() => {
    fetch(`/api/getPages/creativeWorkshops`)
      .then((res) => res.json())
      .then((data: any) => setPageStructure(data[0]));
  }, []);

  if (!pageStructure) {
    return (
      <div className="flex flex-col">
        <Skeleton height={72} width={440} />
        <Skeleton height={42} width={300} className="mt-14" />
        <Skeleton height={355} width={1435} className="mt-12 mb-14" />
        <div className="flex flex-col items-center">
          <Skeleton height={72} width={414} className="mt-6 mb-14"/>
          <Skeleton height={699} width={1049} className="mt-12 mb-14" />
        </div>
      </div>
    );
  }

  return (
    <main className="flex">
      <div className="w-fit">
        <Title title={t("title")} category="businessWorkshops" />
        <Header
          highlight={pageStructure?.highlight[locale as Locales]}
          description={pageStructure?.description[locale as Locales] || ""}
        />
        <div className="flex justify-center mt-6 mb-14">
          <span className="font-league-gothic text-7xl uppercase">
            {t("ourServices")}
          </span>
        </div>

        <div className="flex justify-center">
          <CategoryGrid
            elementDescription={pageStructure?.elementDescription}
          />
        </div>
      </div>
    </main>
  );
}
