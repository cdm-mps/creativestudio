import { Category } from "@model/Category";
import { ImageProps } from "../ImageElement/ImageElement.models";

export interface EventElementProps {
  _id: string;
  title: string;
  subtitle?: string;
  dates: string[];
  category: Category;
  image: ImageProps;
  disabled?: boolean;
  soldOut?: boolean;
  mentors: ImageProps[];
}
