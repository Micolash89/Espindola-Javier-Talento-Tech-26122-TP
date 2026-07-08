import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Seo from "../seo/Seo";

export default function ProductSuccess() {
  const { id } = useParams();

  return (
    <section className="product-form-section">
      <Seo title="Producto cargado" />
      <div className="success-page">
        <CheckCircle size={48} className="success-icon" />

        <h2>Producto cargado con éxito</h2>
        <p className="success-id">ID de producto: {id}</p>
        <p className="success-text">Puede cargar otro haciendo clic en el botón.</p>

        <Link className="button-square" to="/admin/products/new" replace>
          Agregar otro producto
        </Link>
      </div>
    </section>
  );
}
