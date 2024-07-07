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
import Status from "@components/Status/Status";
import { Status as StatusType } from "@components/Status/Status.models";
import { Tag } from "@components/Tag/Tag";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { getEventStatus } from "@utils/getEventStatus";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EventPageSkeleton } from "./skeleton";
import PortableTextComponent from "@components/PortableText/PortableText";

export default function EventPage({ params }: { params: { id: string } }) {
  const t_categories = useTranslations("Categories");
  const t_general = useTranslations("general.AreaOfInterest");
  const t = useTranslations("Event");
  const locale = useLocale();

  const { push } = useRouter();

  const [event, setEvent] = useState<GetEventPageOutputDto>();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetch(`/api/getEvent/${params.id}`, { cache: "no-cache" })
      .then((res) => res.json())
      .then((data: GetEventPageOutputDto) => {
        setEvent(data);
      });
  }, [params.id]);

  if (!event) {
    return <EventPageSkeleton />;
  }

  const eventStatus = getEventStatus(event?.date, event?.isSoldOut);

  return (
    <main className="mx-12 flex flex-col md:mx-40">
      <div className="flex h-fit w-full items-start justify-between max-md:flex-col">
        <div className="flex flex-col">
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
          <div className="mt-4 md:mt-8">
            <Status
              status={eventStatus as StatusType}
              category={event.category}
            />
          </div>
        </div>
        <EventInfo
          dates={event.date}
          level={event.level}
          category={event.category}
          onClick={() => setShowModal(true)}
        />
      </div>

      <div className="relative mt-8 md:mt-16">
        <ImageElement
          src={urlFor(event.image.image.src).url()}
          alt={event.image.image.title}
          className="relative hidden w-full md:block md:h-[500px]"
          blur={eventStatus === "occurred" || eventStatus === "onGoing"}
          objectPosition={event.image.image.objectPosition}
        />
        <ImageElement
          src={urlFor(event.thumbnail.image.src).url()}
          alt={event.thumbnail.image.title}
          className="relative block h-[250px] w-full md:hidden"
          blur={eventStatus === "occurred" || eventStatus === "onGoing"}
          objectPosition={event.thumbnail.image.objectPosition}
        />
      </div>
      <div className="my-9 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="pl-[24px] pt-[48px]">
          <IconTitle
            title={t("schedule")}
            mode="chevron"
            category={event.category}
          />
        </div>
        {(eventStatus === "available" || eventStatus === "soldOut") && (
          <div className="relative md:mt-10">
            <Button
              category={event?.category}
              label={t("enrol")}
              isDisabled={event?.isSoldOut}
              onClick={() => {
                push(`${event?._id}/form`);
              }}
            />
            {eventStatus === "soldOut" && (
              <div className="rotate absolute -bottom-4 right-6 z-10 flex h-[63px] w-full -rotate-12 items-center  justify-center md:bottom-0 md:right-0 md:top-0">
                <Tag label={t("soldOutEvent")} size="large" />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="whitespace-pre-line font-noto-sans text-sm md:mx-7 md:text-lg">
        <PortableTextComponent
          value={event.content[locale as Locales]}
          category={event?.category}
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-4 md:px-7">
        {event.areasOfInterest?.map((area) => (
          <Tag
            key={area}
            label={t_general(area)}
            category={event.category}
            size="small"
          />
        ))}
      </div>
      <div className="py-8 font-league-gothic text-2xl uppercase md:px-7 md:py-12 md:text-4xl">
        Mentores
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-y-8 md:px-7">
        {event.mentors.map((mentor, i) => (
          <MentorIdentifier
            key={i}
            _id={mentor._id}
            image={{
              src: urlFor(mentor.image.mentor_image.src).url(),
              alt: mentor.image.mentor_image.title,
              objectPosition: mentor.image.mentor_image.objectPosition,
            }}
            name={mentor.name}
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
