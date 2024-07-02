"use client";

import { useLocale } from "next-intl";
import { locales } from "@/config";
import clsx from "clsx";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { Dot } from "@icons/Dot";
import { LocaleSwitcherProps } from "./LocaleSwitcher.models";
import { Locales } from "@model/Locales";

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const onLocaleSelect = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locales });
    });
  };

  return (
    <div className={`flex-row" flex ${props.className} font-league-gothic `}>
      {locales.map((cur: string, i, locales) => (
        <div
          key={cur}
          className="flex flex-row items-center text-xs uppercase md:text-lg"
        >
          <span
            className={clsx(
              "cursor-pointer select-none",
              locale === cur && "underline",
              isPending && "pointer-events-none text-opacity-50",
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
