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
      className="flex items-center font-lato text-xs gap-x-2 md:text-xl md:gap-x-4 cursor-pointer"
      onClick={onClick}
    >
      <ImageElement
        {...image}
        className={`w-6 h-6 md:w-16 md:h-16 ${previous && "grayscale"}`}
        rounded
      />
      <span className="line-clamp-2 w-[100px] md:w-[250px]">{name}</span>
    </div>
  );
};

export default MentorIdentifier;
