import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export default function Nav() {
  const { countTotalItems } = useCart();

  const totalItems = countTotalItems();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </li>
      </ul>
    </nav>
  );
}
