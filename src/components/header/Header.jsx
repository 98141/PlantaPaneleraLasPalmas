import { NavLink } from 'react-router-dom';
import "./header.css";

export default function Header() {
      const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Planta Panelera las Palmas</h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"><NavLink to="/" className={customClassName}>About</NavLink></li>
                        <li className="header__item"><NavLink to="/contact" className={customClassName}>Contact</NavLink></li>
                        <li className="header__item"><NavLink to="/information" className={customClassName}>Information</NavLink></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}