"use client";

import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const locale = useLocale();
  return (
    <main className="flex flex-col items-center justify-center gap-20 md:pt-20 pt-40">
      <ButtonFilter
        category={"masterclass"}
        filters={[{ isActive: false, label: "Design System" }]}
        setFilterActiveStatus={() => push(`${locale}/design-system`)}
      />
    </main>
  );
}
