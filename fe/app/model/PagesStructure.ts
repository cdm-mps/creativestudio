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
  Category,
  { section: (Category | SubCategory)[]; hasAreaOfInsterest?: boolean }
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
};
