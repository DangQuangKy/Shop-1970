import React, { useEffect, useState } from "react";
import "./CheckOut.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Login from "../LogIn/LogIn";

Modal.setAppElement("#root");

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    note: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(
        JSON.parse(storedCart).map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
      );
    }
  }, []);

  useEffect(() => {
    document.title = "Thông tin đơn hàng";
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Xóa giỏ hàng khỏi localStorage
      localStorage.removeItem("cart");
      // Cập nhật trạng thái giỏ hàng
      setCart([]);
      // Chuyển hướng đến trang xác nhận sản phẩm
      navigate("/ConfirProduct", { state: { cart, formData } });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name) newErrors.full_name = "Họ và tên là bắt buộc";
    if (!formData.email) newErrors.email = "Email là bắt buộc";
    if (!formData.phone) newErrors.phone = "Số điện thoại là bắt buộc";
    if (!formData.address) newErrors.address = "Địa chỉ là bắt buộc";
    return newErrors;
  };

  return (
    <>
      <nav className="nav-checkout">
        <Link to="/">Trang chủ</Link> &nbsp; <FontAwesomeIcon icon={faAngleRight} /> <Link to="/CheckOut" className="active">Thông tin giỏ hàng</Link>
      </nav>
      <div className="checkout-container">
        <div className="cart-list">
          <h2>Thông tin đặt hàng</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-quantity">Số lượng đặt: {item.quantity}</p>
                <p className="item-price">
                  Giá tiền:{" "}
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="item-total">
                  Tổng tiền:{" "}
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <div className="total-1">
            <div>Đơn giá</div>
            <div className="red">
              {calculateTotal().toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className="line"></div>
          <div className="total-1">
            <div>Thành tiền</div>
            <div className="red">
              {calculateTotal().toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <button className="btn-buy" onClick={handleSubmit}>Đặt hàng</button>
          <div className="come-back">
            <Link to="/cart">
              <FontAwesomeIcon icon={faArrowLeftLong} /> &nbsp;Quay lại giỏ hàng
            </Link>
          </div>
          <div className="order-info">
            <div className="order-title">
              <div className="title-1">Địa chỉ nhận hàng</div>
              <div className="title-2">
                Bạn đã có tài khoản? <span onClick={openModal}>Đăng nhập</span>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Đăng nhập"
                  className="modal"
                  overlayClassName="overlay"
                >
                  <Login closeModal={closeModal} />
                </Modal>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Họ và tên"
                  value={formData.full_name}
                  onChange={handleChange}
                />
                {errors.full_name && <span className="error">{errors.full_name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-1">{errors.email}</div>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="error-1">{errors.phone}</div>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Địa chỉ nhận hàng"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>
              <div className="inner">
                <label>Ghi chú</label>
                <textarea name="note" rows={2} cols={10} value={formData.note} onChange={handleChange}></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
