import { SiGithub } from "react-icons/si";
import "./Footer.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";

export default function Footer() {
  const year = new Date().getFullYear();

  const arrLinks = [
    { name: "gitHub", icon: SiGithub, url: "https://github.com/Micolash89" },
    {
      name: "Linkedin",
      icon: SlSocialLinkedin,
      url: "https://www.linkedin.com/in/javier-espindola/",
    },
    {
      name: "Portfolio",
      icon: CiGlobe,
      url: "https://espindola-javier.vercel.app/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-copyright">
            &copy; {year} todos los derechos reservados.
          </p>
        </div>
        <div className="footer-section">
          <ul className="footer-links">
            {arrLinks.map((item) => (
              <li key={item.name}>
                <a href={item.url} className="footer-link">
                  <item.icon className="footer-icon" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
