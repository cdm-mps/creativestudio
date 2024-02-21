"use client";
import CategoryGrid from "@components/CategoryGrid/CategoryGrid";
import { Header } from "@components/Header/Header";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CreativeWorkshopsSkeleton } from "./skeleton";
import { GetCreativeWorkshopsPageOutputDto } from "@/app/api/models/GetCreativeWorkshopsPage.models";

export default function CreativeWorkshopsPage() {
  const t = useTranslations("CreativeWorkshops");
  const locale = useLocale();

  const [pageStructure, setPageStructure] =
    useState<GetCreativeWorkshopsPageOutputDto>();

  useEffect(() => {
    fetch(`/api/getPages/creativeWorkshops`)
      .then((res) => res.json())
      .then((data: GetCreativeWorkshopsPageOutputDto) =>
        setPageStructure(data),
      );
  }, []);

  if (!pageStructure) {
    return <CreativeWorkshopsSkeleton />;
  }

  return (
    <main className="mx-40 flex">
      <div className="w-fit">
        <Title title={t("title")} category="businessWorkshops" />
        <Header
          highlight={pageStructure?.highlight[locale as Locales]}
          description={pageStructure?.description[locale as Locales] || ""}
        />
        <div className="mb-14 mt-6 flex justify-center">
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
