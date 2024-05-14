export interface Option {
  label: string;
  value: string;
}

export type FilterKey = "mentor" | "areaOfInterest" | "eventType";
export interface Filter {
  placeholder: string;
  _key: FilterKey;
  options: Option[];
}

export interface FiltersProps {
  filters: Filter[];
  result: Record<string, string | undefined>;
  setResult: (result: {}) => void;
  onClick?: () => void;
}
