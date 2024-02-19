"use client";

import { urlFor } from "@/client";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BannerGrid from "@components/BannerGrid/BannerGrid";
import IconTitle from "@components/IconTitle/IconTitle";
import NewsSlider from "@components/NewsSlider/NewsSlider";
import QuoteSlider from "@components/Quote/QuoteSlider";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Sponsors from "@components/Sponsors/Sponsors";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { GetHomePageOutputDto } from "../api/models/GetHomePage.models";
import { HomePageSkeleton } from "./skeleton";

export default function Home() {
  const { push } = useRouter();
  const t = useTranslations("pages.home");
  const locale = useLocale();

  const [pageContent, setPageContent] = useState<GetHomePageOutputDto>();

  useEffect(() => {
    fetch("/api/getPages/home")
      .then((res) => res.json())
      .then((data) => setPageContent(data));
  }, []);

  const PageStructure = ({ children }: PropsWithChildren) => (
    <main className="flex flex-col pt-40 md:pt-20">
      <div className="flex h-[calc(76vh)] flex-col justify-between pb-7">
        <BannerGrid />
        <div className="flex flex-col items-center gap-4">
          <p className="w-fit font-league-gothic uppercase">{t("findOut")}</p>
          <Link href="#news-slider-section" className="scroll-smooth">
            <RoundArrowButton arrowDirection="down" />
          </Link>
        </div>
      </div>
      {children}
    </main>
  );

  if (!pageContent) {
    return (
      <PageStructure>
        <HomePageSkeleton />
      </PageStructure>
    );
  }

  return (
    <PageStructure>
      <div
        id="news-slider-section"
        className="mx-40 flex flex-col gap-14 pt-24"
      >
        <ArrowTitle title={t("news")} category="businessWorkshops" />
        <NewsSlider
          news={pageContent?.news.map((_new) => ({
            title: _new.title[locale as Locales],
            highlight: _new.mentor.mentor.name,
            date: _new.date,
            category: _new.category,
            image: {
              src: urlFor(_new.image.image.src).url(),
              alt: _new.image.image.title,
              objectPosition: _new.image.image.objectPosition,
            },
            onClick: () =>
              push(
                `${locale}/creative-workshops/${_new.category}/event/${_new._id}`,
              ),
          }))}
        />
      </div>
      <div className="mt-[139px] w-full pt-[100px]">
        <div className="mx-40">
          <IconTitle
            title={t("noFilters")}
            category="businessWorkshops"
            mode="hashtag"
          />
        </div>
        <div className="mx-40 pt-48">
          <QuoteSlider
            quotes={pageContent?.comments.map((comment) => ({
              content: comment.quote[locale as Locales],
              author: comment.author,
            }))}
          />
        </div>
      </div>
      <div className="my-48 text-center">
        <CoreTitle title={t("question")} />
      </div>
      <div className="mb-[104px]">
        <Sponsors
          sponsors={pageContent?.sponsors.map((sponsor) => ({
            src: urlFor(sponsor.src).url(),
            alt: sponsor.name,
          }))}
        />
      </div>
    </PageStructure>
  );
}
