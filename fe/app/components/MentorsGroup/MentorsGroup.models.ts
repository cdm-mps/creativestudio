import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";

export interface MentorsGroupProps {
  mentors: ImageProps[];
  size: MentorsGroupSize;
  category: Category;
  disabled?: boolean;
  type?: "primary" | "secondary";
}

export type MentorsGroupSize = "small" | "large";
