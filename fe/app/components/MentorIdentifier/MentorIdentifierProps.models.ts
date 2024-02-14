import { ImageProps } from "@components/ImageElement/ImageElement.models";

export interface MentorIdentifierProps {
  _id?: string;
  image: ImageProps;
  name: string;
  previous?: boolean;
}
