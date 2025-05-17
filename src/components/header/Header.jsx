export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Planta Panelera las Palmas</h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"><a href="#about" className="header__link">About</a></li>
                        <li className="header__item"><a href="#projects" className="header__link">Projects</a></li>
                        <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}