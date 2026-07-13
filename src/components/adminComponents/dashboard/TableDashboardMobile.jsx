import { Ban, CircleCheck, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { updateProduct } from "../../../services/productsService";
import { SkeletonMobile } from "../../skeleton/Skeleton";

export default function TableDashboardMobile({ products, loading, onUpdate }) {
  const handleToggleActive = async (product) => {
    try {
      await updateProduct(product.id, { active: !product.active });
      toast.success(
        `Producto ${product.active ? "desactivado" : "activado"} correctamente`,
      );
      onUpdate?.();
    } catch {
      toast.error("Error al cambiar estado del producto");
    }
  };

  if (loading) {
    return (
      <section className="table-mobile">
        <h3>Productos</h3>
        <div className="mobile-cards">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonMobile key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="table-mobile">
        <p className="table-empty">No hay productos para mostrar.</p>
      </section>
    );
  }

  return (
    <section className="table-mobile">
      <h3>Productos ({products.length})</h3>
      <div className="mobile-cards">
        {products.map((product) => (
          <div key={product.id} className="mobile-card">
            <div >
            <div className="mobile-card-header">
              <span className="mobile-card-name">{product.name}</span>
            </div>
            <div className="mobile-card-meta">
              {product.type} · {product.rarity}
            </div>
            <div className="mobile-card-meta">
              ${product.price} · Stock: {product.stock}
            </div>
            <div className="mobile-card-row">
              <span
                className={`status-dot ${product.active ? "status-active" : "status-inactive"}`}
              />
              <span className="mobile-card-status">
                {product.active ? "Activo" : "Inactivo"}
              </span>
            </div>
            <div className="mobile-card-actions">
              <Link
                to={`/admin/products/edit/${product.id}`}
                className="table-action-btn table-action-btn--edit"
                aria-label="Modificar producto"
              >
                <PenLine size={16} />
              </Link>
              <button
                className={`table-action-btn ${product.active ? "table-action-btn--deactivate" : "table-action-btn--activate"}`}
                onClick={() => handleToggleActive(product)}
                aria-label={
                  product.active ? "Desactivar producto" : "Activar producto"
                }
              >
                {product.active ? <CircleCheck size={16} /> : <Ban size={16} />}
              </button>
            </div>
            </div>
            <div className="product-card-image-cart product-card-image-mobile">
              <img src={product.img} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
