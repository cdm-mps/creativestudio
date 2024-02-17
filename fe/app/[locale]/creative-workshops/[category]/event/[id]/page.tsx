"use client";
import { Event } from "@/app/api/models/Event";
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
import Skeleton from "@components/Skeleton/Skeleton";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { ModalPageStructure } from "@model/PagesStructure";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function EventPage({ params }: { params: { id: string } }) {
  const t_categories = useTranslations("Categories");
  const t = useTranslations("Event");

  const locale = useLocale();

  const [event, setEvent] = useState<Event | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalPageStructure>();

  useEffect(() => {
    fetch(`/api/getEvents/${params.id}`)
      .then((res) => res.json())
      .then((data: Event[]) => setEvent(data[0]));
  }, []);

  const getModalContent = () => {
    fetch(`/api/getPages/levels`)
      .then((res) => res.json())
      .then((data) => setModalContent(data[0]));
  };

  if (!event) {
    return <PageSkeleton />;
  }

  return (
    <main className="flex flex-col min-h-[calc(100vh-26vh)]">
      {showModal && (
        <Modal onCloseModal={() => setShowModal(false)}>
          <div className="flex flex-col px-7 pb-9">
            {modalContent ? (
              <>
                <span className="font-league-gothic text-3xl">
                  {modalContent?.title?.[locale as Locales]}
                </span>
                <BulletPoint
                  category={event.category}
                  text={
                    modalContent?.beginner?.level_title[locale as Locales] || ""
                  }
                />
                <span className="mt-2">
                  {modalContent?.beginner?.level_description[locale as Locales]}
                </span>
                <BulletPoint
                  category={event.category}
                  text={
                    modalContent?.intermediate?.level_title[
                      locale as Locales
                    ] || ""
                  }
                />
                <span className="mt-2">
                  {
                    modalContent?.intermediate?.level_description[
                      locale as Locales
                    ]
                  }
                </span>
              </>
            ) : (
              <ModalSkeleton />
            )}
          </div>
        </Modal>
      )}
      <div className="flex justify-between w-full h-fit">
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
          onClick={() => {
            if (!modalContent) {
              getModalContent();
            }
            setShowModal(true);
          }}
        />
      </div>
      <ImageElement
        src={urlFor(event.image.image.image.asset._ref).url()}
        alt={event.image.title}
        className="h-[500px] w-full mt-16"
        objectPosition={event.image.objectPosition}
      />
      <div className="font-noto-sans text-lg mt-16 px-14">
        {event?.description[locale as Locales]}
      </div>
      <div className="flex items-center justify-between px-14 mt-16">
        <MentorIdentifier
          _id={event.mentor.mentor._id}
          image={{
            src: urlFor(
              event.mentor.mentor.image.mentor_image.image.asset._ref
            ).url(),
            alt: event?.mentor.mentor.image.mentor_image.title,
            objectPosition:
              event?.mentor.mentor.image.mentor_image.objectPosition,
          }}
          name={event?.mentor?.mentor?.name}
        />
        <Button
          category={event?.category}
          label={t("enrol")}
          onClick={() => {}} //TODO: Página formulário
        />
      </div>
      <div className="pt-[48px] pl-[24px] mx-14 mt-20 mb-16">
        <IconTitle
          title={t("schedule")}
          mode="chevron"
          category={event.category}
        />
      </div>
      <div className="flex flex-col gap-8 mx-14">
        {event.programation.map((scheduleElement, index) => (
          <ScheduleElement
            title={scheduleElement.description[locale as Locales]}
            duration={scheduleElement.duration}
            category={event.category}
            bullet={{ index }}
          />
        ))}
      </div>
    </main>
  );
}

const ModalSkeleton = () => (
  <div className="flex flex-col">
    <Skeleton height={35} width={613} />
    <Skeleton height={23} width={111} className="mt-5" />
    <Skeleton height={48} width={1013} className="mt-2" />
    <Skeleton height={23} width={111} className="mt-5" />
    <Skeleton height={48} width={1013} className="mt-2" />
  </div>
);

const PageSkeleton = () => (
  <div className="flex flex-col">
    <div className="flex justify-between">
      <div>
        <Skeleton height={32} width={229} />
        <Skeleton height={72} width={404} className="mt-2" />
      </div>
      <div className="flex flex-col items-end justify-end">
        <Skeleton height={72} width={118} />
        <Skeleton height={39} width={90} className="mt-2" />
        <Skeleton height={34} width={156} className="mt-2" />
      </div>
    </div>
    <Skeleton height={500} className="mt-16" />
    <Skeleton height={150} width={1130} className="mt-16 mx-14" />
    <div className="flex justify-between mx-14 mt-16">
      <div className="flex items-center">
        <Skeleton height={63} width={63} className="rounded-[50%] mr-4" />
        <Skeleton height={27} width={249} />
      </div>
      <Skeleton height={62} width={328} />
    </div>
    <Skeleton height={83} width={350} className="mt-20 mx-14 mb-16" />
    <div className="flex flex-col gap-8">
      {Array(3)
        .fill(null)
        .map(() => (
          <div className="flex items-center justify-between mx-14 mt-1">
            <Skeleton height={52} width={52} className="mr-8" />
            <Skeleton height={28} width={193} className="mr-8" />
            <Skeleton height={2}  className="mr-8" />
            <Skeleton height={35} width={100} />
          </div>
        ))}
    </div>
  </div>
);
