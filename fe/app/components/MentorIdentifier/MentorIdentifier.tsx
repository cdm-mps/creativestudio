import ImageElement from "@components/ImageElement/ImageElement";
import { MentorIdentifierProps } from "@components/MentorIdentifier/MentorIdentifierProps.models";
import { useLocale } from "next-intl";
import Link from "next/link";

const Content = ({ image, name, previous }: MentorIdentifierProps) => {
  return (
    <>
      <ImageElement
        {...image}
        className={`h-6 w-6 md:h-16 md:w-16 ${previous && "grayscale"}`}
        rounded
      />
      <span className="line-clamp-2 w-[100px] md:w-[250px]">{name}</span>
    </>
  );
};

const MentorIdentifier = ({
  _id,
  disabled = false,
  ...props
}: MentorIdentifierProps) => {
  const locale = useLocale();
  return (
    <>
      {disabled ? (
        <div className="flex items-center gap-x-2 font-noto-sans text-xs md:gap-x-4 md:text-xl">
          <Content {...props} />
        </div>
      ) : (
        <Link
          className="flex cursor-pointer items-center gap-x-2 font-noto-sans text-xs hover:opacity-80 md:gap-x-4 md:text-xl"
          href={`/${locale}//mentors/${_id}`}
        >
          <Content {...props} />
        </Link>
      )}
    </>
  );
};

export default MentorIdentifier;
