import './Card.scss'

const Card = ({ sortedProducts, handleAddToCart, handleProductClick }) => {
    return ( 
        <ul>
              {sortedProducts.map((product) => (
                <li key={product.id} className="card">
                  <img src={product.image} alt={product.name} onClick={() => handleProductClick(product.id)} />
                  <h4>{product.name}</h4>
                  <p>Giá sản phẩm: {product.price.toLocaleString('vi-VN')} VND</p>
                  <div className="btn-next">
                    <div className="btn btn1" onClick={() => handleAddToCart(product)}>Thêm giỏ hàng</div>
                    <div className="btn btn2" onClick={() => handleProductClick(product.id)}>Xem chi tiết</div>
                  </div>
                </li>
              ))}
            </ul>
     );
}
 
export default Card;