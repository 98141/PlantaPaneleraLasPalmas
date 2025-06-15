import { NavLink } from "react-router-dom";
import "../../../blocks/navBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "menu__link" + (isActive ? " menu__link_active" : "")
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/company"
            className={({ isActive }) =>
              "menu__link" + (isActive ? " menu__link_active" : "")
            }
          >
            Empresa
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/productos"
            end={false} 
            className={({ isActive }) =>
              "menu__link" + (isActive ? " menu__link_active" : "")
            }
          >
            Productos
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              "menu__link" + (isActive ? " menu__link_active" : "")
            }
          >
            Videos
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "menu__link" + (isActive ? " menu__link_active" : "")
            }
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
