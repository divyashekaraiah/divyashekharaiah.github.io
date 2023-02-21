import "./topbar.css";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="link" to="/">
              1. JAVASCRIPT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link" to="/kannada">
              2. KANNADA
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="link" to="/art">
              3.ART
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
