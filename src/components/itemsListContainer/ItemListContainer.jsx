import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList";
import SearchBar from "../searchBar/SearchBar";
import PaginationControls from "../pagination/PaginationControls";
import ErrorMessage from "../error/ErrorMessage";
import Seo from "../seo/Seo";
import useLocalPagination from "../../hooks/useLocalPagination";
import { getProducts } from "../../services/productsService";
import Skeleton, { SkeletonSearchBar } from "../skeleton/Skeleton";

export default function ItemListContainer() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const rawPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    getProducts(search)
      .then((data) => setAllProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [search]);

  const { pageItems, totalPages, safePage } = useLocalPagination(
    allProducts,
    rawPage,
  );

  if (loading)
    return (
      <div className="items-list-container">
        {/* <div className="items-list-header">
          <h2 className="items-list-heading">Catálogo de cartas</h2>
          <SearchBar />
        </div> */}
        <SkeletonSearchBar />
        <div className="item-list">
          <Skeleton count={9} />
        </div>
      </div>
    );
  if (error)
    return (
      <ErrorMessage
        message={error}
        actionLabel="Volver al inicio"
        actionHref="/"
      />
    );

  return (
    <section className="items-list-section">
      <Seo
        title="Tienda de cartas"
        description="Explorá nuestro catálogo de cartas coleccionables."
      />

      <div className="items-list-header">
        <h2 className="items-list-heading">Catálogo de cartas</h2>
        <SearchBar />
      </div>

      <ItemList products={pageItems} />

      <PaginationControls page={safePage} totalPages={totalPages} />
    </section>
  );
}
