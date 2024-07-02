import { Category } from "@model/Category";
import { DateFormat } from "@utils/date/formatDate";

type DateInfoSize = "xs" | "sm" | "lg";

export interface DateInfoProps {
  dates: string[];
  category?: Category;
  size: DateInfoSize;
}

export interface DateElementProps {
  date: DateFormat;
  category?: Category;
  size: DateInfoSize;
}
