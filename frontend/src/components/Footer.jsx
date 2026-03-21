import "../styles/footer.css";
import logo from "../assets/logo.png"; 
// 1. Importamos Link
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* IZQUIERDA */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Tu plataforma gratuita para ver películas online sin registro.
          </p>
        </div>

        {/* DERECHA */}
        <div className="footer-right">
          {/* ENLACES */}
          <div>
            <h5>Enlaces</h5>
            <ul>
              {/* Links */}
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/peliculas">Películas</Link></li>
              <li><Link to="/series">Series</Link></li>
              
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href="mailto:cuevaflix@gmail.com">cuevaflix@gmail.com</a></li>
              <li>604 520 0750</li>
            </ul>
          </div>

          {/* REDES */}
          <div>
            <h5>Redes Sociales</h5>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* AUTORES */}
      <div className="footer-bottom">
        <p>
          © 2026 Cuevaflix — Isabela Blandón · Salome Molina · Angela Alean
        </p>
      </div>
    </footer>
  );
}

export default Footer;