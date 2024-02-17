"use client";
import { MentorProps } from "@/app/[locale]/mentors/[id]/Mentor.models";
import { Mentor } from "@/app/api/models/Mentor";
import { urlFor } from "@/client";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import IconTitle from "@components/IconTitle/IconTitle";
import MentorElement from "@components/Mentor/Mentor";
import MentorEventBar from "@components/MentorEventBar/MentorEventBar";
import Skeleton from "@components/Skeleton/Skeleton";
import { NotFoundBanner } from "@components/shared/NotFoundBanner/NotFoundBanner";
import { Locales } from "@model/Locales";
import { isDateInPast } from "@utils/date/isDateInPast";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MentorPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-[89px]">
      <Skeleton height={104} width={366} />
      <div className="flex gap-10">
        <Skeleton height={384} width={362} />
        <Skeleton height={384} />
      </div>
      <div className="flex flex-col gap-20">
        <Skeleton height={206} width={366} />
        <div className="flex flex-col gap-10">
          <Skeleton height={92} />
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Skeleton height={206} width={366} />
        <div className="flex flex-col gap-10">
          <Skeleton height={92} />
        </div>
      </div>
    </div>
  );
};

export default function MentorPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const [pageContent, setPageContent] = useState<MentorProps>();

  useEffect(() => {
    fetch(`/api/getMentor/${params.id}`)
      .then((res) => res.json())
      .then((data: Mentor[]) => {
        const content = data[0];
        setPageContent({
          bio: content.bio[locale as Locales],
          name: content.name,
          occupation: content.occupation[locale as Locales],
          image: {
            src: urlFor(content.image.mentor_image.src).url(),
            objectPosition: content.image.mentor_image.objectPosition,
          },
          //@ts-ignore
          previousEvents: content.event.mentor_event
            .map((event) => {
              if (isDateInPast(event.date))
                return {
                  category: event.category,
                  date: event.date,
                  title: event.title[locale as Locales],
                };
            })
            .filter((event) => event),
          //@ts-ignore
          futureEvents: content.event.mentor_event
            .map((event) => {
              if (!isDateInPast(event.date))
                return {
                  category: event.category,
                  date: event.date,
                  title: event.title[locale as Locales],
                };
            })
            .filter((event) => event),
        });
      });
  }, []);

  return (
    <main className="mx-40 mb-20 flex flex-col gap-[89px] pt-11">
      {pageContent ? (
        <>
          <BreadcrumbsTitle
            title={pageContent.name}
            category="businessWorkshops"
            breadcrumbs={[{ label: t("Menu.mentors"), url: "/mentors" }]}
          />

          <div className="flex gap-20">
            <MentorElement
              label={t(pageContent.occupation)}
              name={pageContent.name}
              image={{
                src: pageContent.image.src,
                alt: pageContent.name,
                objectPosition: pageContent.image.objectPosition,
              }}
              showName={false}
            />
            <p className="font-noto-sans text-lg">{pageContent.bio}</p>
          </div>
          <div className="mt-6 flex flex-col gap-16">
            <ArrowTitle
              title={t("CreativeWorkshop.upcomingDates")}
              category="businessWorkshops"
              subTitle={`${pageContent.futureEvents?.length} ${pageContent.futureEvents?.length === 1 ? t("Components.Mentor.eventBarSingular") : t("Components.Mentor.eventBarPlural")}`}
            />
            <div className="mb-20 flex flex-col gap-10">
              {pageContent.futureEvents &&
              pageContent.futureEvents?.length > 0 ? (
                pageContent.futureEvents?.map((event) => (
                  <MentorEventBar
                    mentor={{
                      name: pageContent.name,
                      image: {
                        src: pageContent.image.src,
                        alt: pageContent.name,
                        objectPosition: pageContent.image.objectPosition,
                      },
                    }}
                    category={event.category}
                    title={event.title}
                    date={event.date}
                    onClick={() => {}}
                  />
                ))
              ) : (
                <NotFoundBanner />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <IconTitle
              title={t("CreativeWorkshop.previous")}
              mode="dots"
              category="businessWorkshops"
            />
            <div className="flex flex-col gap-10">
              {pageContent.previousEvents &&
              pageContent.previousEvents?.length > 0 ? (
                pageContent.previousEvents?.map((event) => (
                  <MentorEventBar
                    mentor={{
                      name: pageContent.name,
                      image: {
                        src: pageContent.image.src,
                        alt: pageContent.name,
                        objectPosition: pageContent.image.objectPosition,
                      },
                    }}
                    category={event.category}
                    title={event.title}
                    date={event.date}
                    onClick={() => {}}
                  />
                ))
              ) : (
                <NotFoundBanner />
              )}
            </div>
          </div>
        </>
      ) : (
        <MentorPageSkeleton />
      )}
    </main>
  );
}
