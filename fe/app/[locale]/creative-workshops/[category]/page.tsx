"use client";
import { Event } from "@/app/api/models/Event";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { EventElementProps } from "@components/EventElement/EventElement.models";
import EventGrid from "@components/EventGrid/EventGrid";
import { EventGridProps } from "@components/EventGrid/EventGrid.models";
import IconTitle from "@components/IconTitle/IconTitle";
import Tabs from "@components/Tabs/Tabs";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category, categories } from "@model/Category";
import { StructurePages } from "@model/StructurePages";
import { isDateInPast } from "@utils/date/isDateInPast";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function EventsPage({
  params,
}: {
  params: { category: Category };
}) {
  const category = params.category;

  if (!categories.includes(category)) {
    notFound(); //TODO
  }

  const pageStructure = StructurePages[category];
  const hasSubCategories = pageStructure.section.length > 1;

  const locale = useLocale();

  const t_general = useTranslations("general.AreaOfInterest");
  const t_categories = useTranslations("Categories");
  const t_editions = useTranslations("Editions");

  const [pageContent, setPageContent] = useState<
    Record<
      string,
      {
        description: {
          pt: string;
          en: string;
        };
        highlight?: {
          pt: string;
          en: string;
        };
        label?: {
          pt: string;
          en: string;
        };
      }
    >
  >({});

  const [selectedTab, setSelectedTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState(-1);
  const [events, setEvents] = useState<EventGridProps>({ events: [] });

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
              title: event.title[locale as "pt" | "en"],
              date: event.date,
              image: {
                src: CarolinaLeite,
                //urlFor(event.image.image.image.asset._ref).url(),
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

  const getPreviousEvents = () => {
    return events.events.filter((event) => event.disabled);
  };

  const getNextEvents = () => {
    return events.events.filter((event) => !event.disabled);
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-26vh)] py-11">
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
                  (key) => pageContent[key].label?.[locale as "pt" | "en"]!
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
                              pageContent[key]?.highlight?.[
                                locale as "pt" | "en"
                              ]
                            }
                            description={
                              pageContent[key]?.description?.[
                                locale as "pt" | "en"
                              ]
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
                  locale as "pt" | "en"
                ]
              }
              description={
                pageContent[pageStructure.section[0]]?.description?.[
                  locale as "pt" | "en"
                ]
              }
            />
          )}
        </div>
      }
      {pageStructure.hasAreaOfInsterest && (
        <>
          <div className="font-league-gothic text-4xl mt-16 mb-14">
            {t_editions("areaOfInterest")}
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
        title={t_editions("upcomingDates")}
        category={category}
        subTitle={`${getNextEvents().length} ${t_editions("availableEvents")}`}
      />
      <div className="mb-16" />
      {getNextEvents().length > 0 ? (
        <EventGrid events={getNextEvents()} />
      ) : (
        <EventsNotFound />
      )}
      <div className="mt-44" />
      <IconTitle
        title={t_editions("previous")}
        mode="dots"
        category={category}
      />
      <div className="mb-16" />
      {getPreviousEvents().length > 0 ? (
        <EventGrid events={getPreviousEvents()} />
      ) : (
        <EventsNotFound />
      )}
    </main>
  );
}

const EventsNotFound = () => (
  <div className="flex items-center justify-center h-32 w-full bg-not-found-disclaimer">
    <span className="font-league-gothic text-2xl">Não existem eventos</span>
  </div>
);

const Header = ({
  highlight,
  description,
}: {
  highlight?: string;
  description: string;
}) => (
  <div className="flex flex-col py-14">
    {highlight && (
      <div className="font-lato italic text-[32px]">{highlight}</div>
    )}
    <div
      className={clsx(
        "font-lato text-xl whitespace-pre-line",
        highlight && "pt-12"
      )}
    >
      {description}
    </div>
  </div>
);
