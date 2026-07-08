import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail";
import Loading from "../loading/Loading";
import ErrorMessage from "../error/ErrorMessage";
import Seo from "../seo/Seo";
import { getProductById } from "../../services/productsService";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => setItem(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  if (error || !item) {
    return (
      <>
        <Seo title="Producto no encontrado" />
        <ErrorMessage message="Carta no encontrada." actionLabel="Volver al catálogo" actionHref="/" />
      </>
    );
  }

  return (
    <section className="item-detail-container">
      <Seo title={item.name} description={`Detalle de ${item.name} — ${item.rarity}`} />
      <h1 className="detail-title">Detalles de Carta</h1>
      <div className="item-detail">
        <ItemDetail item={item} />
      </div>
    </section>
  );
}
