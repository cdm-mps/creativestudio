import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

export interface MentorProps {
  id: string;
  name: string;
  image: ImageProps;
  category?: Category;
  label?: string;
}
