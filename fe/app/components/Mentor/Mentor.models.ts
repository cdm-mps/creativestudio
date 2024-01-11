import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

export interface MentorProps {
  name: string;
  image: ImageProps;
  category?: Category;
  eventCount?: number;
  onClick?: () => void;
}
