"use client";

import { urlFor } from "@/client";
import { StickHead } from "@assets/icons/StickHead";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BannerGrid from "@components/BannerGrid/BannerGrid";
import DateInfo from "@components/DateInfo/DateInfo";
import IconTitle from "@components/IconTitle/IconTitle";
import ImageElement from "@components/ImageElement/ImageElement";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Sponsors from "@components/Sponsors/Sponsors";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { GetHomePageOutputDto } from "../api/models/GetHomePage.models";
import { HomePageSkeleton } from "./skeleton";

export default function Home() {
  const { push } = useRouter();
  const t = useTranslations("pages.home");
  const locale = useLocale();

  const scrollRef = useRef<HTMLDivElement>(null);

  const [pageContent, setPageContent] = useState<GetHomePageOutputDto>();

  useEffect(() => {
    fetch("/api/getPages/home")
      .then((res) => res.json())
      .then((data) => setPageContent(data));
  }, []);

  const PageStructure = ({
    children,
    showRoundButton,
  }: PropsWithChildren<{ showRoundButton: boolean }>) => (
    <main className="flex flex-col pt-40 md:pt-20">
      <div className="flex h-[calc(76vh)] flex-col justify-between pb-7">
        <BannerGrid />
        {showRoundButton && (
          <div className="flex animate-bounce flex-col items-center gap-4 ">
            <p className="w-fit font-league-gothic uppercase">{t("findOut")}</p>
            <RoundArrowButton
              arrowDirection="down"
              onClick={() =>
                scrollRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            />
          </div>
        )}
      </div>
      {children}
    </main>
  );

  if (!pageContent) {
    return (
      <PageStructure showRoundButton={false}>
        <HomePageSkeleton />
      </PageStructure>
    );
  }

  return (
    <PageStructure showRoundButton={pageContent?.news.length > 0}>
      {pageContent.news.length && (
        <div ref={scrollRef} className="mx-9 flex flex-col">
          <ArrowTitle title={t("news")} category="businessWorkshops" />
          <div className="customScroll mt-8 flex overflow-x-auto scroll-smooth pb-14">
            <div className="mx-4 flex gap-14">
              {pageContent?.news.map((e) => (
                <div
                  className="group relative flex cursor-pointer flex-col hover:z-10"
                  onClick={() =>
                    push(
                      `${locale}/creative-workshops/${e.category}/event/${e._id}`,
                    )
                  }
                >
                  <ImageElement
                    src={urlFor(e.image.image.src).url()}
                    alt={e.image.image.title}
                    objectPosition={e.image.image.objectPosition}
                    className="relative h-[400px] w-[400px]"
                  />

                  <div className="absolute hidden h-[400px] w-[400px] bg-black-50 group-hover:block">
                    <div className="flex h-full items-center justify-center group-hover:animate-slideInLeft">
                      <div
                        className={`flex w-full items-center justify-center bg-${e.category} p-2`}
                      >
                        <span className="font-league-gothic text-5xl uppercase">
                          {t("explore")}
                        </span>
                        <StickHead className={"h-9 w-9 -rotate-90"} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col items-end group-hover:opacity-50">
                    <DateInfo date={e.date} size="lg" category={e.category} />
                    <div className="font-league-gothic text-4xl uppercase">
                      {e.title[locale as Locales]}
                    </div>
                    <div>{e.mentor.mentor.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {pageContent.comments.length && (
        <div className="ml-9 mr-16 mt-64 flex items-center gap-10">
          <div className="w-1/4">
            <IconTitle
              title={t("noFilters")}
              category="businessWorkshops"
              mode="hashtag"
            />
          </div>
          <div className="customScroll grid grid-flow-col grid-rows-2 gap-20 overflow-x-scroll pt-10">
            {pageContent?.comments.map((comment) => (
              <div className="flex w-[300px] flex-col gap-4">
                <div className="text-base">
                  {comment.quote[locale as Locales]}
                </div>
                <div className="font-league-gothic text-xl">
                  {comment.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="my-40 text-center">
        <CoreTitle title={t("question")} />
      </div>

      <Sponsors
        sponsors={pageContent?.sponsors.map((sponsor) => ({
          src: urlFor(sponsor.src).url(),
          alt: sponsor.name,
        }))}
      />
    </PageStructure>
  );
}
