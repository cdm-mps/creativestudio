import { client } from "@/client";
import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import { getPublishedDataQuery } from "@utils/getPublishedDataQuery";
import { useTranslations } from "next-intl";

async function getMentor() {
  const query = getPublishedDataQuery(
    "mentor",
    "{name, occupation, bio, image}"
  );
  const data = await client.fetch(query);

  return data;
}

export default async function MasterclassPage() {
  const data = await getMentor();
  console.log(data);
  // const t = useTranslations("Categories");

  return (
    <main className="flex min-h-[calc(100vh-26vh)]">
      <div className="w-fit">
        <BreadcrumbsTitle
          title={"Masterclass"}
          // title={t("masterclass")}
          category="masterclass"
          withIcon
          breadcrumbs={[
            { label: "Creative-Workshops", url: "/creative-workshops" },
          ]}
        />
      </div>
    </main>
  );
}
