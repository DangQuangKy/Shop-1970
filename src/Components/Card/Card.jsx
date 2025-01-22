import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.scss'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Card = ({ sortedProducts, handleAddToCart, handleProductClick }) => {
  return (
    <ul>
      {sortedProducts.map((product) => (
        <li key={product.id} className="card">
          {product.discount > 0 ? <div className="discount">{product.discount}%</div> : ''}
          <img src={product.image} alt={product.name} onClick={() => handleProductClick(product.id)} />
          <h4>{product.name}</h4>
          <p className="price">
            {product.discount > 0 ? (
              <>
                <span className="original-price">{product.price.toLocaleString()} VND</span>
                <span className="discount-price">{(product.price * (1 - product.discount / 100)).toLocaleString()} VND</span>
              </>
            ) : (
              <span className="final-price">{product.price.toLocaleString()} VND</span>
            )}
          </p>
          <div className="btn-next">
            <div className="btn btn2" onClick={() => handleProductClick(product.id)}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className="btn btn1" onClick={() => handleAddToCart(product)}>Thêm vào <FontAwesomeIcon icon={faCartShopping} /></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Card;