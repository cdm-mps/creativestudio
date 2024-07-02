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
  date: string[];
  category: Category;
  subcategory?: SubCategory;
  areasOfInterest?: AreaOfInterest[];
  image: { image: ImageOutputDto };
  thumbnail: { image: ImageOutputDto };
  mentors: {
    _id: string;
    name: string;
    image: { mentor_image: ImageOutputDto };
  }[];
  level?: Level;
  levels: Levels;
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
