import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart).map(item => ({
        ...item,
        quantity: item.quantity || 1,
      })));
    }
  }, []);
 useEffect(() => {
  document.title = "Thông tin giỏ hàng"
 },[])
  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav className="nav-cart">
        <Link to="/">Trang chủ</Link> &nbsp; <FontAwesomeIcon icon={faAngleRight} /> <Link to="/Cart" className="active">Giỏ hàng</Link>
      </nav>
      <div className="cart-container">
        <h1>Thông tin sản phẩm</h1>
        <table>
          <thead>
            <tr>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Xóa giỏ hàng</th> 
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
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
                <td><button className="btn-delete" onClick={() => handleRemoveItem(item.id)}>Xóa</button>
                </td>
                <td>
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
               
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Tổng tất cả sản phẩm:</td> 
              <td>
                {calculateTotal().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/CheckOut">
          <div className="btn-pay">Xác nhận giỏ hàng</div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
