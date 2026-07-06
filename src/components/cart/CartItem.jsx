import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Item from "../item/Item";

export const CartItem = ({ item }) => {
  const { removeItemCart, updateQuantity } = useCart();

  return (
    <div className="cart-item-row">
      <Item {...item}>
        <div className="cart-item-controls">
          <button
            className="button-ghost"
            onClick={() => updateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="cart-item-qty">{item.quantity}</span>
          <button
            className="button-ghost"
            onClick={() => updateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
        <button
          className="button-ghost cart-item-remove"
          onClick={() => removeItemCart(item.id)}
        >
          <Trash2 size={16} />
        </button>
      </Item>
    </div>
  );
};
