import RoundArrowButton from "@components/RoundArrowButton/RoundArrowButton";
import { useCallback, useEffect, useState } from "react";
import EventElement from "../EventElement/EventElement";
import { EventElementProps } from "../EventElement/EventElement.models";
import { useTranslations } from "next-intl";

const EventGrid = ({ events }: { events: EventElementProps[] }) => {
  const t = useTranslations("Components.EventGrid");

  const [showAll, setShowAll] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [numOfElems, setNumOfElems] = useState(0);

  const getNumberOfElements = useCallback(() => {
    if (innerWidth > 0 && innerWidth < 640) {
      return 4;
    } else if (innerWidth >= 640 && innerWidth < 768) {
      return 3;
    } else if (innerWidth >= 768 && innerWidth < 1024) {
      return 3;
    } else if (innerWidth >= 1024 && innerWidth < 1280) {
      return 5;
    } else if (innerWidth >= 1280 && innerWidth < 1536) {
      return 5;
    } else if (innerWidth > 1536) {
      return 9;
    }
    return 0;
  }, [innerWidth]);

  const init = useCallback(() => {
    const elems = getNumberOfElements();
    if (events.length <= elems + 1) {
      setShowAll(true);
    }
    setNumOfElems(elems);
  }, [events.length, getNumberOfElements]);

  useEffect(() => {
    init();

    const handleWindowResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [init]);

  return (
    <div className="flex flex-wrap relative ml-auto mr-auto w-[191.47px] sm:w-[382.94px] md:w-[643.98px] lg:w-[965.97px] 2xl:w-[1609.95px] mb-2">
      {events
        .filter((_e, index) => index <= numOfElems)
        .map((event, i) => (
          <EventElement key={i} {...event} />
        ))}
      {!showAll && !loadMore && (
        <div className="flex items-end justify-center h-28 w-full absolute bottom-0 bg-line-gradient">
          <div
            className="flex flex-col items-center cursor-pointer  hover:opacity-80"
            onClick={() => setLoadMore(true)}
          >
            <span className="font-league-gothic text-sm md:text-xl uppercase">
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

          <div className="flex items-end justify-center h-28 w-full absolute bottom-0 bg-line-gradient">
            <div
              className="flex flex-col items-center cursor-pointer hover:opacity-80"
              onClick={() => setLoadMore(false)}
            >
              <span className="font-league-gothic text-sm md:text-xl uppercase">
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
