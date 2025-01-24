import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import { Modal } from "antd";
import CartDetail from "./CartDetail.jsx/CartDetail";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  useDocumentTitle("Thông tin giỏ hàng")

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart).map(item => ({
        ...item,
        quantity: item.quantity || 1,
      })));
    }
  }, []);

  const handleOpenModal = (id) => {
    setIsModalVisible(true);
    setItemToRemove(id);
  }

  const handleCanelModal = () => {
    setIsModalVisible(false);
    setItemToRemove(null);
  }

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

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.id !== itemToRemove);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
      setIsModalVisible(false);
      setItemToRemove(null);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      // Tính giá sau discount cho mỗi sản phẩm
      const discountedPrice = item.discount > 0
        ? item.price * (1 - item.discount / 100)
        : item.price;

      // Cộng dồn tổng giá trị (discountedPrice * số lượng)
      return acc + discountedPrice * item.quantity;
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Giỏ hàng của bạn đang trống.</h2>
        <div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="" />
        </div>
        <Link to="/sanpham">{"<< Tiếp tục mua sắm"}</Link>
      </div>
    )
  }
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
              <th>Size</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Xóa giỏ hàng</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            <CartDetail
              key={cart.id}
              cart={cart}
              handleOpenModal={handleOpenModal}
              handleQuantityChange={handleQuantityChange}
            />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">Tổng tất cả sản phẩm:</td>
              <td>
                {calculateTotal().toLocaleString('vi')} VND
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/CheckOut">
          <div className="btn-pay">Xác nhận giỏ hàng</div>
        </Link>
      </div>
      <Modal
        title="Xác nhận xóa"
        open={isModalVisible}
        onOk={handleConfirmRemove}
        onCancel={handleCanelModal}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
      </Modal>
    </>
  );
};

export default Cart;
