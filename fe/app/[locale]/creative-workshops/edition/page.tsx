import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function EditionPage() {
  const t = useTranslations("Categories");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <BreadcrumbsTitle
          title={t("edition")}
          category="edition"
          withIcon
          breadcrumbs={[
            { label: "Creative-Workshops", url: "/creative-workshops" },
          ]}
        />
      </div>
    </main>
  );
}
