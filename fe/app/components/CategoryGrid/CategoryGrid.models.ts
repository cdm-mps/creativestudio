import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface CategoryGridProps {
  elements: Record<Category, Record<Locales, string>>;
}
