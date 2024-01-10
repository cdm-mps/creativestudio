import { ImageProps } from "@components/ImageElement/ImageElement.models";

export interface MentorIdentifierProps {
  image: ImageProps;
  name: string;
  past?: boolean;
  onClick?: () => void;
}
