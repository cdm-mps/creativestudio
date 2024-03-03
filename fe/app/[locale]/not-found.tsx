"use client";

import Button from "@components/Button/Button";
import CategoryElement from "@components/CategoryElement/CategoryElement";
import IconTitle from "@components/IconTitle/IconTitle";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { push } = useRouter();
  const t = useTranslations("NotFound");
  return (
    <div className=" flex h-[calc(100vh-290px)] flex-col items-center justify-center gap-20 font-league-gothic">
      <div className="flex flex-col items-center justify-center gap-5">
        <IconTitle
          title={t("title")}
          category="businessWorkshops"
          mode="exclamation"
        />
        <div className="text-lg md:text-3xl">{t("subtitle")}</div>
      </div>
      <Button
        category={"businessWorkshops"}
        label={t("button")}
        onClick={() => {
          push(`/`);
        }}
      />

      {/* <div className="flex items-center justify-center ">
        <CategoryElement category="editions" size="small" />
        <CategoryElement category="masterclasses" size="small" />
        <CategoryElement category="creativeTalks" size="small" />
        <CategoryElement category="workshops" size="small" />
        <CategoryElement category="artisticResidences" size="small" />
      </div> */}
    </div>
  );
}
