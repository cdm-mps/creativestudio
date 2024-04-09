"use client";
import {
  CategoriesWithAreasOfInterest,
  CategoryPageProjection,
  EventThumbnail,
  GetCategoryPageOutputDto,
} from "@/app/api/models/GetCategoryPage.models";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { Header } from "@components/Header/Header";
import Tabs from "@components/Tabs/Tabs";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category, categories } from "@model/Category";
import { Locales } from "@model/Locales";
import { SubCategory } from "@model/SubCategory";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { CategoryPageSkeleton, EventGridSkeleton } from "./skeleton";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import React from "react";
import { NotFoundBanner } from "@components/shared/NotFoundBanner/NotFoundBanner";
import IconTitle from "@components/IconTitle/IconTitle";
import EventGrid from "@components/EventGrid/EventGrid";
import { urlFor } from "@/client";
import { notFound } from "next/dist/client/components/not-found";
import DefaultImage from "@assets/images/DeafultImage.jpg";

export default function CreativeWorkshopPage({
  params,
}: {
  params: { category: Category };
}) {
  const category = params.category;
  const t = useTranslations("CreativeWorkshop");
  const t_general = useTranslations("general.AreaOfInterest");
  const t_categories = useTranslations("Categories");
  const locale = useLocale();

  const ref = useRef<any>(null);

  if (!categories.includes(category)) {
    notFound(); //TODO
  }

  const [categoryPage, setCategoryPage] = useState<GetCategoryPageOutputDto>();
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const subcategories = CategoryPageProjection[category].split(", ") as (
    | Category
    | SubCategory
  )[];
  const hasSubCategories = subcategories.length > 1;
  const hasAreasOfInsterest = CategoriesWithAreasOfInterest.includes(category);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `/api/getPages/${category}${
        hasSubCategories ? `/${subcategories[selectedTab]}` : ""
      }${
        activeFilter > -1 ? `/${Object.keys(AreaOfInterest)[activeFilter]}` : ""
      }`,
    )
      .then((res) => res.json())
      .then((data: GetCategoryPageOutputDto) => setCategoryPage(data))
      .finally(() => setIsLoading(false));
  }, [selectedTab, activeFilter]);

  if (!categoryPage) {
    return <CategoryPageSkeleton />;
  }

  const EventsList = (events: EventThumbnail[], disabled?: boolean) => {
    return (
      <React.Fragment>
        {isLoading ? (
          <EventGridSkeleton />
        ) : (
          <React.Fragment>
            {events.length ? (
              <EventGrid
                events={events.map((event) => ({
                  _id: event._id,
                  title: event.title[locale as Locales],
                  subtitle: event.mentor.mentor.name,
                  date: event.date,
                  category,
                  image: {
                    src: urlFor(event.image.image.src).url(),
                    alt: event.image.image.title,
                    objectPosition: event.image.image.objectPosition,
                  },
                  disabled,
                }))}
              />
            ) : (
              <NotFoundBanner />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <main className="mx-40 flex flex-col">
      <BreadcrumbsTitle
        title={t_categories(category)}
        category={category}
        withIcon
        breadcrumbs={[
          { label: "Creative Workshops", url: "/creative-workshops" },
        ]}
      />
      <div className="flex flex-col">
        {hasSubCategories && (
          <Tabs
            tabs={subcategories.map(
              (subcategory) =>
                categoryPage.pageContent[subcategory].label?.[
                  locale as Locales
                ]!,
            )}
            category={category}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          >
            <>
              {subcategories.map(
                (key, index) =>
                  selectedTab === index && (
                    <Header
                      highlight={
                        categoryPage.pageContent[key].highlight?.[
                          locale as Locales
                        ]
                      }
                      description={
                        categoryPage.pageContent[key].description[
                          locale as Locales
                        ]
                      }
                    />
                  ),
              )}
            </>
          </Tabs>
        )}
        {!hasSubCategories && (
          <Header
            highlight={
              categoryPage.pageContent[category].highlight?.[locale as Locales]
            }
            description={
              categoryPage.pageContent[category].description[locale as Locales]
            }
            image={{
              src: DefaultImage,
              alt: "defaultImage",
              objectPosition: "center",
            }}
          />
        )}
      </div>
      {hasAreasOfInsterest && (
        <React.Fragment>
          <div className="mb-14 mt-16 font-league-gothic md:text-2xl lg:text-5xl">
            {t("areaOfInterest")}
          </div>
          <ButtonFilter
            category={category}
            filters={Object.keys(AreaOfInterest).map((key, index) => ({
              label: t_general(key),
              isActive: index === activeFilter,
            }))}
            setFilterActiveStatus={(index) => {
              setActiveFilter(index);
              ref.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </React.Fragment>
      )}
      <div ref={ref} className="pb-20" />
      <ArrowTitle
        title={t("upcomingDates")}
        category={category}
        subTitle={`${categoryPage.futureEvents.length} ${categoryPage.futureEvents.length === 1 ? t("availableEventsSingular") : t("availableEventsPlural")}`}
      />
      <div className="mb-16" />
      {EventsList(categoryPage.futureEvents)}
      <div className="mt-44" />
      <IconTitle title={t("previous")} mode="dots" category={category} />
      <div className="mb-16" />
      {EventsList(categoryPage.previousEvents, true)}
    </main>
  );
}
