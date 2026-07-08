import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./PaginationControls.css";

export default function PaginationControls({ page, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (p) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    setSearchParams(next);
  };

  return (
    <div className="pagination">
      <button
        className="button-ghost pagination-btn"
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
        Anterior
      </button>

      <span className="pagination-info">
        Página {page} de {totalPages}
      </span>

      <button
        className="button-ghost pagination-btn"
        onClick={() => goToPage(page + 1)}
        disabled={page >= totalPages}
        aria-label="Página siguiente"
      >
        Siguiente
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
