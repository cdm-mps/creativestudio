import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface Calendar {
  mentor: {
    mentor: {
      _id: string;
      name: string;
      image: {
        mentor_image: {
          src: string;
          objectPosition: ObjectPosition;
          title: string;
        };
      };
    };
  };
  title: Record<Locales, string>;
  date: string;
  category: Category;
  _id: string;
}
