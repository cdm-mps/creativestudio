import { Locales } from "@model/Locales";

export interface GetBusinessWorkshopsPageOutputDto {
  isWIP: boolean;
  highlight: Record<Locales, string>;
  description: Record<Locales, string>;
  workshops: BusinessWorkshop[];
}

export interface BusinessWorkshop {
  title: Record<Locales, string>;
  description: Record<Locales, string>;
  src: string;
  subcategories: Record<Locales, string>[];
}
