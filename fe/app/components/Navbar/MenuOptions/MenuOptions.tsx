import { MenuOptionsProps } from "@components/Navbar/MenuOptions/MenuOptions.models";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MenuOptions = ({ onClick }: MenuOptionsProps) => {
  const locale = useLocale();
  const t = useTranslations("Menu");
  return (
    <>
      <Link
        href={`/${locale}/creative-workshops`}
        aria-label="Go to Creative Workshops page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("CreativeWorkshops")}
      </Link>
      <Link
        href={`/${locale}/business-workshops`}
        aria-label="Go to Business Workshops page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("BusinessWorkshops")}
      </Link>
      <Link
        href={`/${locale}/mentors`}
        aria-label="Go to Mentors page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("Mentors")}
      </Link>
      <Link
        href={`/${locale}/calendar`}
        aria-label="Go to Calendar page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("Calendar")}
      </Link>
      <Link
        href={`/${locale}/about-us`}
        aria-label="Go to About us page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("AboutUs")}
      </Link>
      <Link
        href={`/${locale}/contacts`}
        aria-label="Go to Contacts page"
        onClick={onClick}
        className="hover:underline hover:decoration-business-workshop max-md:border-t max-md:border-b max-md:w-full max-md:text-center max-md:py-4"
      >
        {t("Contacts")}
      </Link>
    </>
  );
};

export default MenuOptions;
