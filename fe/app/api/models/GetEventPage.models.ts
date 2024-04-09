import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Level } from "@model/Level";
import { Locales } from "@model/Locales";
import { SubCategory } from "@model/SubCategory";
import { ImageOutputDto } from "./Image.models";

export interface GetEventPageOutputDto {
  _id: string;
  title: Record<Locales, string>;
  description: Record<Locales, string>;
  date: string;
  category: Category;
  subcategory?: SubCategory;
  areasOfInterest?: AreaOfInterest[];
  image: { image: ImageOutputDto };
  mentor: {
    mentor: {
      _id: string;
      name: string;
      image: { mentor_image: ImageOutputDto };
    };
  };
  duration: string;
  schedule?: ScheduleElement[];
  level?: Level;
  levels: Levels;
  hasSubmiteVideo?: boolean;
  isSoldOut?: boolean;
}

export interface Levels {
  title: Record<Locales, string>;
  beginner: {
    level_title: Record<Locales, string>;
    level_description: Record<Locales, string>;
  };
  intermediate: {
    level_title: Record<Locales, string>;
    level_description: Record<Locales, string>;
  };
}

export interface ScheduleElement {
  description: Record<Locales, string>;
  duration: string;
}
