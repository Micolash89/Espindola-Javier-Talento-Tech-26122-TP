import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Página no encontrada</p>
        <a href="/" className="button-square">Volver al inicio</a>
      </div>
    </section>
  );
}

export default App;
