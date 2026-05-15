import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";

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

  if (loading) 
    return <div>Cargando...</div>;
  
  if (error)
    return <div>Error al cargar los productos.</div>;


  return <section>
      <ItemList products={products} />
    </section>;
}
