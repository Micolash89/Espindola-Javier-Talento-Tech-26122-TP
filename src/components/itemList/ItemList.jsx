import { Link } from 'react-router-dom';
import './ItemList.css'
import Item from '../item/Item';

export default function ItemList({ products }) {

    if (!products.length) {
        return <div>No hay productos disponibles.</div>;
    }

  return (
    <div>
        {products.map(product => (
            <Link key={product.id} to={`/products/${product.id}`}>
                <Item {...product} />
            </Link>
        ))}
            


    </div>
  )
}
