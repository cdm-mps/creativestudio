import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { SubCategory } from "@model/SubCategory";
import { ImageOutputDto } from "./Image.models";

export interface GetCategoryPageOutputDto {
  pageContent: Record<Category | SubCategory, CategoryPageContent>;
  previousEvents: EventThumbnail[];
  futureEvents: EventThumbnail[];
}

export interface EventThumbnail {
  _id: string;
  title: Record<Locales, string>;
  date: string[];
  isSoldOut?: boolean;
  mentors: {
    _id: string;
    name: string;
    image: { mentor_image: ImageOutputDto };
  }[];
  image: { image: ImageOutputDto };
  thumbnail: { image: ImageOutputDto };
}

export const CategoryPageProjection: Record<Category, string> = {
  artisticResidences: "artisticResidences",
  businessWorkshops: "",
  creativeTalks: "creativeTalks",
  editions: "focusEditions, allInOneEditions, advancedWorkshops",
  masterclasses: "masterclasses",
  workshops: "onSiteWorkshops, shortDurationWorkshops, advancedWorkshops",
};

export const GeneralEventsProjection = (
  category: Category,
  subCategory?: SubCategory,
  areaOfInterest?: AreaOfInterest,
) =>
  `"previousEvents": *[_type == "event" && !(_id in path("drafts.**")) && category == "${category}" ${subCategory ? `&& subcategory == "${subCategory}"` : ""} ${areaOfInterest ? `&& "${areaOfInterest}" in areasOfInterest` : ""} && date[0] < now()]{_id, title, isSoldOut, image { image -> { "src": image.asset._ref, title, objectPosition}}, thumbnail { image -> { "src": image.asset._ref, title, objectPosition}}, date, mentors[] -> {_id, name, image{ mentor_image -> {"src":image.asset._ref, objectPosition, title }}}}, "futureEvents": *[_type == "event" && !(_id in path("drafts.**")) && category == "${category}" ${subCategory ? `&& subcategory == "${subCategory}"` : ""} ${areaOfInterest ? `&& "${areaOfInterest}" in areasOfInterest` : ""} && date[0] > now()]{_id, title, isSoldOut, image { image -> { "src": image.asset._ref, title, objectPosition}}, thumbnail { image -> { "src": image.asset._ref, title, objectPosition}}, date, mentors[] -> {_id, name, image{ mentor_image -> {"src":image.asset._ref, objectPosition, title }}}}`;

export interface CategoryPageContent {
  description: Record<Locales, string>;
  highlight?: Record<Locales, string>;
  label?: Record<Locales, string>;
  image?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export const CategoriesWithAreasOfInterest: Category[] = [
  "editions",
  "workshops",
  "artisticResidences",
];
