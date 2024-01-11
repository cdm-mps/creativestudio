import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function ArtisticResidencePage() {
  const t = useTranslations("Categories");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <Title title={t("artistic-residence")} category="artistic-residence" />
      </div>
    </main>
  );
}
