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
import MentorsGroup from "@components/MentorsGroup/MentorsGroup";
import { getEventStatus } from "@utils/getEventStatus";
import { Tag } from "@components/Tag/Tag";

export default function Home() {
  const { push } = useRouter();
  const t = useTranslations("pages.home");
  const locale = useLocale();

  const scrollRef = useRef<HTMLDivElement>(null);

  const [pageContent, setPageContent] = useState<GetHomePageOutputDto>();

  useEffect(() => {
    fetch("/api/getPages/home")
      .then((res) => res.json())
      .then((data: GetHomePageOutputDto) =>
        setPageContent({
          ...data,
          news: data.news.filter((e) => {
            const status = getEventStatus(e.date, e.isSoldOut);
            return status === "available" || status === "soldOut";
          }),
        }),
      );
  }, []);

  const PageStructure = ({
    children,
    showRoundButton,
  }: PropsWithChildren<{ showRoundButton: boolean }>) => (
    <main className="pt-30 flex flex-col md:pt-20">
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
      {pageContent.news.length > 0 && (
        <div ref={scrollRef} className="mx-9 flex flex-col max-md:mt-10">
          <ArrowTitle title={t("news")} category="businessWorkshops" />
          <div className="customScroll mt-8 flex overflow-x-auto scroll-smooth pb-14">
            <div className="mx-4 flex gap-10 md:gap-14">
              {pageContent?.news.map((e) => {
                return (
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
                      className="relative h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
                    />

                    {e.isSoldOut && (
                      <div className="absolute h-[200px] w-[200px] bg-black-50 group-hover:hidden md:h-[400px] md:w-[400px]">
                        <div className="flex h-full items-center justify-center">
                          <div className="rotate flex h-[63px] -rotate-12 items-center justify-center">
                            <Tag
                              label={t("soldOutEvent")}
                              size="large"
                              category={e.category}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute max-md:hidden">
                      <div className="absolute hidden h-[400px] bg-black-50 group-hover:block md:w-[400px]">
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
                    </div>

                    <div className="mt-3 flex flex-col items-end md:group-hover:opacity-50">
                      <DateInfo
                        dates={e.date}
                        size="lg"
                        category={e.category}
                      />
                      <div className="text-right font-league-gothic text-2xl uppercase md:text-4xl">
                        {e.title[locale as Locales]}
                      </div>
                      <MentorsGroup
                        mentors={e.mentors.map((mentor) => ({
                          src: urlFor(mentor.image.mentor_image.src).url(),
                          alt: mentor.image.mentor_image.title,
                          objectPosition:
                            mentor.image.mentor_image.objectPosition,
                        }))}
                        category={e.category}
                        size="small"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {pageContent.comments.length > 0 && (
        <div className="ml-4 mr-8 mt-32 flex items-center gap-3 max-md:flex-col md:ml-9 md:mr-16 md:mt-64 md:gap-10">
          <div className="w-1/4">
            <IconTitle
              title={t("noFilters")}
              category="businessWorkshops"
              mode="hashtag"
            />
          </div>
          <div className="customScroll grid w-3/4 grid-flow-col grid-rows-2 gap-10 overflow-x-scroll pt-10 md:gap-20">
            {pageContent?.comments.map((comment) => (
              <div className="flex w-[250px] flex-col gap-4 md:w-[300px]">
                <div className="text-sm md:text-base">
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

      <div className="my-24 text-center md:my-40">
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
