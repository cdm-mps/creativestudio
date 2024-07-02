import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

export interface MentorEventBarProps {
  mentors: ImageProps[];
  category: Category;
  title: string;
  previous?: boolean;
  date: string[];
  soldOut?: boolean;
  onClick: () => void;
}
