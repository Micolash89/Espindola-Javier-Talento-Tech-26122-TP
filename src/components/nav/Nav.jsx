import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">
            <ShoppingCart size={16} />
            Carrito
          </Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </li>
        {!user && (
          <li>
            <Link to="/login">Ingresar</Link>
          </li>
        )}
        {userData?.role === "admin" && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
