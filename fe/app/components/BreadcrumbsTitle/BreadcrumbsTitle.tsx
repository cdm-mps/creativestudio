import { BreadcrumbsTitleProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
import Divider from "@components/Divider/Divider";
import CoreTitle from "@components/shared/CoreTitle/CoreTitle";
import Link from "next/link";

const BreadcrumbsTitle = ({
  title,
  category,
  breadcrumbs,
}: BreadcrumbsTitleProps) => {
  return (
    <div className="flex gap-3 font-league-gothic">
      <Divider orientation="vertical" category={category} />
      <div>
        <div className="flex gap-2 items-center md:text-2xl text-lg">
          {breadcrumbs.map(({ label, url }, index) => (
            <>
              {index !== 0 && <p>&gt;</p>}
              <Link key={label} href={url} className="hover:underline">
                {label.toUpperCase()}
              </Link>
            </>
          ))}
        </div>
        <CoreTitle title={title} />
      </div>
    </div>
  );
};

export default BreadcrumbsTitle;
