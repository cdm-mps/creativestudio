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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, activeFilter]);

  if (!categoryPage) {
    return <CategoryPageSkeleton />;
  }

  const image = categoryPage.pageContent[category]?.image?.asset._ref;

  const EventsList = (events: EventThumbnail[], disabled?: boolean) => {
    return (
      <>
        {isLoading ? (
          <EventGridSkeleton />
        ) : (
          <>
            {events.length ? (
              <EventGrid
                events={events.map((event) => ({
                  _id: event._id,
                  title: event.title[locale as Locales],
                  dates: event.date,
                  category,
                  image: {
                    src: urlFor(event.thumbnail.image.src).url(),
                    alt: event.thumbnail.image.title,
                    objectPosition: event.thumbnail.image.objectPosition,
                  },
                  disabled,
                  soldOut: event.isSoldOut,
                  mentors: event.mentors.map((mentor) => ({
                    alt: mentor.name,
                    objectPosition: mentor.image.mentor_image.objectPosition,
                    src: urlFor(mentor.image.mentor_image.src).url(),
                  })),
                }))}
              />
            ) : (
              <NotFoundBanner />
            )}
          </>
        )}
      </>
    );
  };

  return (
    <main className="mx-12 flex flex-col md:mx-40">
      <BreadcrumbsTitle
        title={t_categories(category)}
        category={category}
        withIcon
        breadcrumbs={[
          { label: "Creative Workshops", url: "/creative-workshops" },
        ]}
      />
      <div className="mt-5 flex flex-col md:mt-10">
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
                      key={key}
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
            {...(image && {
              image: {
                src: urlFor(image).url(),
                alt: `image-${category}`,
                objectPosition: "center",
              },
            })}
          />
        )}
      </div>
      {hasAreasOfInsterest && (
        <>
          <div className="mb-7 mt-8 font-league-gothic text-2xl md:mb-14 md:mt-16 lg:text-5xl">
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
        </>
      )}
      <div ref={ref} className="pb-10 md:pb-20" />
      <ArrowTitle
        title={t("upcomingDates")}
        category={category}
        subTitle={`${categoryPage.futureEvents.length} ${categoryPage.futureEvents.length === 1 ? t("availableEventsSingular") : t("availableEventsPlural")}`}
      />
      <div className="mb-8 md:mb-16" />
      {EventsList(categoryPage.futureEvents)}
      <div className="mt-20 md:mt-44" />
      <IconTitle title={t("previous")} mode="dots" category={category} />
      <div className="mb-8 md:mb-16" />
      {EventsList(categoryPage.previousEvents, true)}
    </main>
  );
}
