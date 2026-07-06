import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import { products } from "../../data/products";

export default function ItemListContainer() {
  return (
    <section className="items-list-section">
      <ItemList products={products} />
    </section>
  );
}
