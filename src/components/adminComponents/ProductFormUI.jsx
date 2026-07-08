import Seo from "../seo/Seo";

export default function ProductFormUI({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) {
  return (
    <section className="product-form-section">
      <Seo title="Cargar producto" />
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

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
          <label htmlFor="price">Precio</label>
          <input
            id="price"
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            min="0"
          />
          {errors.price && <p className="form-error">{errors.price}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="category">Categoría</label>
          <input
            id="category"
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
          />
          {errors.category && <p className="form-error">{errors.category}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={onChange}
          />
          {errors.description && (
            <p className="form-error">{errors.description}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="image">Imagen</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
          {errors.file && <p className="form-error">{errors.file}</p>}
        </div>

        <button className="button-square" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>

        {errors.general && <p className="form-error form-error--general">{errors.general}</p>}
      </form>
    </section>
  );
}
