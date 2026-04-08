import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../../logo.svg"; // replace later with Little Lemon logo if you have it

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__logo" to="/" aria-label="Little Lemon Home">
          <img src={logo} alt="Little Lemon logo" />
        </Link>

        <nav aria-label="Primary" className="nav__links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav__link is-active" : "nav__link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "nav__link is-active" : "nav__link"
            }
          >
            Reservations
          </NavLink>

          {/* placeholders so your nav matches the course layout */}
          <a className="nav__link" href="#specials">
            Menu
          </a>
          <a className="nav__link" href="#about">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
