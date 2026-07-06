import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Creamos el contexto CartContext
const CartContext = createContext();

// Custom hook para usar al CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};

//proveedor del contexto
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      toast("El producto ya está en el carrito");
      return;
    }
    console.log("Agregando al carrito:", item);
    setCart([...cart, item]);
    toast("Producto agregado al carrito");
  };

  const removeItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCart([]);
    toast("Carrito vaciado");
  };

  ///contar items en el carrito
  const countTotalItems = () => {
    //return cart.reduce((acc, item) => acc + item.quantity, 0);
    return cart.length;
  };

  const getAllItems = () => {
    return cart;
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, element) => acc + parseFloat(element.price), 0);
  };

  //checkout
  const checkout = () => {
    //  lógica para procesar el pago y finalizar la compra
    toast("Compra realizada con éxito");
    clearCart();
    navigate("/");
  };

  const values = {
    setCart,
    isInCart,
    addToCart,
    removeItemCart,
    clearCart,
    countTotalItems,
    getAllItems,
    getTotalPrice,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
