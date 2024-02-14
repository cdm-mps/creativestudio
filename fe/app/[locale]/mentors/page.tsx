"use client";
import { MentorsProps } from "@/app/[locale]/mentors/Mentors.models";
import { Mentors } from "@/app/api/models/Mentors";
import { urlFor } from "@/client";
import { Header } from "@components/Header/Header";
import Mentor from "@components/Mentor/Mentor";
import Title from "@components/Title/Title";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function MentorsPage() {
  const [pageContent, setPageContent] = useState<MentorsProps>();
  const locale = useLocale();
  const t = useTranslations("Menu");

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
            eventCount: element.event?.eventCount,
            id: element._id,
          })),
        } as MentorsProps);
      });
  }, []);

  return (
    <main className="flex flex-col min-h-[calc(100vh-26vh)]">
      <Title title={t("Mentors")} category="businessWorkshops" />
      {pageContent && (
        <>
          <Header description={pageContent.description} />
          <div className="flex flex-wrap gap-24 justify-center">
            {pageContent.mentors.map((element, i) => (
              <Mentor key={"mentor_" + i} {...element} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
