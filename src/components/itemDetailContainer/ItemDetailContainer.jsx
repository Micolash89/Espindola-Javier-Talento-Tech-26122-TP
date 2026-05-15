import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  if (!itemDetail) return <div>Producto no encontrado.</div>;

  return (
    <section className="item-detail-container">
      <h2>Detalles de producto</h2>
      <div className="item-detail">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
}
