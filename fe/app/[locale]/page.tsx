"use client";

import ButtonFilter from "@components/ButtonFilter/ButtonFilter";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  const locale = useLocale();

  useEffect(() => {
    fetch("/api/getMentors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-20 md:pt-20 pt-40 overflow-hidden">
      <ButtonFilter
        category={"masterclasses"}
        filters={[{ isActive: false, label: "Design System" }]}
        setFilterActiveStatus={() => push(`${locale}/design-system`)}
      />
    </main>
  );
}
