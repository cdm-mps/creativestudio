import { useLocale, useTranslations } from "next-intl";

export interface OptionProps {
  text: string;
  label: string;
  href: string;
}

export const getMenuOptions = () => {
  const locale = useLocale();
  const t = useTranslations("Menu");

  const options: OptionProps[] = [
    {
      text: t("CreativeWorkshops"),
      label: "Go to Creative Workshops page",
      href: `/${locale}/creative-workshops`,
    },
    {
      text: t("BusinessWorkshops"),
      label: "Go to Business Workshops page",
      href: `/${locale}/business-workshops`,
    },
    {
      text: t("Mentors"),
      label: "Go to Mentors page",
      href: `/${locale}/mentors`,
    },
    {
      text: t("Calendar"),
      label: "Go to Calendar page",
      href: `/${locale}/calendar`,
    },
    {
      text: t("AboutUs"),
      label: "Go to About us page",
      href: `/${locale}/about-us`,
    },
    {
      text: t("Contacts"),
      label: "Go to Contacts page",
      href: `/${locale}/contacts`,
    },
  ];

  return options;
};
