import { ImageProps } from "@components/ImageElement/ImageElement.models";

export interface MentorProps {
  _id: string;
  name?: string;
  image: ImageProps;
  label?: string;
  redirectOnClick?: boolean;
}
