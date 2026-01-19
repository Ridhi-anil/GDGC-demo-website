import eventLogo from "../../assets/techsprintjpeg.jpeg";
import "./events.css";

export default function Event() {
  return (
    <div className="event-poster">
      <img src={eventLogo} />
      <p id="desc">
        Tech Sprint a 7 Day online hackathon where you explore and formulate
        solutions
      </p>
      <div className="event-buttons">
        <button id="more">More</button>
        <button id="reg">Register</button>
      </div>
    </div>
  );
}
