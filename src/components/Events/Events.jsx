import "./events.css";
import eventLogo from "../../assets/techsprintjpeg.jpeg";

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
          <div className="event-poster">
            <img src={eventLogo} />
            <p id="desc">
              Tech Sprint a 7 Day online hackathon where you explore and
              formulate solutions
            </p>
            <div className="event-buttons">
              <button id="more">More</button>
              <button id="reg">Register</button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
