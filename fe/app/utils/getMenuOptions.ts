"use client";
import { useLocale, useTranslations } from "next-intl";

export interface OptionProps {
  text: string;
  label: string;
  href: string;
}

export const getMenuOptions = (locale: string, t: any) => {
  const options: OptionProps[] = [
    {
      text: t("creativeWorkshops"),
      label: "Go to Creative Workshops page",
      href: `/${locale}/creative-workshops`,
    },
    {
      text: t("businessWorkshops"),
      label: "Go to Business Workshops page",
      href: `/${locale}/business-workshops`,
    },
    {
      text: t("mentors"),
      label: "Go to Mentors page",
      href: `/${locale}/mentors`,
    },
    {
      text: t("calendar"),
      label: "Go to Calendar page",
      href: `/${locale}/calendar`,
    },
    {
      text: t("aboutUs"),
      label: "Go to About us page",
      href: `/${locale}/about-us`,
    },
    {
      text: t("contacts"),
      label: "Go to Contacts page",
      href: `/${locale}/contacts`,
    },
  ];

  return options;
};
