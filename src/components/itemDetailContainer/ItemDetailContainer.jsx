import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail";
import ErrorMessage from "../error/ErrorMessage";
import { products } from "../../data/products";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const item = products.find((item) => item.id === id);

  if (!item) return <ErrorMessage message="Producto no encontrado." actionLabel="Volver al catálogo" actionHref="/" />;

  return (
    <section className="item-detail-container">
      <h1 className="detail-title">Detalles de producto</h1>
      <div className="item-detail">
        <ItemDetail item={item} />
      </div>
    </section>
  );
}
