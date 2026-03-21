import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container-fluid px-1">
        {/* LOGO */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {/* BOTÓN RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* CONTENIDO */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/peliculas" className="nav-link custom-link">
                Películas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link custom-link">
                Series
              </Link>
            </li>
            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle custom-link"
                role="button"
                data-bs-toggle="dropdown"
              >
                Administrador
              </a>
              <ul className="dropdown-menu dropdown-menu-dark custom-dropdown">
                <li>
                  <Link to="/generos" className="dropdown-item">
                    Géneros
                  </Link>
                </li>
                <li>
                  <Link to="/directores" className="dropdown-item">
                    Directores
                  </Link>
                </li>
                <li>
                  <Link to="/productoras" className="dropdown-item">
                    Productoras
                  </Link>
                </li>
                <li>
                  <Link to="/tipos" className="dropdown-item">
                    Tipos
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="dropdown-item">
                    Media
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;