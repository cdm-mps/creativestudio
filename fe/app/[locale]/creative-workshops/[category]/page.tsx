"use client";
import { Event } from "@/app/api/models/Event";
import { urlFor } from "@/client";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { EventElementProps } from "@components/EventElement/EventElement.models";
import EventGrid from "@components/EventGrid/EventGrid";
import { EventGridProps } from "@components/EventGrid/EventGrid.models";
import { Header } from "@components/Header/Header";
import IconTitle from "@components/IconTitle/IconTitle";
import Skeleton from "@components/Skeleton/Skeleton";
import Tabs from "@components/Tabs/Tabs";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category, categories } from "@model/Category";
import { Locales } from "@model/Locales";
import { PageContent, PagesStructure } from "@model/PagesStructure";
import { isDateInPast } from "@utils/date/isDateInPast";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreativeWorkshopPage({
  params,
}: {
  params: { category: Category };
}) {
  const category = params.category;

  if (!categories.includes(category)) {
    notFound(); //TODO
  }

  const pageStructure = PagesStructure[category];
  const hasSubCategories = pageStructure.section.length > 1;

  const locale = useLocale();

  const t_general = useTranslations("general.AreaOfInterest");
  const t_categories = useTranslations("Categories");

  const t = useTranslations("CreativeWorkshop");

  const [pageContent, setPageContent] = useState<PageContent | undefined>();

  const [selectedTab, setSelectedTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState(-1);
  const [events, setEvents] = useState<EventGridProps | undefined>();

  useEffect(() => {
    fetch(`/api/getPages/${category}`)
      .then((res) => res.json())
      .then((data: any) => setPageContent(data[0]));
  }, []);

  useEffect(() => {
    fetch(
      `/api/getEvents/category/${category}/${
        hasSubCategories
          ? `/subcategory/${pageStructure.section[selectedTab]}`
          : ""
      }${
        activeFilter > -1
          ? `/areaOfInterest/${Object.keys(AreaOfInterest)[activeFilter]}`
          : ""
      }`
    )
      .then((res) => res.json())
      .then((data: Event[]) => {
        setEvents({
          events: data.map((event) => {
            return {
              _id: event._id,
              title: event.title[locale as Locales],
              date: event.date,
              image: {
                src: urlFor(event.image.image.image.asset._ref).url(),
                alt: event.image.title,
                objectPosition: event.image.objectPosition,
              },
              category: event.category,
              subtitle: event.mentor.mentor.name,
              disabled: isDateInPast(event.date),
            };
          }) as EventElementProps[],
        });
      });
  }, [selectedTab, activeFilter]);

  if (!pageContent || !events) {
    return (
      <div className="flex flex-col">
        <Skeleton height={103} width={300} />
        <Skeleton height={42} width={400} className=" mt-14 mb-12" />
        <Skeleton height={300} width={1435} />
        <Skeleton height={39} width={380} className="mt-16 mb-14" />
        <div className="flex items-center justify-center">
          <Skeleton height={163} width={1350} className="mb-3" />
        </div>
        <Skeleton height={100} width={380} className="mt-20 mb-16" />
        <div className="flex gap-8 mb-9">
          {Array(3)
            .fill(null)
            .map(() => (
              <Skeleton height={320} width={290} />
            ))}
        </div>
        <Skeleton height={100} width={380} className="mt-20 mb-16" />
        <div className="flex gap-8">
          {Array(3)
            .fill(null)
            .map(() => (
              <Skeleton height={320} width={290} />
            ))}
        </div>
      </div>
    );
  }

  const getPreviousEvents = () => {
    return events.events.filter((event) => event.disabled);
  };

  const getNextEvents = () => {
    return events.events.filter((event) => !event.disabled);
  };

  return (
    <main className="flex flex-col">
      <BreadcrumbsTitle
        title={t_categories(category)}
        category={category}
        withIcon
        breadcrumbs={[
          { label: "Creative Workshops", url: "/creative-workshops" },
        ]}
      />
      {
        <div className="flex flex-col">
          {hasSubCategories ? (
            <div className="pt-14">
              <Tabs
                tabs={Object.keys(pageContent).map(
                  (key) => pageContent[key].label?.[locale as Locales]!
                )}
                category={category}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              >
                <>
                  {pageStructure?.section.map((key, index) => {
                    return (
                      <>
                        {selectedTab === index && (
                          <Header
                            highlight={
                              pageContent[key]?.highlight?.[locale as Locales]
                            }
                            description={
                              pageContent[key]?.description?.[locale as Locales]
                            }
                          />
                        )}
                      </>
                    );
                  })}
                </>
              </Tabs>
            </div>
          ) : (
            <Header
              highlight={
                pageContent[pageStructure.section[0]]?.highlight?.[
                  locale as Locales
                ]
              }
              description={
                pageContent[pageStructure.section[0]]?.description?.[
                  locale as Locales
                ]
              }
            />
          )}
        </div>
      }
      {pageStructure.hasAreaOfInsterest && (
        <>
          <div className="font-league-gothic text-4xl mt-16 mb-14">
            {t("areaOfInterest")}
          </div>
          <ButtonFilter
            category={category}
            filters={Object.keys(AreaOfInterest).map((key, index) => ({
              label: t_general(key),
              isActive: index === activeFilter,
            }))}
            setFilterActiveStatus={(index) => setActiveFilter(index)}
          />
        </>
      )}
      <ArrowTitle
        title={t("upcomingDates")}
        category={category}
        subTitle={`${getNextEvents().length} ${t("availableEvents")}`}
      />
      <div className="mb-16" />
      {getNextEvents().length > 0 ? (
        <EventGrid events={getNextEvents()} />
      ) : (
        <NotFound />
      )}
      <div className="mt-44" />
      <IconTitle title={t("previous")} mode="dots" category={category} />
      <div className="mb-16" />
      {getPreviousEvents().length > 0 ? (
        <EventGrid events={getPreviousEvents()} />
      ) : (
        <NotFound />
      )}
    </main>
  );
}

const NotFound = () => (
  <div className="flex items-center justify-center h-32 w-full bg-not-found-disclaimer">
    <span className="font-league-gothic text-2xl uppercase">
      Não existem eventos
    </span>
  </div>
);
