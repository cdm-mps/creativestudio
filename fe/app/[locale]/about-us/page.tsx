import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations("Menu");
  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <Title title={t("AboutUs")} category="business-workshop" />
    </main>
  );
}
