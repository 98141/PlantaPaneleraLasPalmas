import { NavLink } from 'react-router-dom';
import "../../../blocks/header.css";
import NavBar from '../navBar/NavBar';

export default function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src="../../../images/logo_3.webp" alt="Logo Planta Panelera las Palmas" />
                <h1 className="header__title">Planta Panelera las Palmas</h1>
                <NavBar/>
            </div>
        </header>
    )
}