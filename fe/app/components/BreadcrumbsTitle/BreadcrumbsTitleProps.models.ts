import { Category } from "@model/Category";

export interface BreadcrumbsProps {
  label: string;
  url: string;
}

export interface BreadcrumbsTitleProps {
  title: string;
  category: Category;
  withIcon?: boolean;
  breadcrumbs: BreadcrumbsProps[];
}
