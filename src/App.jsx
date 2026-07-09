import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/itemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./components/adminComponents/dashboard/Dashboard";
import ProductFormContainer from "./components/adminComponents/ProductFormContainer";
import ProductSuccess from "./components/adminComponents/ProductSuccess";
import Login from "./components/login/Login";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { CartView } from "./components/cart/CartView";
import Seo from "./components/seo/Seo";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/edit/:id" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-section">
      <Seo title="Página no encontrada" />
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Página no encontrada</p>
        <a href="/" className="button-square" aria-label="Volver al inicio">
          Volver al inicio
        </a>
      </div>
    </section>
  );
}

export default App;
