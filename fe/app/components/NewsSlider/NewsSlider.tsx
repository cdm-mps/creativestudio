import React from "react";
import { StickHead } from "@icons/StickHead";
import clsx from "clsx";
import { useEffect, useState } from "react";
import NewsElement from "../NewsElement/NewsElement";
import { NewsElementProps } from "../NewsElement/NewsElement.models";
import { useTranslations } from "next-intl";

const breakPoint = 1536;

const NewsSlider = ({ news }: { news: NewsElementProps[] }) => {
  const t = useTranslations("Components.NewsSlider");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [elemsToRender, setElemsToRender] = useState<number[][]>([]);

  const smallScreen = window.innerWidth < breakPoint;

  useEffect(() => {
    setElemsToRender(
      news.reduce((prev, _current, index) => {
        if (smallScreen) {
          prev.push([index]);
        } else {
          if (index % 2 === 0) {
            if (news[index + 1]) {
              prev.push([index, index + 1]);
            } else {
              prev.push([index]);
            }
          }
        }
        return prev;
      }, [] as number[][])
    );
  }, [news, smallScreen]);

  const arrayLength = smallScreen ? news.length - 1 : elemsToRender.length - 1;

  const numberOfDots = elemsToRender.length <= 2 ? elemsToRender.length : 3;

  const getActiveDot = () => {
    if (numberOfDots < 3) {
      return currentIndex;
    } else {
      const percentage = Math.round(
        ((currentIndex + 1) * 100) / elemsToRender.length
      );
      return percentage <= 33 ? 0 : percentage <= 67 ? 1 : 2;
    }
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? arrayLength : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === arrayLength;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col m-3">
      {smallScreen ? (
        <div className={`flex justify-center items-center`}>
          {news.map((_new, i) => (
            <>
              {currentIndex === i && (
                <div key={i} className="flex justify-center items-center">
                  <NewsElement {..._new} />
                </div>
              )}
            </>
          ))}
        </div>
      ) : (
        <div className={`flex justify-center items-center 2xl:mr-[200px]`}>
          {elemsToRender.map((elemToRender, i) => (
            <>
              {currentIndex === i && (
                <div key={i} className="flex justify-center items-center">
                  {elemToRender.map((position, i) => (
                    <NewsElement key={i} {...news[position]} />
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      )}
      {elemsToRender.length > 1 && (
        <div className="flex items-center justify-center mt-10">
          <div
            className={clsx(
              `flex items-center mr-9`,
              currentIndex === 0
                ? "opacity-40"
                : "cursor-pointer hover:opacity-80"
            )}
            {...(!(currentIndex === 0) && { onClick: () => goToPrevious() })}
          >
            <StickHead className="w-7 h-7 md:w-9 md:h-9 rotate-90" />
            <span className="font-league-gothic md:text-xl uppercase pl-4">
              {t("previous")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {Array(numberOfDots)
              .fill(null)
              .map((_e, i) => (
                <div
                  key={i}
                  className={clsx(
                    " bg-white",
                    getActiveDot() === i
                      ? "opacity-100 h-2 w-2 md:h-3 md:w-3"
                      : "opacity-40 h-1 w-1 md:h-2 md:w-2 "
                  )}
                />
              ))}
          </div>
          <div
            className={clsx(
              `flex items-center ml-9`,
              currentIndex === arrayLength
                ? "opacity-40"
                : "cursor-pointer hover:opacity-80"
            )}
            {...(!(currentIndex === arrayLength) && {
              onClick: () => goToNext(),
            })}
          >
            <span className="font-league-gothic md:text-xl uppercase pr-4">
              {t("next")}
            </span>
            <StickHead className="w-7 h-7 md:w-9 md:h-9 -rotate-90" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSlider;
