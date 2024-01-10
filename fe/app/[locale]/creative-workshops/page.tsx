import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function CreativeWorkshopsPage() {
  const t = useTranslations("Menu");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <Title title={t("CreativeWorkshops")} category="business-workshop" />
      </div>
    </main>
  );
}
