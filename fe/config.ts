import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "pt"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    pt: "/pathnames",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = `always`;

export type AppPathnames = keyof typeof pathnames;
