"use client";

import { useLocale } from "next-intl";
import { locales } from "@/config";
import clsx from "clsx";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { Dot } from "@icons/Dot";
import { LocaleSwitcherProps } from "./LocaleSwitcher.models";

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const onLocaleSelect = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className={`flex flex-row" ${props.className}`}>
      {locales.map((cur: string, i, locales) => (
        <div
          key={cur}
          className="uppercase flex flex-row items-center text-xs md:text-sm"
        >
          <span
            className={clsx(
              "cursor-pointer select-none",
              locale === cur && "font-extrabold",
              isPending && "pointer-events-none text-opacity-50"
            )}
            onClick={() => onLocaleSelect(cur)}
          >
            {cur}
          </span>
          {i + 1 !== locales.length && <Dot className="mx-1 md:mx-2" />}
        </div>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
