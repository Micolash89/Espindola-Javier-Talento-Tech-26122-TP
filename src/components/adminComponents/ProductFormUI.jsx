import { Save, Upload } from "lucide-react";
import Seo from "../seo/Seo";

export default function ProductFormUI({
  product,
  errors,
  loading,
  categories,
  fileName,
  isEditing,
  rarityOptions,
  typeOptions,
  productLineOptions,
  onChange,
  onFileChange,
  onSubmit,
}) {
  return (
    <section className="product-form-section">
      <Seo title={isEditing ? "Editar producto" : "Cargar producto"} />
      <form className="product-form" onSubmit={onSubmit}>
        <h2>{isEditing ? "Editar carta" : "Agregar nueva carta"}</h2>

        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="slug">Slug</label>
          <input
            id="slug"
            type="text"
            name="slug"
            value={product.slug}
            onChange={onChange}
          />
          {errors.slug && <p className="form-error">{errors.slug}</p>}
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="type">Tipo</label>
            <select id="type" name="type" value={product.type} onChange={onChange}>
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.type && <p className="form-error">{errors.type}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="price">Precio (USD)</label>
            <input
              id="price"
              type="number"
              name="price"
              value={product.price}
              onChange={onChange}
              min="0"
              step="0.01"
            />
            {errors.price && <p className="form-error">{errors.price}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="rarity">Rareza</label>
            <select id="rarity" name="rarity" value={product.rarity} onChange={onChange}>
              {rarityOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.rarity && <p className="form-error">{errors.rarity}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="rarity_code">Código de rareza</label>
            <input
              id="rarity_code"
              type="text"
              name="rarity_code"
              value={product.rarity_code}
              onChange={onChange}
            />
            {errors.rarity_code && (
              <p className="form-error">{errors.rarity_code}</p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={onChange}
            >
              <option value="">Seleccionar...</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && <p className="form-error">{errors.category}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="product_line_name">Línea</label>
            <select
              id="product_line_name"
              name="product_line_name"
              value={product.product_line_name}
              onChange={onChange}
            >
              {productLineOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.product_line_name && (
              <p className="form-error">{errors.product_line_name}</p>
            )}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="stock">Stock</label>
          <input
            id="stock"
            type="number"
            name="stock"
            value={product.stock}
            onChange={onChange}
            min="0"
          />
          {errors.stock && <p className="form-error">{errors.stock}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="image" className={`form-field--image${fileName ? " has-file" : ""}`}>
            <Upload size={20} />
            <span>{fileName || "Imagen"}</span>
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            hidden
          />
          {errors.file && <p className="form-error">{errors.file}</p>}
          {isEditing && !fileName && (
            <p className="form-hint">Dejalo vacío para mantener la imagen actual</p>
          )}
        </div>
        
        <button className="button-square product-form-submit" type="submit" disabled={loading}>
          <Save size={20} />
          <span>{loading ? "Guardando..." : isEditing ? "Actualizar" : "Guardar"}</span>
        </button>

        {errors.general && (
          <p className="form-error form-error--general">{errors.general}</p>
        )}
      </form>
    </section>
  );
}
