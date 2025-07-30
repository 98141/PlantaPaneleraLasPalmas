import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import logo from "../../../images/PP_FINAL.png"; 

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={`/`}>
          <img
            className="header__logo"
            src={logo}
            alt="Logo Planta Panelera las Palmas"
          />
        </Link>
        <h1 className="header__title">Planta Panelera las Palmas</h1>
        <NavBar />
      </div>
    </header>
  );
}
