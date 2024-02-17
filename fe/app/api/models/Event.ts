import { ObjectPosition } from "@components/ImageElement/ImageElement.models";
import { AreaOfInterest } from "@model/AreaOfInterest";
import { Category } from "@model/Category";
import { Level } from "@model/Level";
import { Locales } from "@model/Locales";
import { SubCategory } from "@model/SubCategory";

export interface Event {
  _id: string;
  title: Record<Locales, string>;
  category: Category;
  subcategory: SubCategory;
  description: Record<Locales, string>;
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
      _id: string;
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
  level?: Level;
  programation: {
    description: Record<Locales, string>;
    duration: string;
  }[];
  areaOfInterest: AreaOfInterest;
  isNew: boolean;
  hasSubmitVideo: boolean;
}
