import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductNewButton() {
  return (
    <div className="">
      <Link to="/admin/products/new" className="action-card action-card--new ">
        <Plus size={25} />
        <span>Nuevo Producto </span>
      </Link>
    </div>
  );
}
