"use client";
import { GetMentorsPageOutputDto } from "@/app/api/models/GetMentorsPage.models";
import { urlFor } from "@/client";
import { Header } from "@components/Header/Header";
import Mentor from "@components/Mentor/Mentor";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MentorsPageSkeleton } from "./skeleton";

export default function MentorsPage() {
  const locale = useLocale();
  const t = useTranslations();

  const [pageContent, setPageContent] = useState<GetMentorsPageOutputDto>();

  useEffect(() => {
    fetch("/api/getMentors")
      .then((res) => res.json())
      .then((data: GetMentorsPageOutputDto) => setPageContent(data));
  }, []);

  if (!pageContent) {
    return <MentorsPageSkeleton />;
  }

  const buildLabel = (count: number) =>
    count === 1
      ? t("Components.Mentor.eventBarSingular")
      : t("Components.Mentor.eventBarPlural");

  return (
    <main className="mx-40 flex flex-col">
      <Title title={t("Menu.mentors")} category="businessWorkshops" />
      <Header
        description={pageContent?.pageStructure.description[locale as Locales]}
      />
      <div className="flex flex-wrap justify-center gap-24">
        {pageContent.mentors.map((mentor, i) => (
          <Mentor
            key={"mentor_" + i}
            {...mentor}
            image={{
              src: urlFor(mentor.image.mentor_image.src).url(),
              alt: mentor.image.mentor_image.title,
              objectPosition: mentor.image.mentor_image.objectPosition,
            }}
            {...(mentor.eventCount > 0 && {
              label: `${mentor.eventCount} ${buildLabel(mentor.eventCount)}`,
            })}
            redirectOnClick
          />
        ))}
      </div>
    </main>
  );
}
