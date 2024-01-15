import { Category } from "@model/Category";

export interface CalendarProps {
  events: EventCalendar[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export interface EventCalendar {
  title: string;
  category: Category;
  date: string;
}
