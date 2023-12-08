import { ArtisticResidence } from "@icons/ArtisticResidence";
import { BusinessWorkshop } from "@icons/BusinessWorkshop";
import { CreativeTalks } from "@icons/CreativeTalks";
import { Edition } from "@icons/Edition";
import { Masterclass } from "@icons/Masterclass";
import { Workshop } from "@icons/Workshop";
import { Category } from "@model/Category";

export const categoriesDictionary: Record<
  Category,
  (className?: string) => JSX.Element
> = {
  edition: (className) => <Edition className={className} />,
  masterclass: (className) => <Masterclass className={className} />,
  workshop: (className) => <Workshop className={className} />,
  "creative-talks": (className) => <CreativeTalks className={className} />,
  "artistic-residence": (className) => (
    <ArtisticResidence className={className} />
  ),
  "business-workshop": (className) => (
    <BusinessWorkshop className={className} />
  ),
};
