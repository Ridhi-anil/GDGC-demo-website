import "./events.css";
import events from "../../../DUMMY_DATA.js";

import Event from "./Event.jsx";

export default function Events() {
  return (
    <>
      <div className="event-heading">
        <h2>Events at Our Club</h2>
        <p>
          Join us for exciting events, hands-on workshops, and tech talks !!
        </p>
      </div>

      <div className="events">
        <p id="event-desc">Ongoing Events</p>
        <div className="event-grid">
          {events
            .filter((event) => event.status === "ongoing")
            .map((event) => (
              <Event
                image={event.logo}
                status={event.status}
                desc={event.desc}
              />
            ))}
        </div>
        <p id="event-desc">Upcoming Events</p>
        <div className="event-grid">
          {events
            .filter((event) => event.status === "upcoming")
            .map((event) => (
              <Event
                image={event.logo}
                status={event.status}
                desc={event.desc}
              />
            ))}
        </div>
        <p id="event-desc">Past Events</p>
        <div className="event-grid">
          {events
            .filter((event) => event.status === "past")
            .map((event) => (
              <Event
                image={event.logo}
                status={event.status}
                desc={event.desc}
              />
            ))}
        </div>
      </div>
    </>
  );
}
