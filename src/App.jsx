import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/itemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./components/adminComponents/dashboard/Dashboard";
import ProductFormContainer from "./components/adminComponents/ProductFormContainer";
import Login from "./components/login/Login";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { CartView } from "./components/cart/CartView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/:id/edit" element={<ProductFormContainer />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Página no encontrada</p>
        <a href="/" className="button-square">
          Volver al inicio
        </a>
      </div>
    </section>
  );
}

export default App;
