import { NavLink } from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              href="/events"
              className={({ isAvtice }) =>
                isAvtice ? classes.active : undefined
              }
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/events/new"
              className={({ isAvtice }) =>
                isAvtice ? classes.active : undefined
              }
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
