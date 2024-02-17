import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface DetailsProps {
  content: { label: string; value: string }[];
  category: Category;
}
