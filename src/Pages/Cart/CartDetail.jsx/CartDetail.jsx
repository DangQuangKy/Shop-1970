const CartDetail = ({cart, handleOpenModal, handleQuantityChange}) => {
    return ( 
       <>
         {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} className="product-image" />
                </td>
                <td>{item.name}</td>
                <td>
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      handleQuantityChange(item.id, newQuantity);
                    }}
                    min="1"
                  />
                </td>
                <td><button className="btn-delete" onClick={() => handleOpenModal(item.id)}>Xóa</button>
                </td>
                <td>
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
               
              </tr>
            ))}
       </>
     );
}
 
export default CartDetail
