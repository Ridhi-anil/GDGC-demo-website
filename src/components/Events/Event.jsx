import "./events.css";

export default function Event({ image, status, desc }) {
  return (
    <div className="event-poster">
      <img src={image} />
      <div className="event-content">
        <p id="desc">{desc}</p>
        <div className="event-buttons">
          {status === "upcoming" && (
            <>
              <button id="more">More</button>
              <button id="reg">Register</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
