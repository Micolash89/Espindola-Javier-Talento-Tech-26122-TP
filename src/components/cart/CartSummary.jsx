import { CreditCard, User } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const CartSummary = () => {
  const { getTotalPrice, checkout } = useCart();

  const { user } = useAuth();

  const total = getTotalPrice();

  return (
    <div className="cart-summary">
      <p className="cart-total">
        Total: <span>${total.toFixed(2)}</span>
      </p>
      {!user && (
        <Link
          to="/login"
          className="button-square cart-checkout"
          aria-label="Iniciar sesión para finalizar compra"
        >
          <User size={20} />
          Iniciar sesión
        </Link>
      )}
      {user && (
        <button
          className="button-square cart-checkout"
          onClick={checkout}
          aria-label="Finalizar compra"
        >
          <CreditCard size={20} />
          Finalizar compra
        </button>
      )}
    </div>
  );
};
