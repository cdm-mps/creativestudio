import { Category } from "@model/Category";

export interface CategoryElementWithDescriptionProps {
  size: "medium";
  category: Category;
  description: string;
}

export interface CategoryElementWithoutDescriptionProps {
  size: "small";
  category: Category;
}
