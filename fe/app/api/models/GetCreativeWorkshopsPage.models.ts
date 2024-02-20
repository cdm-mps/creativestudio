import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface GetCreativeWorkshopsPageOutputDto {
  highlight: Record<Locales, string>;
  description: Record<Locales, string>;
  elementDescription: Record<Category, Record<Locales, string>>;
}
