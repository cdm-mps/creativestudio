import ImageElement from "@components/ImageElement/ImageElement";
import { MentorIdentifierProps } from "@components/MentorIdentifier/MentorIdentifierProps.models";

const MentorIdentifier = ({
  image,
  name,
  previous,
  onClick,
}: MentorIdentifierProps) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-2 font-noto-sans text-xs md:gap-x-4 md:text-xl"
      onClick={onClick}
    >
      <ImageElement
        {...image}
        className={`h-6 w-6 md:h-16 md:w-16 ${previous && "grayscale"}`}
        rounded
      />
      <span className="line-clamp-2 w-[100px] md:w-[250px]">{name}</span>
    </div>
  );
};

export default MentorIdentifier;
