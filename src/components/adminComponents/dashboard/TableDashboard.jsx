import { Ban, CircleCheck, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { updateProduct } from "../../../services/productsService";
import { SkeletonTableDesktop } from "../../skeleton/Skeleton";

export default function TableDashboard({ products, loading, onUpdate }) {
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
    return <SkeletonTableDesktop cont={8} />;
  }

  if (!products || products.length === 0) {
    return (
      <section className="table-dashboard">
        <p className="table-empty">No hay productos para mostrar.</p>
      </section>
    );
  }

  return (
    <section className="table-dashboard">
      <h3>Productos ({products.length})</h3>

      <div className="table-wrapper">
        <table className="table-dashboard-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Rareza</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Activo</th>
              <th>Editar</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} title={product.name} >
                <td className="td-name">{product.name}</td>
                <td>{product.type}</td>
                <td className="td-rarity">{product.rarity}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <span
                    className={`status-dot ${product.active ? "status-active" : "status-inactive"}`}
                  />
                </td>
                <td className="td-actions">
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="table-action-btn table-action-btn--edit"
                    aria-label="Modificar producto"
                    title="Modificar producto"
                  >
                    <PenLine size={16} />
                  </Link>
                </td>
                <td className="td-actions">
                  <button
                    className={`table-action-btn  ${product.active ? "table-action-btn--deactivate" : "table-action-btn--activate"}`}
                    onClick={() => handleToggleActive(product)}
                    aria-label={
                      product.active
                        ? "Desactivar producto"
                        : "Activar producto"
                    }
                    title={
                      product.active
                        ? "Desactivar producto"
                        : "Activar producto"
                    }
                  >
                    {product.active ? (
                      <CircleCheck size={16} />
                    ) : (
                      <Ban  size={16}/>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
