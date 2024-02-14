import { Image } from "@/app/api/models/Image";
import { Locales } from "@model/Locales";

export interface TeamElement {
  name: string;
  role: Record<Locales, string>;
  image: {
    teamElement_image: Image;
  };
}

export interface AboutUs {
  highlight: Record<Locales, string>;
  description: Record<Locales, string>;
  team: TeamElement[];
}
