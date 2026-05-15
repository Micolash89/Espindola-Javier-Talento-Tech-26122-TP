import Item from "../item/Item";

export default function ItemDetail({ item }) {
  return (
    <Item {...item}>
      <button>Agregar al carrito</button>
    </Item>
  );
}
