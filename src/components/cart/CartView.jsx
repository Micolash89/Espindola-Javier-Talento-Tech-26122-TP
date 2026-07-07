import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import "./Cart.css";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1 className="cart-title">Tu carrito de compras</h1>

      {cart.length ? (
        <>
          <div className="cart-list-summary">
            <CartList />
            <CartSummary />
          </div>
        </>
      ) : (
        <div className="cart-empty">
          <ShoppingCart size={48} className="cart-empty-icon" />
          <p className="cart-empty-text">El carrito esta vacio</p>
          <Link to="/" className="button-square cart-empty-button">
            <Home size={20} />
            <span>Volver a la tienda</span>
          </Link>
        </div>
      )}
    </section>
  );
};
