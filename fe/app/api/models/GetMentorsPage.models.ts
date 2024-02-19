import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";

export interface GetMentorsPageOutputDto {
  mentors: MentorEventCount[];
  pageStructure: MentorsPageStructure;
}

export interface MentorEventCount {
  _id: string;
  name: string;
  image: {
    mentor_image: ImageOutputDto;
  };
  eventCount: number;
}

export interface MentorsPageStructure {
  description: Record<Locales, string>;
}
