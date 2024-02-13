import { Category } from "@model/Category";
import { ImageProps } from "../ImageElement/ImageElement.models";

export interface EventElementProps {
  _id: string;
  title: string;
  subtitle: string;
  date: string;
  category: Category;
  image: ImageProps;
  disabled?: boolean;
}
