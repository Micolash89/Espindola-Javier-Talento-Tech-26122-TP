import './Item.css'

export default function Item({ name, price, img, category, rarity, stock, children }) {
  return (
    <div title={name} className="product-card">
        <div className="product-image">
          <img src={img} alt={name} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{name}</h3>
          {rarity && <p className="product-rarity">{rarity}</p>}
          <p className="product-price">${parseFloat(price).toFixed(2)}</p>
          <p className="product-category">{category}</p>
          <p className="product-stock">{stock > 0 ? `Stock: ${stock}` : "Sin stock"}</p>
        </div>
        <div className="product-action">
          {children}
        </div>
    </div>
  )
}
