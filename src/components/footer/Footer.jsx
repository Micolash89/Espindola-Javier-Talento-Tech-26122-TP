import "./Footer.css";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-copyright">&copy; {year} todos los derechos reservados.</p>
        </div>

        <div className="footer-section">
          <ul className="footer-links">
            <li><a href="#" className="footer-link">gitHub</a></li>
            <li><a href="#" className="footer-link">Linkedin</a></li>
            <li><a href="#" className="footer-link">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
