export interface DateFormat {
  day: string;
  month: string;
  year: string;
}

export const formatDate = (
  value: string,
  locale: string,
  monthType?: Intl.DateTimeFormatOptions["month"],
): DateFormat => {
  const date = new Date(value);

  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date
      .toLocaleString(locale, { month: monthType || "short" })
      .replace(".", ""),
    year: date.getFullYear().toString(),
  };
};
