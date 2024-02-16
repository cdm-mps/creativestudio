import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import EventElement from "../EventElement/EventElement";
import { EventGridProps } from "./EventGrid.models";

const EventGrid = ({ events }: EventGridProps) => {
  const t = useTranslations("Components.EventGrid");

  const [showAll, setShowAll] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [numOfElems, setNumOfElems] = useState(0);

  const getNumberOfElements = useCallback(() => {
    if (innerWidth > 0 && innerWidth < 640) {
      return 4;
    } else if (
      (innerWidth >= 640 && innerWidth < 768) ||
      (innerWidth >= 768 && innerWidth < 1024)
    ) {
      return 3;
    } else if (
      (innerWidth >= 1024 && innerWidth < 1280) ||
      (innerWidth >= 1280 && innerWidth < 1536)
    ) {
      return 5;
    } else if (innerWidth > 1536) {
      return 9;
    }
    return 0;
  }, [innerWidth]);

  const initialState = useCallback(() => {
    const elems = getNumberOfElements();
    if (events.length <= elems + 1) {
      setShowAll(true);
    }
    setNumOfElems(elems);
  }, [events.length, getNumberOfElements]);

  useEffect(() => {
    initialState();

    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [initialState]);

  return (
    <div className="relative mb-2 ml-auto mr-auto flex w-[191.47px] flex-wrap sm:w-[382.94px] md:w-[643.98px] lg:w-[965.97px] 2xl:w-[1609.95px]">
      {events
        .filter((_e, index) => index <= numOfElems)
        .map((event, i) => (
          <EventElement key={i} {...event} />
        ))}
      {!showAll && !loadMore && (
        <div className="absolute bottom-0 flex h-28 w-full items-end justify-center bg-line-gradient">
          <div
            className="flex cursor-pointer flex-col items-center  hover:opacity-80"
            onClick={() => setLoadMore(true)}
          >
            <span className="font-league-gothic text-sm uppercase md:text-xl">
              {t("seeMore")}
            </span>
            <RoundArrowButton arrowDirection="down" />
          </div>
        </div>
      )}
      {!showAll && loadMore && (
        <>
          {events
            .filter((_e, index) => index > numOfElems)
            .map((event, i) => (
              <EventElement key={i} {...event} />
            ))}

          <div className="absolute bottom-0 flex h-28 w-full items-end justify-center bg-line-gradient">
            <div
              className="flex cursor-pointer flex-col items-center hover:opacity-80"
              onClick={() => setLoadMore(false)}
            >
              <span className="font-league-gothic text-sm uppercase md:text-xl">
                {t("seeLess")}
              </span>
              <RoundArrowButton arrowDirection="up" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventGrid;
