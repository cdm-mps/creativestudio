import EventElement from "../EventElement/EventElement";
import { EventGridProps } from "./EventGrid.models";

const EventGrid = ({ events }: EventGridProps) => (
  <div className="flex max-md:justify-center w-full flex-wrap">
    {events.map((event, i) => (
      <EventElement key={i} {...event} />
    ))}
  </div>
);

export default EventGrid;
