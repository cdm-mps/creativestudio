import { Category } from "@model/Category";

export interface TagProps {
  label: string;
  category?: Category;
  size: "small" | "medium" | "large";
}
