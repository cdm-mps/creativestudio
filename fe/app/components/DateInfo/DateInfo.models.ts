import { Category } from "@model/Category";

type DateInfoSize = "xs" | "sm" | "lg";

export interface DateInfoProps {
  date: string;
  category?: Category;
  size: DateInfoSize;
}
