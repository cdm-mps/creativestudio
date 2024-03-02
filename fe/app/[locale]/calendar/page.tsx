"use client";

import {
  CalendarElementProps,
  CalendarProps,
} from "@/app/[locale]/calendar/Calendar.models";
import { CalendarPageSkeleton } from "@/app/[locale]/calendar/skeleton";
import { Calendar as CalendarModel } from "@/app/api/models/Calendar";
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

  const date = formatDate(selectedDate.toDateString(), "2-digit");

  const isDateInPast = (value: string): boolean => {
    const date = new Date(value);
    const currentDate = new Date();
    return date < currentDate;
  };

  function buildLabel(previous: boolean, count: number) {
    return count === 0
      ? t(`Components.NotFound.noEvents`)
      : count === 1
        ? `${count} ${t(`Components.Mentor.eventBarSingular${previous ? "Previous" : ""}`)}`
        : `${count} ${t(`Components.Mentor.eventBarPlural${previous ? "Previous" : ""}`)}`;
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
        JSON.stringify(formatDate(event.date, "2-digit")) ===
        JSON.stringify(date),
    );
  }

  function getFilteredEvents() {
    let events: CalendarElementProps[] = [];

    const checkEvent = (_event: CalendarElementProps) => {
      let res = true;

      if (result["mentor"] !== undefined)
        res = res && _event.mentor.name === result["mentor"];
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
      fetch(`/api/getCalendar/${selected}`)
        .then((res) => res.json())
        .then((data: CalendarModel[]) => {
          setPageContent({
            events: data.map((event) => {
              return {
                _id: event._id,
                category: event.category,
                areasOfInterest: event.areasOfInterest,
                date: event.date,
                title: event.title[locale as Locales],
                disabled: isDateInPast(event.date),
                mentor: {
                  image: {
                    alt: event.mentor.mentor.image.mentor_image.title,
                    objectPosition:
                      event.mentor.mentor.image.mentor_image.objectPosition,
                    src: urlFor(
                      event.mentor.mentor.image.mentor_image.src,
                    ).url(),
                  },
                  name: event.mentor.mentor.name,
                  _id: event.mentor.mentor._id,
                },
              };
            }) as CalendarElementProps[],
          });
          setCurrentDateRange(selected);
        });
    }
  }, [selectedDate]);

  useEffect(() => {
    getFilteredEvents();
  }, [result, pageContent]);

  useEffect(() => {
    fetch(`/api/getCalendarFilters`)
      .then((res) => res.json())
      .then((data: { name: string }[]) => {
        buildFilters(data);
      });
  }, []);

  if (!pageContent) {
    return <CalendarPageSkeleton />;
  }

  if (!filters) {
    return <CalendarPageSkeleton />;
  }

  return (
    <main className="mx-40 flex flex-col gap-10">
      <Title title={t("Menu.calendar")} category="businessWorkshops" />
      <div className="mx-20 flex flex-col">
        <div className="h-[150px]">
          <Filters
            filters={filters as Filter[]}
            result={result}
            setResult={setResult}
          />
        </div>
        <Calendar
          events={filteredEvents}
          selectedDate={selectedDate}
          setSelectedDate={(value) => handleSelectedDate(value)}
        />
      </div>
      <ArrowTitle
        title={date.day + "/" + date.month}
        category={"businessWorkshops"}
        subTitle={buildLabel(
          isDateInPast(selectedDate.toDateString()),
          getSelectedDateEvents().length,
        )}
      />
      <div ref={ref} />
      {getSelectedDateEvents().length > 0 ? (
        getSelectedDateEvents().map(
          (event, index) =>
            event && (
              <MentorEventBar
                key={"event_" + index}
                mentor={event.mentor}
                category={event.category}
                title={event.title}
                previous={event.disabled}
                disabled
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
