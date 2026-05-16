import Item from "../item/Item";

export default function ItemDetail({ item }) {
  return (
    <Item {...item}>
      <button className="button-square">Agregar al carrito</button>
    </Item>
  );
}
