export const validateProduct = ({
  name,
  type,
  price,
  rarity,
  rarity_code,
  category,
  product_line_name,
  stock,
  file,
}) => {
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!type || !type.trim()) {
    errors.type = "El tipo es obligatorio";
  }

  if (!price || Number(price) <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (!rarity || !rarity.trim()) {
    errors.rarity = "La rareza es obligatoria";
  }

  if (!rarity_code || !rarity_code.trim()) {
    errors.rarity_code = "El código de rareza es obligatorio";
  }

  if (!category || !category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  if (!product_line_name || !product_line_name.trim()) {
    errors.product_line_name = "La línea de producto es obligatoria";
  }

  if (stock === "" || stock === undefined || stock === null || Number(stock) < 0) {
    errors.stock = "El stock debe ser 0 o mayor";
  }

  if (!file) {
    errors.file = "Debe seleccionar una imagen";
  }

  return errors;
};
