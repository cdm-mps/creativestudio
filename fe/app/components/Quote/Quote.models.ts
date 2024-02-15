export interface QuoteElementProps {
  className?: string;
  content: string | JSX.Element;
  author?: string;
}
export interface QuoteSliderProps {
  quotes: QuoteElementProps[];
}
