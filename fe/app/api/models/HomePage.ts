import { ImageProps } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface NewsElement {
  title: Record<Locales, string>;
  date: string;
  category: Category;
  mentor: {
    mentor: {
      name: string;
      image: {
        mentor_image: ImageProps;
      };
    };
  };
}
export interface SponsorsElement {
  alt: string;
  src: string;
}
export interface CommentsElement {
  quote: Record<Locales, string>;
  author: string;
}

export interface HomePage {
  highlight: Record<Locales, string>;
  title: Record<Locales, string>;
  news: NewsElement[];
  comments: CommentsElement[];
  sponsors: SponsorsElement[];
}
