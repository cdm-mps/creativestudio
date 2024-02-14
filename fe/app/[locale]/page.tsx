"use client";

import BeneditaPereira from "@assets/images/BeneditaPereira.png";
import CarolinaLeite from "@assets/images/CarolinaLeite.png";
import fb from "@assets/images/fb.png";
import hbo from "@assets/images/hbo.png";
import nos from "@assets/images/nos.png";
import vercel from "@assets/images/vercel.png";
import ArrowTitle from "@components/ArrowTitle/ArrowTitle";
import BannerGrid from "@components/BannerGrid/BannerGrid";
import IconTitle from "@components/IconTitle/IconTitle";
import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { NewsElementProps } from "@components/NewsElement/NewsElement.models";
import NewsSlider from "@components/NewsSlider/NewsSlider";
import { QuoteElementProps } from "@components/Quote/Quote.models";
import QuoteSlider from "@components/Quote/QuoteSlider";
import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import Sponsors from "@components/Sponsors/Sponsors";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  const t = useTranslations("pages.home");

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

  const news: NewsElementProps[] = [
    {
      title: "Lorem ipsum sit",
      date: "2024-01-01",
      image: {
        src: BeneditaPereira,
        alt: "",
        objectPosition: "center top",
      },
      category: "masterclasses",
      highlight: "Pedro Nolasco",
    },
    {
      title: "Tentativa Erro Tentativa",
      date: "2024-04-22",
      image: {
        src: CarolinaLeite,
        alt: "",
        objectPosition: "center top",
      },
      category: "workshops",
      highlight: "Herman José",
    },
    {
      title: "Tentativa Erro Tentativa",
      date: "2024-04-22",
      image: {
        src: BeneditaPereira,
        alt: "",
        objectPosition: "center top",
      },
      category: "workshops",
      highlight: "Herman José",
    },

    {
      title: "Tentativa Erro Tentativa",
      date: "2024-04-22",
      image: {
        src: BeneditaPereira,
        alt: "",
        objectPosition: "center top",
      },
      category: "workshops",
      highlight: "Herman José 2",
    },
  ];

  const quotes: QuoteElementProps[] = [
    {
      content: <span>Lorem ipsum dolor sit amet, Lorem ipsum sit amet.</span>,
      author: "Person A",
    },
    {
      content: <span>Lorem ipsum dolor sit amet</span>,
      author: "Person A",
    },
    {
      content: <span>Lorem ipsum dolor sit amet</span>,
      author: "Person A",
    },
    {
      content: <span>Lorem ipsum dolor sit amet, Lorem ipsum sit amet.</span>,
      author: "Person A",
    },
  ];

  return (
    <main className="flex flex-col md:pt-20 pt-40">
      <div className="h-[calc(76vh)] flex flex-col justify-between pb-7">
        <BannerGrid images={bannerGridImages} />
        <div className="flex flex-col items-center gap-4">
          <p className="w-fit uppercase font-league-gothic">{t("findOut")}</p>
          <Link href="#news-slider-section" className="scroll-smooth">
            <RoundArrowButton arrowDirection="down" />
          </Link>
        </div>
      </div>
      <div id="news-slider-section" className="flex flex-col gap-14 pt-24">
        <ArrowTitle title="Novidades" category="businessWorkshops" />
        <NewsSlider news={news} />
      </div>
      <div className="pt-[100px] mt-[139px] w-full">
        <IconTitle
          title={t("noFilters")}
          category="businessWorkshops"
          mode="hashtag"
        />
        <div className="mt-28">
          <QuoteSlider quotes={quotes} />
        </div>
      </div>
      <div className="my-16 text-center">
        <CoreTitle title={t("question")} />
      </div>
      <div className="mb-[104px]">
        <Sponsors
          sponsors={[
            { src: fb, alt: "fb" },
            { src: nos, alt: "nos" },
            { src: vercel, alt: "vercel" },
            { src: hbo, alt: "hbo" },
          ]}
        />
      </div>
    </main>
  );
}
