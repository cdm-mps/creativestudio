"use client";
import { MentorsProps } from "@/app/[locale]/mentors/Mentors.models";
import { Mentors } from "@/app/api/models/Mentors";
import { urlFor } from "@/client";
import { Header } from "@components/Header/Header";
import Mentor from "@components/Mentor/Mentor";
import Skeleton from "@components/Skeleton/Skeleton";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

//TODO: update query to get future events

const MentorsPageSkeleton = () => {
  let arr = Array.from({ length: 12 }, () => ({ height: 460, width: 362 }));
  return (
    <div className="flex flex-col">
      <Skeleton height={72} width={229} />
      <Skeleton height={140} className="my-14" />
      <div className="flex flex-wrap justify-center gap-24">
        {arr.map((skeleton, index) => (
          <Skeleton {...skeleton} key={"skl_" + index} />
        ))}
      </div>
    </div>
  );
};

export default function MentorsPage() {
  const [pageContent, setPageContent] = useState<MentorsProps>();
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    fetch("/api/getPages/mentors")
      .then((res) => res.json())
      .then((data: Mentors[]) => {
        const content = data[0];
        setPageContent({
          description: content.description[locale as Locales],
          mentors: content.mentors.map((element) => ({
            name: element.name,
            image: {
              src: urlFor(element.image.mentor_image.src).url(),
              alt: element.image.mentor_image.title,
              objectPosition: element.image.mentor_image.objectPosition,
            },
            label: element.event
              ? element.event.eventCount === 1
                ? element.event.eventCount +
                  " " +
                  t("Components.Mentor.eventBarSingular")
                : element.event.eventCount +
                  " " +
                  t("Components.Mentor.eventBarPlural")
              : null,
            id: element._id,
          })),
        } as MentorsProps);
      });
  }, []);

  return (
    <main className="flex min-h-[calc(100vh-26vh)] flex-col">
      {pageContent ? (
        <>
          <Title title={t("Menu.Mentors")} category="businessWorkshops" />
          <Header description={pageContent.description} />
          <div className="flex flex-wrap justify-center gap-24">
            {pageContent.mentors.map((element, i) => (
              <Mentor key={"mentor_" + i} {...element} />
            ))}
          </div>
        </>
      ) : (
        <MentorsPageSkeleton />
      )}
    </main>
  );
}
