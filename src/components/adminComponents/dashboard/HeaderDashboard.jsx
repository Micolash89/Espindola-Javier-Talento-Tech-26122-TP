import { Home, LayoutDashboard, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function HeaderDashboard() {
  const { logout } = useAuth();

  return (
    <header className="dashboard-header">
      <div>
        <Link to="/admin" className="dashboard-header-logo">
          <LayoutDashboard size={22} />
          <h2>Panel de administración</h2>
        </Link>
      </div>
      <div>
        <nav className="">
          <ul>
            <li>
              <Link className="nav-item" to="/" aria-label="Volver a la tienda">
                <Home size={20} />
                <span>Volver a la tienda</span>
              </Link>
            </li>
            <li>
              <button
                className="nav-item"
                onClick={logout}
                aria-label="Cerrar sesión"
              >
                <LogOut size={20} />
                <span>Cerrar sesión</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
