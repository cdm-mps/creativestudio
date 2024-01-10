import { Category } from "@model/Category";
import { ImageProps } from "../ImageElement/ImageElement.models";

export interface NewsElementProps {
  title: string;
  highlight: string;
  date: string;
  category: Category;
  image: ImageProps;
}
