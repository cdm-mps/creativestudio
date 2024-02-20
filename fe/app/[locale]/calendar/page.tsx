import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function CalendarPage() {
  const t = useTranslations("Menu");

  return (
    <main className="mx-40 flex flex-col">
      <Title title={t("calendar")} category="businessWorkshops" />
    </main>
  );
}
