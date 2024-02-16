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
  editions: (className) => <Edition className={className} />,
  masterclasses: (className) => <Masterclass className={className} />,
  workshops: (className) => <Workshop className={className} />,
  creativeTalks: (className) => <CreativeTalks className={className} />,
  artisticResidences: (className) => (
    <ArtisticResidence className={className} />
  ),
  businessWorkshops: (className) => <BusinessWorkshop className={className} />,
};
