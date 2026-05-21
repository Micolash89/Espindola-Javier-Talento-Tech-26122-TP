import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import Loading from "../loading/Loading";
import ErrorMessage from "../error/ErrorMessage";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("error al cargar los productos:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (error)
    return (
      <ErrorMessage
        message="Error al cargar los productos."
        actionLabel="Reintentar"
        actionHref="/"
      />
    );

  return (
    <section className="items-list-section">
      <ItemList products={products} />
    </section>
  );
}
