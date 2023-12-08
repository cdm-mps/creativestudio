import edition from "@/app/assets/icons/edition.svg";
import masterclass from "@/app/assets/icons/masterclass.svg";
import workshop from "@/app/assets/icons/workshop.svg";
import creativeTalks from "@/app/assets/icons/creativeTalks.svg";
import artisticResidence from "@/app/assets/icons/artisticResidence.svg";
import businessWorkshop from "@/app/assets/icons/businessWorkshop.svg";
import Image from "next/image";
import { Category } from "../model/Category";

export const categoriesDictionary: Record<
  Category,
  (className?: string) => JSX.Element
> = {
  edition: (className) => (
    <Image src={edition} alt="Edition icon" className={className} />
  ),
  masterclass: (className) => (
    <Image src={masterclass} alt="Masterclass icon" className={className} />
  ),
  workshop: (className) => (
    <Image src={workshop} alt="Workshop icon" className={className} />
  ),
  "creative-talks": (className) => (
    <Image
      src={creativeTalks}
      alt="Creative talks icon"
      className={className}
    />
  ),
  "artistic-residence": (className) => (
    <Image
      src={artisticResidence}
      alt="Artistic Residence icon"
      className={className}
    />
  ),
  "business-workshop": (className) => (
    <Image
      src={businessWorkshop}
      alt="Business Workshop icon"
      className={className}
    />
  ),
};
