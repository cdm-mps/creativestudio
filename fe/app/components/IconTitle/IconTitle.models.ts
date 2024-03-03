import { Category } from "@model/Category";

export interface IconTitleProps {
  title: string;
  category: Category;
  mode: "hashtag" | "dots" | "chevron" | "exclamation";
}
