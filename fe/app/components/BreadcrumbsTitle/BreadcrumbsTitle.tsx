import { BreadcrumbsTitleProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
import Divider from "@components/Divider/Divider";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import { categoriesDictionary } from "@utils/categoriesDictionary";
import clsx from "clsx";
import { useLocale } from "next-intl";
import Link from "next/link";

const BreadcrumbsTitle = ({
  title,
  category,
  breadcrumbs,
  withIcon = false,
}: BreadcrumbsTitleProps) => {
  const locale = useLocale();
  return (
    <div>
      <div className="flex gap-3 font-league-gothic">
        <Divider orientation="vertical" category={category} />
        <div className="flex flex-col items-start">
          <div className="flex gap-2 items-center md:text-2xl text-sm">
            {breadcrumbs?.map(({ label, url }, index) => (
              <>
                {index !== 0 && <p>&gt;</p>}
                <Link
                  key={label}
                  href={`/${locale}${url}`}
                  className="hover:underline uppercase"
                >
                  {label}
                </Link>
              </>
            ))}
          </div>
          <div className="flex items-center justify-center md:gap-6 gap-3">
            <CoreTitle title={title} category={category} />
            {withIcon && categoriesDictionary[category]("max-md:w-4 h-auto")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbsTitle;
