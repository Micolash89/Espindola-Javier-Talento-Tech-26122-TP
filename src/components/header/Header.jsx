import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src="img/rata-duelista-logo-1.jpg" alt="img/rata-duelista-logo-1.jpg" />
          <span>Reactiva</span>
        </Link>

      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
}
