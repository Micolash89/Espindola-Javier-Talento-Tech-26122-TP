import "./Footer.css";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <p>&copy; {year} todos los derechos reservados.</p>

        <ul>
          <li>gitHub </li>
          <li>Linkedin</li>
          <li>Portfolio</li>
        </ul>
      </div>
    </footer>
  );
}
