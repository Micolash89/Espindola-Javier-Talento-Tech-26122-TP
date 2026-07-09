import { Plus } from "lucide-react";

export default function ProductNewButton() {
  return (
    <div className="">
      <a href="/admin/products/new" className=" action-card action-card--new">
        <Plus size={20} />
        <span>Nuevo Producto</span>
      </a>
    </div>
  );
}
