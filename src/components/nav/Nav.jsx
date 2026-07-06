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
  const { user, userData } = useAuth();

  const totalItems = countTotalItems();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-item">
            <Home size={16} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/carrito" className="nav-item">
            <ShoppingCart size={16} />
            <span>Carrito</span>
          </Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </li>
        {!user && (
          <li>
            <Link to="/login" className="nav-item">
              <User size={16} />
              <span>Ingresar</span>
            </Link>
          </li>
        )}
        {userData?.role === "admin" && (
          <li>
            <Link to="/admin" className="nav-item">
              <LayoutDashboard size={16} />
              <span>Admin</span>
            </Link>
          </li>
        )}

        {user && (
          <li>
            <Link to="/logout" className="nav-item">
              <LogOut size={16} />
              <span>Cerrar sesión</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
