import { Page } from "@model/Page";
import { Category } from "./Category";
import { Locales } from "./Locales";
import { SubCategory } from "./SubCategory";

export type PageContent = Record<
  string,
  {
    description: Record<Locales, string>;
    highlight?: Record<Locales, string>;
    label?: Record<Locales, string>;
  }
>;

export const PagesStructure: Record<
  Category | Page,
  { section: (Category | SubCategory | string)[]; hasAreaOfInsterest?: boolean }
> = {
  editions: {
    section: ["focusEditions", "allInOneEditions"],
    hasAreaOfInsterest: true,
  },
  masterclasses: {
    section: ["masterclasses"],
  },
  creativeTalks: {
    section: ["creativeTalks"],
  },
  workshops: {
    section: ["onSiteWorkshops", "shortDurationWorkshops", "advancedWorkshops"],
    hasAreaOfInsterest: true,
  },
  artisticResidences: {
    section: ["artisticResidences"],
    hasAreaOfInsterest: true,
  },
  businessWorkshops: {
    section: [],
  },
  mentors: {
    section: [
      "description",
      `mentors[] -> {name, image {mentor_image-> { "src":image.asset._ref, objectPosition, title}}, event {"eventCount": count(mentor_event)}, _id}`,
    ],
  },
  creativeWorkshops: {
    section: [],
  },
  calendar: {
    section: [],
  },
  aboutUs: {
    section: [
      "highlight",
      "description",
      `team[] -> {name, image { teamElement_image-> { "src":image.asset._ref, objectPosition, title } }, role}`,
    ],
  },
  contacts: {
    section: [],
  },
  homepage: {
    section: [
      "highlight",
      "title",
      `news[] ->{_id, title, date, category, mentor {mentor -> {_id, name, image {mentor_image -> { "src":image.asset._ref, objectPosition, "alt":title}}}}}`,
      `sponsors[] -> {"alt":name, "src": image.asset._ref}`,
      "comments[] ->{quote, author}",
    ],
  },
};
