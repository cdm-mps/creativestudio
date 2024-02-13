import { Category } from "./Category";

export const StructurePages: Record<
  Category,
  { section: string[]; hasAreaOfInsterest?: boolean }
> = {
  editions: {
    section: ["focusEditions", "allInOneEditions"],
    hasAreaOfInsterest: true,
  },
  masterclasses: {
    section: ["masterclasses"],
  },
  "creativeTalks": {
    section: ["creativeTalks"],
  },
  workshops: {
    section: ["onSiteWorkshops", "shortDurationWorkshops", "advancedWorkshops"],
    hasAreaOfInsterest: true,
  },
  "artisticResidences": {
    section: ["artisticResidences"],
    hasAreaOfInsterest: true,
  },
  "businessWorkshops": {
    section: [],
  },
};
