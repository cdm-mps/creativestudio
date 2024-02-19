import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";
import { Category } from "@model/Category";

export interface GetHomePageOutputDto {
  news: New[];
  comments: Quote[];
  sponsors: Sponsor[];
}

export interface New {
  _id: string;
  title: Record<Locales, string>;
  category: Category;
  date: string;
  image: {
    image: ImageOutputDto;
  };
  mentor: {
    mentor: {
      name: string;
    };
  };
}

export interface Quote {
  quote: Record<Locales, string>;
  author: string;
}

export interface Sponsor {
  name: string;
  src: string;
}
