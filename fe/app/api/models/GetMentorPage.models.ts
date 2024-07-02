import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";
import { Category } from "@model/Category";

export interface GetMentorPageOutputDto {
  _id: string;
  name: string;
  bio: Record<Locales, string>;
  occupation: Record<Locales, string>;
  image: {
    mentor_image: ImageOutputDto;
  };
  previousEvents: EventBase[];
  futureEvents: EventBase[];
}

export interface EventBase {
  _id: string;
  title: Record<Locales, string>;
  category: Category;
  date: string[];
  isSoldOut?: boolean;
  mentors: {
    _id: string;
    name: string;
    image: { mentor_image: ImageOutputDto };
  }[];
}
