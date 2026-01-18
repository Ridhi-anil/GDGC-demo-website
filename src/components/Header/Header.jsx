import "./header.css";
import logo from "../../assets/gdgc-logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="logo-head">
        <img src={logo} />
        <p>Google Developers Group Mec</p>
      </div>
      <div className="nav-bar">
        <button>About Us</button>
        <button>Events</button>
        <button>Notifications</button>
        <button>Login</button>
      </div>
    </header>
  );
}
