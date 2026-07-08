export const validateProduct = ({ name, price, category, description, file }) => {
  const errors = {};

  if (!name || !name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!price || Number(price) <= 0) {
    errors.price = "El precio debe ser mayor a 0";
  }

  if (!category || !category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  if (!description || !description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!file) {
    errors.file = "Debe seleccionar una imagen";
  }

  return errors;
};
