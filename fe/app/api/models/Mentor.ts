import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface Mentor {
  _id: string;
  bio: Record<Locales, string>;
  image: {
    mentor_image: {
      src: string;
      objectPosition: ObjectPosition;
    };
  };
  event: {
    mentor_event: {
      _id: string;
      category: Category;
      date: string;
      title: Record<Locales, string>;
    }[];
  };
  name: string;
  occupation: Record<Locales, string>;
}
