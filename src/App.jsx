import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemsListContainer/ItemListContainer";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemListContainer />} />
          <Route path="/carrito" element={<ItemListContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
