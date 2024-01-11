export interface QuoteElementProps {
  className?: string;
  content: React.JSX.Element;
  author?: string;
}
export interface QuoteSliderProps {
  quotes: QuoteElementProps[];
}