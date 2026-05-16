import './Item.css'

export default function Item({ name, price ,description, category, image, children }) {
  return (
    <div title={name} className="product-card">
        <div className="product-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{name}</h3>
          <p className="product-description">{description}</p>
          <p className="product-price">${price.toFixed(2)}</p>
          <p className="product-category">{category}</p>
        </div>
        <div className="product-action">
          {children}
        </div>
    </div>
  )
}
