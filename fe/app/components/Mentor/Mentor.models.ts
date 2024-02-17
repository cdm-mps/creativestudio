import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

export interface MentorProps {
  name: string;
  image: ImageProps;
  category?: Category;
  label?: string;
  onClick?: () => void;
  showName?: boolean;
}
