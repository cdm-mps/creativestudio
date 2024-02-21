"use client";
import {
  EventBase,
  GetMentorPageOutputDto,
} from "@/app/api/models/GetMentorPage.models";
import { urlFor } from "@/client";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import IconTitle from "@components/IconTitle/IconTitle";
import MentorElement from "@components/Mentor/Mentor";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import { NotFoundBanner } from "@components/shared/NotFoundBanner/NotFoundBanner";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MentorPageSkeleton } from "./skeleton";

export default function MentorPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const [mentor, setMentor] = useState<GetMentorPageOutputDto>();

  useEffect(() => {
    fetch(`/api/getMentor/${params.id}`)
      .then((res) => res.json())
      .then((data: GetMentorPageOutputDto) => setMentor(data));
  }, []);

  const buildLabel = (count: number) =>
    count === 1
      ? t("Components.Mentor.eventBarSingular")
      : t("Components.Mentor.eventBarPlural");

  if (!mentor) {
    return <MentorPageSkeleton />;
  }

  const EventsList = (events: EventBase[], previous?: boolean) => {
    return (
      <React.Fragment>
        {events.length ? (
          events.map((event) => (
            <MentorEventBar
              title={event.title[locale as Locales]}
              mentor={{
                name: mentor.name,
                image: {
                  src: urlFor(mentor.image.mentor_image.src).url(),
                  alt: mentor.image.mentor_image.title,
                  objectPosition: mentor.image.mentor_image.objectPosition,
                },
              }}
              category={event.category}
              date={event.date}
              previous={previous}
              disabled
              eventId={event._id}
            />
          ))
        ) : (
          <NotFoundBanner />
        )}
      </React.Fragment>
    );
  };

  return (
    <main className="mx-40 flex flex-col gap-[89px]">
      <>
        <BreadcrumbsTitle
          title={mentor.name}
          category="businessWorkshops"
          breadcrumbs={[{ label: t("Menu.mentors"), url: "/mentors" }]}
        />

        <div className="flex gap-20">
          <MentorElement
            _id={mentor._id}
            label={mentor.occupation[locale as Locales]}
            image={{
              src: urlFor(mentor.image.mentor_image.src).url(),
              alt: mentor.image.mentor_image.title,
              objectPosition: mentor.image.mentor_image.objectPosition,
            }}
          />
          <p className="font-noto-sans text-lg">
            {mentor.bio[locale as Locales]}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-16">
          <ArrowTitle
            title={t("CreativeWorkshop.upcomingDates")}
            category="businessWorkshops"
            subTitle={`${mentor.futureEvents?.length} ${buildLabel(mentor.futureEvents?.length)}`}
          />
          <div className="mb-20 flex flex-col gap-10">
            {EventsList(mentor.futureEvents)}
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <IconTitle
            title={t("CreativeWorkshop.previous")}
            mode="dots"
            category="businessWorkshops"
          />
          <div className="flex flex-col gap-10">
            {EventsList(mentor.previousEvents, true)}
          </div>
        </div>
      </>
    </main>
  );
}
