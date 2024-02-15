import { NewsElementProps } from "@components/NewsElement/NewsElement.models";
import { QuoteElementProps } from "@components/Quote/Quote.models";
import { SponsorsProps } from "@components/Sponsors/Sponsors.models";

export interface HomePageProps {
  title: string;
  highlight: string;
  quotes: QuoteElementProps[];
  sponsors: SponsorsProps[];
  news: NewsElementProps[];
}
