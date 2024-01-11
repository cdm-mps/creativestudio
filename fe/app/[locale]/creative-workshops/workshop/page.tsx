import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function WorkshopPage() {
  const t = useTranslations("Categories");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <Title title={t("workshop")} category="workshop" />
      </div>
    </main>
  );
}
