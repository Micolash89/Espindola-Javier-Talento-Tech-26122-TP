import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Item from "../item/Item";
import { toast } from "sonner";

export const CartItem = ({ item }) => {
  const { removeItemCart, updateQuantity } = useCart();

  const handleUpdateQuantity = (id, amount) => {
    if (amount === 0) return removeItemCart(id);

    toast.success("Producto actualizado en el carrito");
    updateQuantity(id, amount);
  };

  return (
    <div className="cart-item-row">
      <Item {...item}>
        <div className="cart-item-controls">
          <button
            className="button-ghost"
            onClick={() => handleUpdateQuantity(item.id, -1)}
            disabled={item.quantity <= 1}
            title={
              item.quantity <= 1
                ? "No se puede reducir más"
                : "Reducir cantidad"
            }
            type="button"
            aria-label="Reducir cantidad"
          >
            <Minus size={16} />
          </button>
          <span className="cart-item-qty">{item.quantity}</span>
          <button
            className="button-ghost"
            onClick={() => handleUpdateQuantity(item.id, 1)}
            title="Aumentar cantidad"
            disabled={item.stock <= item.quantity}
            type="button"
            aria-label="Aumentar cantidad"
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          className="button-ghost cart-item-remove"
          onClick={() => handleUpdateQuantity(item.id, 0)}
          title="Eliminar producto"
          type="button"
          aria-label="Eliminar producto"
        >
          <Trash2 size={20} />
        </button>
      </Item>
    </div>
  );
};
