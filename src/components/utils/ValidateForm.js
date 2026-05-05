export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "El nombre es requerido";
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "El apellido es requerido";
  }
  if (!formData.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "El email no es válido";
  }
  if (!formData.message.trim()) {
    errors.message = "El mensaje es requerido";
  }
  return errors;
};
