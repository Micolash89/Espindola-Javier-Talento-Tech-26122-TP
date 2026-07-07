import { CreditCard } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getTotalPrice, checkout } = useCart();

  const total = getTotalPrice();

  return (
    <div className="cart-summary">
      <p className="cart-total">
        Total: <span>${total.toFixed(2)}</span>
      </p>
      <button className="button-square cart-checkout" onClick={checkout}>
        <CreditCard size={20} />
        Finalizar compra
      </button>
    </div>
  );
};
