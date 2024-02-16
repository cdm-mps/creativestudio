import ImageElement from "@components/ImageElement/ImageElement";
import { MentorIdentifierProps } from "@components/MentorIdentifier/MentorIdentifierProps.models";
import Link from "next/link";

const MentorIdentifier = ({
  _id,
  image,
  name,
  previous,
}: MentorIdentifierProps) => {
  return (
    <Link
      className="flex items-center font-noto-sans text-xs gap-x-2 md:text-xl md:gap-x-4 cursor-pointer hover:opacity-80"
      href={`/mentors/${_id}`}
    >
      <ImageElement
        {...image}
        className={`h-6 w-6 md:h-16 md:w-16 ${previous && "grayscale"}`}
        rounded
      />
      <span className="line-clamp-2 w-[100px] md:w-[250px]">{name}</span>
    </Link>
  );
};

export default MentorIdentifier;
