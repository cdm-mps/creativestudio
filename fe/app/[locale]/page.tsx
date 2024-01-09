"use client";

import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const locale = useLocale();
  return (
    <main className="flex flex-col min-h-[calc(100vh-26vh)] md:min-h-[calc(100vh-23vh)] items-center justify-center gap-20">
      <ButtonFilter
        category={"masterclass"}
        filters={[{ isActive: false, label: "Design System" }]}
        setFilterActiveStatus={() => push(`${locale}/design-system`)}
      />
    </main>
  );
}
