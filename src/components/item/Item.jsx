import "./Item.css";

export default function Item({ name, price, img, rarity, stock, children }) {
  const nameTruncated = name.length > 20 ? `${name.substring(0, 20)}...` : name;

  return (
    <div title={name} className="product-card">
      <div className="product-image">
        <img src={img} alt={name} />
      </div>
      <div>
        <div className="product-info">
          <h3 className="product-title">{nameTruncated}</h3>
          <p className="product-rarity">{rarity}</p>
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
