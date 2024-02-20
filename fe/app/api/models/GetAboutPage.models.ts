import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";

export interface GetAboutPageOutputDto {
  highlight: Record<Locales, string>;
  description: Record<Locales, string>;
  team: Team[];
}

export interface Team {
  name: string;
  image: {
    teamElement_image: ImageOutputDto;
  };
  role: Record<Locales, string>;
}
