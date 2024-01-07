import { BreadcrumbsTitleProps } from "@components/BreadcrumbsTitle/BreadcrumbsTitleProps.models";
import Divider from "@components/Divider/Divider";
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
        <h2 className={`text-5xl md:text-7xl text-${category}`}>
          {title.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default BreadcrumbsTitle;
