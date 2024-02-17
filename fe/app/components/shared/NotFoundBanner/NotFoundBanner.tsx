import { useTranslations } from "next-intl";

export const NotFoundBanner = () => {
  const t = useTranslations("Components.NotFound");
  return (
    <div className="flex h-32 w-full items-center justify-center bg-not-found-disclaimer">
      <span className="font-league-gothic text-2xl">{t("noEvents")}</span>
    </div>
  );
};
