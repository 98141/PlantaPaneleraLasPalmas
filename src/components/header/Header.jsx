import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={`/`}>
          <img
            className="header__logo"
            src="../../../images/PP FINAL.png"
            alt="Logo Planta Panelera las Palmas"
          />
        </Link>
        <h1 className="header__title">Planta Panelera las Palmas</h1>
        <NavBar />
      </div>
    </header>
  );
}
