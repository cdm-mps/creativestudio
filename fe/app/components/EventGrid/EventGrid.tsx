import EventElement from "../EventElement/EventElement";
import { EventGridProps } from "./EventGrid.models";

const EventGrid = ({ events }: EventGridProps) => (
  <div className="flex w-full flex-wrap">
    {events.map((event, i) => (
      <EventElement key={i} {...event} />
    ))}
  </div>
);

export default EventGrid;
