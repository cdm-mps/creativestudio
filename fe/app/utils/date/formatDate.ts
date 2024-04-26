import { useLocale } from "next-intl";

export const formatDate = (
  value: string,
  monthType?: Intl.DateTimeFormatOptions["month"],
): { day: string; month: string; year: string } => {
  const date = new Date(value);
  const locale = useLocale();

  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: date
      .toLocaleString(locale, { month: monthType || "short" })
      .replace(".", ""),
    year: date.getFullYear().toString(),
  };
};
