import { Link } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
  User,
} from "lucide-react";
import "./Nav.css";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function Nav() {
  const { countTotalItems } = useCart();
  const { user, userData, logout } = useAuth();

  const totalItems = countTotalItems();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav aria-label="Navegación principal">
      <ul>
        <li>
          <Link to="/" className="nav-item" aria-label="Home">
            <Home size={19} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/carrito"
            className="nav-item"
            aria-label="Carrito de compras"
          >
            <ShoppingCart size={19} />
            <span>Carrito</span>
          </Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </li>
        {!user && (
          <li>
            <Link to="/login" className="nav-item" aria-label="Iniciar sesión">
              <User size={19} />
              <span>Ingresar</span>
            </Link>
          </li>
        )}
        {userData?.role === "admin" && (
          <li>
            <Link
              to="/admin"
              className="nav-item"
              aria-label="Panel de administración"
            >
              <LayoutDashboard size={19} />
              <span>Admin</span>
            </Link>
          </li>
        )}

        {user && (
          <li>
            <button
              onClick={handleLogout}
              className="nav-item button-ghost"
              aria-label="Cerrar sesión"
              type="button"
            >
              <LogOut size={19} />
              <span>Cerrar sesión</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
