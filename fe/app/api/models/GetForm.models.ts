import { Category } from "@model/Category";
import { Locales } from "@model/Locales";
import { ImageOutputDto } from "./Image.models";

export interface GetFormOutputDto {
  regulations: Record<Locales, string>;
  paymentDetails: {
    label: Record<Locales, string>;
    value: Record<Locales, string>;
  }[];
  event: EventDetails;
  form: FormStructure;
}

export interface EventDetails {
  title: Record<Locales, string>;
  category: Category;
  date: string;
  duration: string;
  mentor: {
    mentor: {
      _id: string;
      name: string;
      image: { mentor_image: ImageOutputDto };
    };
  };
  hasSubmitVideo?: boolean;
}

export interface FormStructure {
  personalData: Fields[];
  form: Fields[];
  paymentDetails: Fields[];
}

export interface Fields {
  key: string;
  label: Record<Locales, string>;
  description?: Record<Locales, string>;
  type: FieldType;
  options?: Options[];
  required?: boolean;
}

export enum FieldType {
  Radio = "radio",
  Check = "check",
  TextArea = "textArea",
  Input = "input",
  File = "file",
}

export interface Options {
  label: Record<Locales, string>;
  value: string;
}

export type FormAnswers = Record<string, string | undefined>;
