import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function BusinessWorkshopPage() {
  const t = useTranslations("Categories");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <BreadcrumbsTitle
          title={t("business-workshop")}
          category="business-workshop"
          withIcon
          breadcrumbs={[
            { label: "Creative-Workshops", url: "/creative-workshops" },
          ]}
        />
      </div>
    </main>
  );
}