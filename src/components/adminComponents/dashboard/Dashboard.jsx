import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";
import Seo from "../../seo/Seo";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <Seo title="Panel de administración" />
      <header className="dashboard-header">
        <h2>Panel de administración</h2>

        <div className="header-actions">
          <Link className="button-square" to="/" aria-label="Volver a la tienda">
            Volver a la tienda
          </Link>
          <button className="button-square" onClick={logout} aria-label="Cerrar sesión">
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link to="/admin/products/new" className="action-card">
             Cargar
          </Link>

          <Link to="#" className="action-card disabled">
             Modificar
          </Link>

          <Link to="#" className="action-card disabled">
             Eliminar
          </Link>
        </div>
      </section>

      <section className="dashboard-help">
        <h3>Ayuda</h3>
        <p>Desde este panel podés gestionar los productos de la tienda.</p>
      </section>
    </div>
  );
};