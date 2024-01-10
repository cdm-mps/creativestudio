import React from "react";
import QuoteElement from "@components/Quote/QuoteElement";
import { useTranslations } from "next-intl";

const Acknowledgements = () => {
  const t = useTranslations("Components.Acknowledgements");
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-league-gothic uppercase text-3xl md:text-7xl">
        {t("title")}
      </span>
      <span className="font-lato italic text-sm md:text-base mt-8 md:mt-14 text-center">
        {t("subtitle1")}
      </span>
      <QuoteElement
        className="w-[300px] md:w-[900px] mt-4"
        content={
          <div className="font-lato text-lg md:text-3xl italic">
            {t("quote")}
          </div>
        }
      />
      <span className="text-center whitespace-pre-line text-sm md:text-base font-lato mt-4">
        {t("subtitle2")}
      </span>
    </div>
  );
};

export default Acknowledgements;
