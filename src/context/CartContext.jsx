import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addToCart = (item) => {
    const inCart = cart.find((i) => i.id === item.id);
    if (inCart) {
      setCart(cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
      toast.success("Producto agregado al carrito");
      return;
    }
    setCart([...cart, { ...item, quantity: 1 }]);
    toast.success("Producto agregado al carrito");
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItemCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Carrito vaciado");
  };

  const countTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0);
  };

  const checkout = () => {
    toast.success("Compra realizada con éxito");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    setCart,
    isInCart,
    addToCart,
    removeItemCart,
    updateQuantity,
    clearCart,
    countTotalItems,
    getTotalPrice,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
