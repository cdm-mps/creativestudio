import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";

export interface GetCalendarPageOutputDto {
  events: CalendarEvent[];
}

export interface CalendarEvent {
  title: Record<Locales, string>;
  category: Category;
  areasOfInterest: AreaOfInterest[];
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
  _id: string;
  date: string;
}
