import { StickHead } from "@icons/StickHead";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import NewsElement from "../NewsElement/NewsElement";
import { NewsSliderProps } from "./NewsSlider.models";

const breakPoint = 1536;

const NewsSlider = ({ news }: NewsSliderProps) => {
  const t = useTranslations("Components.NewsSlider");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [elemsToRender, setElemsToRender] = useState<number[][]>([]);

  const smallScreen = window.innerWidth < breakPoint;

  useEffect(() => {
    setElemsToRender(
      news?.reduce((prev, _current, index) => {
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
      }, [] as number[][]),
    );
  }, [news, smallScreen]);

  const arrayLength = smallScreen
    ? news?.length - 1
    : elemsToRender?.length - 1;

  const numberOfDots = elemsToRender?.length <= 2 ? elemsToRender?.length : 3;

  const getActiveDot = () => {
    if (numberOfDots < 3) {
      return currentIndex;
    } else {
      const percentage = Math.round(
        ((currentIndex + 1) * 100) / elemsToRender?.length,
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
    <div className="m-3 flex flex-col">
      {smallScreen ? (
        <div className={`flex items-center justify-center`}>
          {news?.map((_new, i) => (
            <div key={i}>
              {currentIndex === i && (
                <div className="flex items-center justify-center">
                  <NewsElement {..._new} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={`flex items-center justify-center 2xl:mr-[200px]`}>
          {elemsToRender?.map((elemToRender, i) => (
            <>
              {currentIndex === i && (
                <div key={i} className="flex items-center justify-center">
                  {elemToRender?.map((position, i) => (
                    <NewsElement key={i} {...news[position]} />
                  ))}
                </div>
              )}
            </>
          ))}
        </div>
      )}
      {elemsToRender?.length > 1 && (
        <div className="mt-10 flex items-center justify-center">
          <div
            className={clsx(
              `mr-9 flex items-center`,
              currentIndex === 0
                ? "opacity-40"
                : "cursor-pointer hover:opacity-80",
            )}
            {...(!(currentIndex === 0) && { onClick: () => goToPrevious() })}
          >
            <StickHead className="h-7 w-7 rotate-90 md:h-9 md:w-9" />
            <span className="pl-4 font-league-gothic uppercase md:text-xl">
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
                      ? "h-2 w-2 opacity-100 md:h-3 md:w-3"
                      : "h-1 w-1 opacity-40 md:h-2 md:w-2 ",
                  )}
                />
              ))}
          </div>
          <div
            className={clsx(
              `ml-9 flex items-center`,
              currentIndex === arrayLength
                ? "opacity-40"
                : "cursor-pointer hover:opacity-80",
            )}
            {...(!(currentIndex === arrayLength) && {
              onClick: () => goToNext(),
            })}
          >
            <span className="pr-4 font-league-gothic uppercase md:text-xl">
              {t("next")}
            </span>
            <StickHead className="h-7 w-7 -rotate-90 md:h-9 md:w-9" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSlider;
