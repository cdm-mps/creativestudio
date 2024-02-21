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
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import Title from "@components/Title/Title";
import { NotFoundBanner } from "@components/shared/NotFoundBanner/NotFoundBanner";
import { Locales } from "@model/Locales";
import { formatDate } from "@utils/date/formatDate";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CalendarPage() {
  const t = useTranslations();
  const locale = useLocale();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDateRange, setCurrentDateRange] = useState<string>();
  const [pageContent, setPageContent] = useState<CalendarProps>();
  const [selectDateEvents, setSelectedDateEvents] = useState<
    CalendarElementProps[]
  >([]);

  const date = formatDate(selectedDate.toDateString(), "2-digit");

  const buildLabel = (count: number) =>
    count === 1
      ? t("Components.Mentor.eventBarSingular")
      : t("Components.Mentor.eventBarPlural");

  const isDateInPast = (value: string): boolean => {
    const date = new Date(value);
    const currentDate = new Date();
    return date < currentDate;
  };

  function getSelectedDateEvents() {
    if (!pageContent) return [];

    return pageContent.events.filter(
      (event) =>
        JSON.stringify(formatDate(event.date, "2-digit")) ===
        JSON.stringify(date),
    );
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
                },
              };
            }) as CalendarElementProps[],
          });
          setCurrentDateRange(selected);
        });
    }

    setSelectedDateEvents(getSelectedDateEvents());
  }, [selectedDate]);

  if (!pageContent) {
    return <CalendarPageSkeleton />;
  }

  return (
    <main className="mx-40 flex flex-col gap-10">
      <Title title={t("Menu.calendar")} category="businessWorkshops" />
      <div className="mx-20">
        <Calendar
          events={pageContent.events}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <ArrowTitle
        title={date.day + "/" + date.month}
        category={"businessWorkshops"}
        subTitle={`${selectDateEvents.length} ${buildLabel(selectDateEvents.length)}`}
      />
      {selectDateEvents.length > 0 ? (
        selectDateEvents.map(
          (event, index) =>
            event && (
              <MentorEventBar
                key={"event_" + index}
                mentor={event.mentor}
                category={event.category}
                title={event.title}
                eventId={event._id}
              />
            ),
        )
      ) : (
        <NotFoundBanner />
      )}
    </main>
  );
}
function isDateInPast(date: string): any {
  throw new Error("Function not implemented.");
}
