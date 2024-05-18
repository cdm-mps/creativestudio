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
import { useEffect, useRef, useState } from "react";
import { EventPageSkeleton } from "./skeleton";
import { isDateInPast } from "@utils/date/isDateInPast";
import { Tag } from "@components/Tag/Tag";

export default function EventPage({ params }: { params: { id: string } }) {
  const t_categories = useTranslations("Categories");
  const t_general = useTranslations("general.AreaOfInterest");
  const t = useTranslations("Event");
  const locale = useLocale();

  const { push } = useRouter();

  const [event, setEvent] = useState<GetEventPageOutputDto>();
  const [showModal, setShowModal] = useState(false);

  const spanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`/api/getEvent/${params.id}`)
      .then((res) => res.json())
      .then((data: GetEventPageOutputDto) => {
        setEvent(data);
        if (spanRef.current) {
          spanRef.current.innerHTML = data?.description[locale as Locales];
        }
      });
  }, [spanRef.current]);

  if (!event) {
    return <EventPageSkeleton />;
  }

  const isPreviousEvent = isDateInPast(event?.date);

  return (
    <main className="mx-12 flex flex-col md:mx-40">
      <div className="flex h-fit w-full items-start justify-between max-md:flex-col">
        <div className="flex items-end">
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
        </div>
        <EventInfo
          duration={event.duration || ""}
          date={event.date}
          level={event.level}
          category={event.category}
          onClick={() => setShowModal(true)}
        />
      </div>
      <div className="relative mt-8 md:mt-16">
        <ImageElement
          src={urlFor(event.image.image.src).url()}
          alt={event.image.image.title}
          className="relative h-[250px] w-full md:h-[500px]"
          blur={isPreviousEvent}
          objectPosition={event.image.image.objectPosition}
        />
        {isPreviousEvent && (
          <div className="absolute top-0 flex h-[250px] w-full items-center justify-center md:h-[500px]">
            <Tag
              label={t("previousEvent")}
              category={event.category}
              size="large"
            />
          </div>
        )}
      </div>
      <div
        ref={spanRef}
        className="mt-8 font-noto-sans text-sm md:mt-16 md:px-14 md:text-lg"
      />
      <div className="mt-6 flex flex-wrap gap-4 md:px-14">
        {event.areasOfInterest?.map((area) => (
          <Tag
            key={area}
            label={t_general(area)}
            category={event.category}
            size="small"
          />
        ))}
      </div>
      <div className="mt-16 flex items-center justify-between max-md:flex-col max-md:gap-4 md:px-14">
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
        {!isPreviousEvent && (
          <div className="relative">
            <Button
              category={event?.category}
              label={t("enrol")}
              isDisabled={event?.isSoldOut}
              onClick={() => {
                push(`${event?._id}/form`);
              }}
            />
            {event.isSoldOut && (
              <div className="rotate absolute top-0 z-10 flex h-[63px]  w-full -rotate-12 items-center justify-center">
                <Tag label={t("soldOutEvent")} size="large" />
              </div>
            )}
          </div>
        )}
      </div>
      {event.schedule?.length && (
        <div className="mb-8 mt-10 pl-[24px] pt-[48px] md:mx-14 md:mb-16 md:mt-20">
          <IconTitle
            title={t("schedule")}
            mode="chevron"
            category={event.category}
          />
        </div>
      )}
      <div className="flex flex-col gap-4 md:mx-14 md:gap-8">
        {event.schedule?.map((scheduleElement, index) => (
          <ScheduleElement
            key={
              scheduleElement.description[locale as Locales] +
              scheduleElement.duration
            }
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
            <span className="font-league-gothic text-xl md:text-3xl">
              {event.levels.title[locale as Locales]}
            </span>
            <BulletPoint
              category={event.category}
              text={event.levels.beginner.level_title[locale as Locales] || ""}
            />
            <span className="mt-2 max-md:text-xs">
              {event.levels.beginner.level_description[locale as Locales]}
            </span>
            <BulletPoint
              category={event.category}
              text={
                event.levels.intermediate.level_title[locale as Locales] || ""
              }
            />
            <span className="mt-2 max-md:text-xs">
              {event.levels.intermediate.level_description[locale as Locales]}
            </span>
          </div>
        </Modal>
      )}
    </main>
  );
}
