"use client";
import { GetEventPageOutputDto } from "@/app/api/models/GetEventPage.models";
import { urlFor } from "@/client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import BulletPoint from "@components/BulletPoint/BulletPoint";
import Button from "@components/Button/Button";
import EventInfo from "@components/EventInfo/EventInfo";
import IconTitle from "@components/IconTitle/IconTitle";
import ImageElement from "@components/ImageElement/ImageElement";
import MentorIdentifier from "@components/MentorIdentifier/MentorIdentifier";
import Modal from "@components/Modal/Modal";
import ScheduleElement from "@components/Schedule/ScheduleElement";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EventPageSkeleton } from "./skeleton";

export default function EventPage({ params }: { params: { id: string } }) {
  const t_categories = useTranslations("Categories");
  const t = useTranslations("Event");
  const locale = useLocale();

  const { push } = useRouter();

  const [event, setEvent] = useState<GetEventPageOutputDto>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`/api/getEvent/${params.id}`)
      .then((res) => res.json())
      .then((data: GetEventPageOutputDto) => setEvent(data));
  }, []);

  if (!event) {
    return <EventPageSkeleton />;
  }

  return (
    <main className="mx-40 flex flex-col">
      <div className="flex h-fit w-full justify-between">
        <BreadcrumbsTitle
          title={event?.title[locale as Locales] || ""}
          category={event?.category as Category}
          withIcon
          breadcrumbs={[
            { label: "Creative Workshops", url: "/creative-workshops" },
            {
              label: t_categories(event.category),
              url: `/creative-workshops/${event.category}`,
            },
          ]}
        />
        <EventInfo
          duration={event.duration || ""}
          date={event.date}
          level={event.level}
          category={event.category}
          onClick={() => setShowModal(true)}
        />
      </div>
      <ImageElement
        src={urlFor(event.image.image.src).url()}
        alt={event.image.image.title}
        className="mt-16 h-[500px] w-full"
        objectPosition={event.image.image.objectPosition}
      />
      <div className="mt-16 px-14 font-noto-sans text-lg">
        {event?.description[locale as Locales]}
      </div>
      <div className="mt-16 flex items-center justify-between px-14">
        <MentorIdentifier
          _id={event.mentor.mentor._id}
          image={{
            src: urlFor(event.mentor.mentor.image.mentor_image.src).url(),
            alt: event.mentor.mentor.image.mentor_image.title,
            objectPosition:
              event.mentor.mentor.image.mentor_image.objectPosition,
          }}
          name={event.mentor.mentor.name}
        />
        <Button
          category={event?.category}
          label={t("enrol")}
          onClick={() => {
            push(`${event?._id}/form`);
          }}
        />
      </div>
      {event.schedule?.length && (
        <div className="mx-14 mb-16 mt-20 pl-[24px] pt-[48px]">
          <IconTitle
            title={t("schedule")}
            mode="chevron"
            category={event.category}
          />
        </div>
      )}
      <div className="mx-14 flex flex-col gap-8">
        {event.schedule?.map((scheduleElement, index) => (
          <ScheduleElement
            title={scheduleElement.description[locale as Locales]}
            duration={scheduleElement.duration}
            category={event.category}
            bullet={{ index: index + 1 }}
          />
        ))}
      </div>
      {showModal && (
        <Modal onCloseModal={() => setShowModal(false)}>
          <div className="flex flex-col px-7 pb-9">
            <span className="font-league-gothic text-3xl">
              {event.levels.title[locale as Locales]}
            </span>
            <BulletPoint
              category={event.category}
              text={event.levels.beginner.level_title[locale as Locales] || ""}
            />
            <span className="mt-2">
              {event.levels.beginner.level_description[locale as Locales]}
            </span>
            <BulletPoint
              category={event.category}
              text={
                event.levels.intermediate.level_title[locale as Locales] || ""
              }
            />
            <span className="mt-2">
              {event.levels.intermediate.level_description[locale as Locales]}
            </span>
          </div>
        </Modal>
      )}
    </main>
  );
}
