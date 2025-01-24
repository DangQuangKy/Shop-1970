const CartDetail = ({ cart, handleOpenModal, handleQuantityChange }) => {
  return (
    <>
      {cart.map((item) => {
        const discountedPrice = item.discount > 0
          ? item.price * (1 - item.discount / 100)
          : item.price;

        const totalPrice = discountedPrice * item.quantity;

        return (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} className="product-image" />
            </td>
            <td>{item.name}</td>
            <td>{item.size}</td>
            <td>
              {discountedPrice.toLocaleString('vi-VN')} VND
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
            <td>
              <button className="btn-delete" onClick={() => handleOpenModal(item.id)}>
                Xóa
              </button>
            </td>
            <td>
              {totalPrice.toLocaleString('vi-VN')} VND
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CartDetail;
