import { Link } from 'react-router-dom';
import './ItemList.css'
import Item from '../item/Item';
import Skeleton from '../skeleton/Skeleton';

export default function ItemList({ products, loading }) {

  if (loading) {
    return (
      <div className="item-list">
        <Skeleton count={8} />
      </div>
    );
  }

  if (!products.length) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="item-list">
        {products.map(product => (
            <Link key={product.id} to={`/products/${product.id}`} className="item-list-link">
                <Item {...product} />
            </Link>
        ))}
    </div>
  )
}
