import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";

export interface GetCalendarPageOutputDto {
  events: CalendarEvent[];
}

export interface CalendarEvent {
  title: Record<Locales, string>;
  category: Category;
  areasOfInterest: AreaOfInterest[];
  mentors: {
    _id: string;
    name: string;
    image: { mentor_image: ImageOutputDto };
  }[];
  isSoldOut?: boolean;
  _id: string;
  date: string[];
}
