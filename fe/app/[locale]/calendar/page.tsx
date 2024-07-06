"use client";

import {
  CalendarElementProps,
  CalendarProps,
} from "@/app/[locale]/calendar/Calendar.models";
import { CalendarPageSkeleton } from "@/app/[locale]/calendar/skeleton";
import { GetCalendarPageOutputDto } from "@/app/api/models/GetCalendarPage.models";
import { GetMentorsPageOutputDto } from "@/app/api/models/GetMentorsPage.models";
import { urlFor } from "@/client";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import Calendar from "@components/Calendar/Calendar";
import Filters from "@components/Filters/Filters";
import { Filter } from "@components/Filters/Filters.models";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import Title from "@components/Title/Title";
import { NotFoundBanner } from "@components/shared/NotFoundBanner/NotFoundBanner";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { categories } from "@model/Category";
import { Locales } from "@model/Locales";
import { formatDate } from "@utils/date/formatDate";
import { isDateInPast } from "@utils/date/isDateInPast";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function CalendarPage() {
  const t = useTranslations();
  const locale = useLocale();
  const { push } = useRouter();

  const ref = useRef<any>(null);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDateRange, setCurrentDateRange] = useState<string>();
  const [pageContent, setPageContent] = useState<CalendarProps>();
  const [filteredEvents, setFilteredEvents] = useState<CalendarElementProps[]>(
    [],
  );
  const [filters, setFilters] = useState<Filter[]>();
  const [result, setResult] = useState<Record<string, string | undefined>>({});

  const date = formatDate(selectedDate.toDateString(), locale, "2-digit");

  function buildLabel(count: number) {
    return count === 0
      ? t(`Components.NotFound.noEvents`)
      : count === 1
        ? `${count} ${t(`Calendar.event`)}`
        : `${count} ${t(`Calendar.events`)}`;
  }

  function buildFilters(mentors: { name: string }[]) {
    const filters: Filter[] = [
      {
        placeholder: t(`Components.Filters.mentor`),
        _key: "mentor",
        options: mentors.map((mentor) => {
          return { value: mentor.name, label: mentor.name };
        }),
      },
      {
        placeholder: t(`Components.Filters.areaOfInterest`),
        _key: "areaOfInterest",
        options: Object.keys(AreaOfInterest).map((area) => {
          return { value: area, label: t(`general.AreaOfInterest.${area}`) };
        }),
      },
      {
        placeholder: t(`Components.Filters.eventType`),
        _key: "eventType",
        options: categories.map((category) => {
          return {
            value: category,
            label: t(`Categories.${category}`),
          };
        }),
      },
    ];

    setFilters(filters);
  }

  function getSelectedDateEvents() {
    if (!filteredEvents) return [];

    return filteredEvents.filter(
      (event: CalendarElementProps) =>
        JSON.stringify(date) ===
        JSON.stringify(formatDate(event.date[0], locale, "2-digit")),
    );
  }

  function getFilteredEvents() {
    let events: CalendarElementProps[] = [];

    const checkEvent = (_event: CalendarElementProps) => {
      let res = true;

      if (result["mentor"] !== undefined)
        res =
          res &&
          _event.mentors.some((mentor) => mentor.name === result["mentor"]);
      if (result["eventType"] !== undefined)
        res = res && _event.category === result["eventType"];
      if (result["areaOfInterest"] !== undefined) {
        res =
          res &&
          _event.areasOfInterest?.includes(
            result["areaOfInterest"] as AreaOfInterest,
          );
      }

      return res;
    };

    if (pageContent) {
      if (
        result["mentor"] === undefined &&
        result["eventType"] === undefined &&
        result["areaOfInterest"] === undefined
      ) {
        events = pageContent.events;
      } else {
        events = pageContent.events.filter((event: CalendarElementProps) =>
          checkEvent(event),
        );
      }
    }

    setFilteredEvents(events);
  }

  function handleSelectedDate(value: Date) {
    setSelectedDate(value);
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const selected = date.year + "-" + date.month;
    if (currentDateRange !== selected) {
      fetch(`/api/getCalendar/${selected}`, { next: { revalidate: 10 } })
        .then((res) => res.json())
        .then((data: GetCalendarPageOutputDto) => {
          setPageContent({
            events: data.events.map((event) => {
              return {
                _id: event._id,
                category: event.category,
                areasOfInterest: event.areasOfInterest,
                date: event.date,
                title: event.title[locale as Locales],
                disabled: isDateInPast(event.date),
                previous: isDateInPast(event.date),
                mentors: event.mentors,
                isSoldOut: !isDateInPast(event.date) && event.isSoldOut,
              };
            }) as CalendarElementProps[],
          });
          setCurrentDateRange(selected);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  useEffect(() => {
    getFilteredEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, pageContent]);

  useEffect(() => {
    fetch(`/api/getMentors`, { next: { revalidate: 10 } })
      .then((res) => res.json())
      .then((data: GetMentorsPageOutputDto) => {
        buildFilters(
          data.mentors.map((mentor) => ({
            name: mentor.name,
          })),
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pageContent) {
    return <CalendarPageSkeleton />;
  }

  if (!filters) {
    return <CalendarPageSkeleton />;
  }

  return (
    <main className="mx-12 flex flex-col gap-3 md:mx-40 md:gap-10">
      <Title title={t("Menu.calendar")} category="businessWorkshops" />
      <div className="flex flex-col gap-5 max-md:mt-6 md:mx-20 md:gap-10">
        <Filters
          filters={filters as Filter[]}
          result={result}
          setResult={setResult}
        />

        <Calendar
          events={filteredEvents}
          selectedDate={selectedDate}
          setSelectedDate={(value) => handleSelectedDate(value)}
        />
      </div>
      <ArrowTitle
        title={date.day + "/" + date.month}
        category={"businessWorkshops"}
        subTitle={buildLabel(getSelectedDateEvents().length)}
      />
      <div ref={ref} />
      {getSelectedDateEvents().length > 0 ? (
        getSelectedDateEvents().map(
          (event, index) =>
            event && (
              <MentorEventBar
                key={"event_" + index}
                mentors={event.mentors.map((mentor) => ({
                  src: urlFor(mentor.image.mentor_image.src).url(),
                  alt: mentor.image.mentor_image.title,
                  objectPosition: mentor.image.mentor_image.objectPosition,
                }))}
                category={event.category}
                title={event.title}
                previous={event.disabled}
                date={event.date}
                soldOut={!event.disabled && event.isSoldOut}
                onClick={() =>
                  push(
                    `creative-workshops/${event.category}/event/${event._id}`,
                  )
                }
              />
            ),
        )
      ) : (
        <NotFoundBanner />
      )}
    </main>
  );
}
