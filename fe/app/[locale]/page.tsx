"use client";

import { HomePageProps } from "@/app/[locale]/HomePage.models";
import { HomePage } from "@/app/api/models/HomePage";
import { urlFor } from "@/client";
import BeneditaPereira from "@assets/images/BeneditaPereira.png";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BannerGrid from "@components/BannerGrid/BannerGrid";
import IconTitle from "@components/IconTitle/IconTitle";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
import NewsSlider from "@components/NewsSlider/NewsSlider";
import QuoteSlider from "@components/Quote/QuoteSlider";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Sponsors from "@components/Sponsors/Sponsors";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { Locales } from "@model/Locales";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const t = useTranslations("pages.home");
  const locale = useLocale();

  const [pageContent, setPageContent] = useState<HomePageProps>();

  const bannerGridImages: ImageProps[] = [
    {
      src: CarolinaLeite,
      alt: "Text 1",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 2",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 3",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 4",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 5",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 6",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 7",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 8",
      objectPosition: "center top",
    },
    {
      src: CarolinaLeite,
      alt: "Text 9",
      objectPosition: "center top",
    },
    {
      src: CarolinaLeite,
      alt: "Text 10",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 11",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 12",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 13",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 14",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 15",
      objectPosition: "center top",
    },

    {
      src: BeneditaPereira,
      alt: "Text 16",
      objectPosition: "center top",
    },

    {
      src: CarolinaLeite,
      alt: "Text 17",
      objectPosition: "center top",
    },
    {
      src: BeneditaPereira,
      alt: "Text 18",
      objectPosition: "center top",
    },
  ];

  useEffect(() => {
    fetch("/api/getPages/homepage")
      .then((res) => res.json())
      .then((data) => {
        const content: HomePage = data[0];
        setPageContent({
          title: content.title[locale as Locales],
          highlight: content.highlight[locale as Locales],
          news: content.news.map((element) => ({
            title: element.title[locale as Locales],
            highlight: element.mentor.mentor.name,
            date: element.date,
            category: element.category,
            image: {
              ...element.mentor.mentor.image.mentor_image,
              src: urlFor(element.mentor.mentor.image.mentor_image.src).url(),
            },
            onClick: () => console.log("pressed"),
          })),
          quotes: content.comments.map((element) => ({
            author: element.author,
            content: element.quote[locale as Locales],
          })),
          sponsors: content.sponsors.map((element) => ({
            src: element.src,
            alt: element.alt,
            width: element.dimensions.metadata.dimensions.width,
            height: element.dimensions.metadata.dimensions.height,
          })),
        });
      });
  }, []);

  return (
    <main className="flex flex-col md:pt-20 pt-40">
      <div className="h-[calc(76vh)] flex flex-col justify-between pb-7">
        <BannerGrid images={bannerGridImages} title={pageContent?.title!} />
        <div className="flex flex-col items-center gap-4">
          <p className="w-fit uppercase font-league-gothic">{t("findOut")}</p>
          <Link href="#news-slider-section" className="scroll-smooth">
            <RoundArrowButton arrowDirection="down" />
          </Link>
        </div>
      </div>
      <div
        id="news-slider-section"
        className="mx-14 flex flex-col gap-14 pt-24"
      >
        <ArrowTitle title="Novidades" category="businessWorkshops" />
        <NewsSlider news={pageContent?.news!} />
      </div>
      <div className="pt-[100px] mt-[139px] w-full">
        <IconTitle
          title={t("noFilters")}
          category="businessWorkshops"
          mode="hashtag"
        />
        <div className="mt-28">
          <QuoteSlider quotes={pageContent?.quotes!} />
        </div>
      </div>
      <div className="my-16 text-center">
        <CoreTitle title={t("question")} />
      </div>
      <div className="mb-[104px]">
        <Sponsors sponsors={pageContent?.sponsors!} />
      </div>
    </main>
  );
}
