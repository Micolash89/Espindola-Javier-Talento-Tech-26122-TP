import { CircleX, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Item from "../item/Item";
import "./itemDetail.css";
import { toast } from "sonner";

export default function ItemDetail({ item }) {
  const { addToCart, countTotalItems } = useCart();
  console.log("ItemDetail item:", item); // Agrega este console.log para depuración

  const totalItems = countTotalItems();

  const handleAddToCart = () => {
    if (item.stock > 0 && totalItems < item.stock) {
      addToCart(item);
    } else {
      toast.error("No hay stock disponible para este producto.", {
        description: "Por favor, elige otro producto.",
      });
    }
  };

  return (
    <Item {...item}>
      <button
        className={`button-square item-detail-add ${!(item.stock > 0 && totalItems < item.stock) ? "item-detail-add-enabled" : ""}`}
        onClick={handleAddToCart}
        disabled={item.stock > 0 && totalItems < item.stock ? false : true}
        aria-label="Agregar al carrito"
        title={
          item.stock > 0 && totalItems < item.stock
            ? "Agregar al carrito"
            : "No hay stock disponible para este producto."
        }
      >
        {item.stock > 0 && totalItems < item.stock ? (
          <>
            <ShoppingCart size={16} />
            <span>Agregar al carrito</span>
          </>
        ) : (
          <>
            <CircleX size={20} />
            <span>No disponible</span>
          </>
        )}
      </button>
    </Item>
  );
}
