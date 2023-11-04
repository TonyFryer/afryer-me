import { NavLink } from "react-router-dom";
import menuData from "../../data/menu.json";

const MenuItem = ({ text, path }) => (
  <li className="nav-item">
    <NavLink
      exact={path === "/"}
      activeClassName="active"
      className="nav-link"
      to={path}
    >
      {text}
    </NavLink>
  </li>
);

const Menu = () => (
  <ul className="nav nav-tabs mb-3 mt-1">
    {menuData.map((item, i) => (
      <MenuItem key={i} {...item} />
    ))}
  </ul>
);

export default Menu;
