import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function MentorsPage() {
  const t = useTranslations("Menu");

  return (
    <main className="flex mx-20">
      <Title title={t("mentors")} category="businessWorkshops" />
    </main>
  );
}
