import "./Item.css";
import { useLocation } from "react-router-dom";

export default function Item({ name, price, img, rarity, stock, children }) {
  const nameTruncated = name.length > 20 ? `${name.substring(0, 20)}...` : name;

  const location = useLocation();

  return (
    <div
      title={name}
      className={`product-card ${location.pathname === "/carrito" ? " product-card-cart " : ""}`}
    >
      <div
        className={`${stock == 0 ? " product-card-image-disabled " : ""} ${location.pathname === "/carrito" ? " product-card-image-cart " : ""}`}
      >
        <img src={img} alt={name} />

        {stock == 0 && (
          <div className="product-card-image-disabled-overlay">Agotado</div>
        )}
      </div>

      <div>
        <div className="product-info">
          <h3 className="product-title" title={name}>
            {location.pathname !== "/" ? name : nameTruncated}
          </h3>
          {<p className="product-rarity">{rarity}</p>}
          <p className="product-price">${parseFloat(price).toFixed(2)}</p>
          <p className="product-stock">
            {stock > 0 ? `Stock: ${stock}` : "Sin stock"}
          </p>
        </div>
        <div className="product-action">{children}</div>
      </div>
    </div>
  );
}
