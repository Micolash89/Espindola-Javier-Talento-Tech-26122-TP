import { useSearchParams } from "react-router-dom";
import "./Dashboard.css";
import Seo from "../../seo/Seo";
import SearchBar from "../../searchBar/SearchBar";
import ErrorMessage from "../../error/ErrorMessage";
import TableDashboard from "./TableDashboard";
import PaginationControls from "../../pagination/PaginationControls";
import { useEffect, useState } from "react";
import { getAllAdminProducts } from "../../../services/productsService";
import useLocalPagination from "../../../hooks/useLocalPagination";
import ProductNewButton from "./ProductNewButton";

export const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const rawPage = Number(searchParams.get("page")) || 1;

  const fetchProducts = () => {
    getAllAdminProducts(search)
      .then((data) => setAllProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const { pageItems, totalPages, safePage } = useLocalPagination(
    allProducts,
    rawPage,
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
    <div className="dashboard">
      <Seo title="Panel de administración" />

      <div className="dashboard-header--actions">
        <SearchBar />
        <ProductNewButton />
      </div>

      <TableDashboard
        products={pageItems}
        loading={loading}
        onUpdate={fetchProducts}
      />

      <PaginationControls page={safePage} totalPages={totalPages} />
    </div>
  );
};
