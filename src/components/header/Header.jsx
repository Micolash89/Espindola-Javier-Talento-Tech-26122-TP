import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src="" alt="" />
          <span>Reactiva</span>
        </Link>
      </div>
    </header>
  );
}
