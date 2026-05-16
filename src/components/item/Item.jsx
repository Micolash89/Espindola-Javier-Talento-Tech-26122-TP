import './Item.css'

export default function Item({ name, price ,description, category, image, children }) {
  return (
    <div title={name} className="item">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
        <p>Categoria: {category}</p>
        <img src={image} alt={name} />
        {children}
    </div>
  )
}
