import "../index.css";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-items">
        <li>Home</li>
        <li>About</li>
        <li className="profile-tab">Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
