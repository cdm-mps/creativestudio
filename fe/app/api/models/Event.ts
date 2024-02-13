import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Level } from "@model/Level";
import { SubCategory } from "@model/SubCategory";

export interface Event {
  _id: string;
  title: { pt: string; en: string };
  category: Category;
  subcategory: SubCategory;
  description: { pt: string; en: string };
  image: {
    image: {
      image: {
        _type: string;
        asset: {
          _ref: string;
          _type: string;
        };
      };
    };
    objectPosition: ObjectPosition;
    title: string;
  };
  mentor: {
    mentor: {
      name: string;
      image: {
        mentor_image: {
          image: {
            _type: string;
            asset: {
              _ref: string;
              _type: string;
            };
          };
          objectPosition: ObjectPosition;
          title: string;
        };
      };
    };
  };
  date: string;
  duration: string;
  level: Level;
  programation: {
    description: string;
    duration: string;
  }[];
  areaOfInterest: AreaOfInterest;
  isNew: boolean;
  hasSubmitVideo: boolean;
}