import { useCart } from "../../context/CartContext";
import Item from "../item/Item";

export default function ItemDetail({ item }) {

  const { addToCart } = useCart();

  return (
    <Item {...item}>
      <button className="button-square" onClick={() => addToCart(item)}>
        Agregar al carrito
      </button>
    </Item>
  );
}
