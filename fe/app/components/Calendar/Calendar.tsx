import React, { useEffect } from "react";
import { Calendar as CalendarAntd } from "antd";
import { CalendarProps } from "./Calendar.models";
import * as dayjs from "dayjs";

const Calendar = ({ events, setSelectedDate }: CalendarProps) => {
  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const getEvents = (date: dayjs.Dayjs) => {
    return (
      events.filter((event) => {
        const eventDate = new Date(event.date).toISOString();
        const calendarDate = date.toDate();

        calendarDate.setHours(0, 0, 0, 0);

        return eventDate === calendarDate.toISOString();
      }) || []
    );
  };

  const cellRender = (date: dayjs.Dayjs, _info: any): React.ReactNode => {
    const eventsForCurrentDay = getEvents(date);
    return (
      <React.Fragment>
        {eventsForCurrentDay.map((event, index) => (
          <div
            key={index}
            className="flex items-center justify-center md:justify-start"
          >
            <div
              className={`my-0.5 ml-2 h-4 w-4 rounded-full md:h-5 md:w-2 md:rounded-none bg-${event.category} md:mr-2`}
            />
            <span className="hidden md:line-clamp-1 md:font-noto-sans md:text-base">
              {event.title}
            </span>
          </div>
        ))}
      </React.Fragment>
    );
  };
  return (
    <CalendarAntd
      onChange={(date) => setSelectedDate(date.toDate())}
      cellRender={cellRender}
    />
  );
};

export default Calendar;
