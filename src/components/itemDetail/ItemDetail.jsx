import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Item from "../item/Item";
import "./itemDetail.css";

export default function ItemDetail({ item }) {
  const { addToCart } = useCart();

  return (
    <Item {...item}>
      <button className="button-square item-detail-add" onClick={() => addToCart(item)}>
        <ShoppingCart size={16} />

        <span>Agregar al carrito</span>
      </button>
    </Item>
  );
}
