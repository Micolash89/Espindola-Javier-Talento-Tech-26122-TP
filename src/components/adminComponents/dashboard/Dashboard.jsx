import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";
import Seo from "../../seo/Seo";
import { Home, LayoutDashboard, LogOut, Pencil, Plus, Trash2 } from "lucide-react";

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard">
      <Seo title="Panel de administración" />
      <header className="dashboard-header">
        <div>
          <LayoutDashboard size={40} />
          <h2>Panel de administración</h2>
        </div>

        <div className="header-actions">
          <Link
            className="button-square dashboard-header-button"
            to="/"
            aria-label="Volver a la tienda"
          >
            <Home size={20} />
            <span>Volver a la tienda</span>
          </Link>
          <button
            className="button-square dashboard-header-button"
            onClick={logout}
            aria-label="Cerrar sesión"
          >
            <LogOut size={20} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>

        <div className="actions-grid">
          <Link to="/admin/products/new" className="action-card">
            <Plus size={22} />
            <span>Cargar</span>
          </Link>

          <Link to="#" className="action-card disabled">
            <Pencil size={22} />
            <span>Modificar</span>
          </Link>

          <Link to="#" className="action-card disabled">
            <Trash2 size={22} />
            <span>Eliminar</span>
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
