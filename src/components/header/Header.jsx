import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">

        <NavBar />
      </div>
    </header>
  );
}
