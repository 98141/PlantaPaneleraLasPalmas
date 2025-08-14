import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/Logo.png";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Cerrar drawer cuando cambia la ruta
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Cerrar con click fuera y con ESC
  useEffect(() => {
    const onClickOutside = (e) => {
      if (drawerOpen && navRef.current && !navRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [drawerOpen]);

  const links = [
    { to: "/", label: "Inicio", end: true },
    { to: "/company", label: "Empresa", end: true },
    { to: "/productos", label: "Productos", end: false }, 
    { to: "/videos", label: "Videos", end: true },
    { to: "/contact", label: "Contacto", end: true },
  ];

  return (
    <nav className="navbar-container simple" ref={navRef}>
      {/* Izquierda: marca */}
      <div className="nav-left">
        <NavLink to="/" className="brand">
          <img src={logo} alt="Tejiendo Raíces" className="brand-logo" />
          <span className="brand-name">Tejiendo&nbsp;Raíces</span>
        </NavLink>
      </div>

      {/* Centro: menú (desktop/tablet) */}
      <div className="nav-center">
        <ul className="menu-root" role="menubar" aria-label="Menú principal">
          {links.map((l) => (
            <li key={l.to} className="nav__item">
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  "menu__link" + (isActive ? " active menu__link_active" : "")
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Derecha: Hamburguesa (móvil) */}
      <button
        className={`burger ${drawerOpen ? "active" : ""}`}
        onClick={() => setDrawerOpen((s) => !s)}
        aria-label="Abrir menú"
        aria-expanded={drawerOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Drawer móvil */}
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-header">
          <span className="drawer-title">Menú</span>
          <button
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className="drawer-content">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                "drawer-link" + (isActive ? " active" : "")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </aside>

      {/* Backdrop móvil */}
      {drawerOpen && (
        <div
          className="backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden
        />
      )}
    </nav>
  );
}
