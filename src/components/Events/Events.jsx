import "./events.css";

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
          <Event />
          <Event />
          <Event />
        </div>
      </div>
      <div className="events">
        <p id="event-desc">Upcoming Events</p>
        <div className="event-grid">
          <Event />
          <Event />
          <Event />
        </div>
      </div>
      <div className="events">
        <p id="event-desc">Past Events</p>
        <div className="event-grid">
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </>
  );
}
