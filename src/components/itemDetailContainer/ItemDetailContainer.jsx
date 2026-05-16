import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail";
import Loading from "../loading/Loading";
import ErrorMessage from "../error/ErrorMessage";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/data/products.json`)
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((item) => String(item.id) === id);
        if (item) {
          setItemDetail(item);
          return;
        }
        throw new Error("Producto no encontrado");
      })
      .catch((err) => {
        console.error("Error al cargar el producto:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (error || !itemDetail) return <ErrorMessage message="Producto no encontrado." actionLabel="Volver al catálogo" actionHref="/" />;

  return (
    <section className="item-detail-container">
      <h1 className="detail-title">Detalles de producto</h1>
      <div className="item-detail">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
}
