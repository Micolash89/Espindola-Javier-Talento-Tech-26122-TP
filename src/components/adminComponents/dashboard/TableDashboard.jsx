import { Pencil, Power, PowerOff } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { updateProduct } from "../../../services/productsService";

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
    return (
      <section className="table-dashboard">
        <h3>Productos</h3>
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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td><div className="skeleton-line skeleton-line--name" /></td>
                  <td><div className="skeleton-line skeleton-line--short" /></td>
                  <td><div className="skeleton-line skeleton-line--short" /></td>
                  <td><div className="skeleton-line skeleton-line--short" /></td>
                  <td><div className="skeleton-line skeleton-line--short" /></td>
                  <td><div className="skeleton-line skeleton-line--dot" /></td>
                  <td><div className="skeleton-line skeleton-line--btn" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="td-name">{product.name}</td>
                <td>{product.type}</td>
                <td>{product.rarity}</td>
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
                    className="table-action-btn"
                    aria-label="Modificar producto"
                  >
                    <Pencil size={16} />
                  </Link>
                  <button
                    className="table-action-btn"
                    onClick={() => handleToggleActive(product)}
                    aria-label={
                      product.active
                        ? "Desactivar producto"
                        : "Activar producto"
                    }
                  >
                    {product.active ? (
                      <PowerOff size={16} />
                    ) : (
                      <Power size={16} />
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
