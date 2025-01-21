import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

const ConfirProduct = () => {
  const [activeMethod, setActiveMethod] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, formData } = location.state || {};

  useEffect(() => {
    document.title = "Thanh toán đơn hàng"
   },[])

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const handleMethodClick = (method) => {
    setActiveMethod(method);
  };

  const handlePayment = () => {
    const orderDetails = {
      customer: formData,
      cart: cart,
      total: calculateTotal(),
      paymentMethod: activeMethod,
    };
    navigate("/success", { state: { orderDetails } });
  };

  return (
      <div className="confirmation-container">
        <h2>Thông tin đơn hàng</h2>
        <div className="order-summary">
          <h3>Thông tin khách hàng</h3>
          <p>
            <span>Họ và tên:</span> {formData.full_name}
          </p>
          <span></span>
          <p>
            <span>Số điện thoại:</span> {formData.phone}
          </p>
          <p>
            <span>Email:</span> {formData.email}
          </p>
          <p>
            <span>Địa chỉ:</span> {formData.address}
          </p>
          <p>
            <span>Ghi chú:</span> {formData.note}
          </p>
          <h3>Thông tin đặt hàng</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-quantity">
                  Số lượng: <span>{item.quantity}</span>
                </p>

                <p className="item-total">
                  Giá tạm tính:{" "}
                  <span>
                    {(item.price * item.quantity).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </p>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Thành tiền:</h3>
            <p className="red">
              {calculateTotal().toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
          <div className="payment-method">
            <form action="">
              <div
                className={`method-cod method-form ${
                  activeMethod === "cod" ? "active" : ""
                }`}
                onClick={() => handleMethodClick("cod")}
              >
                <div className="cod-item">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </div>
                <div className="cod-title">Thanh toán khi nhận hàng</div>
              </div>
              <div
                className={`method-bank method-form ${
                  activeMethod === "bank" ? "active" : ""
                }`}
                onClick={() => handleMethodClick("bank")}
              >
                <div className="bank-item">
                  <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <div className="bank-title">Thanh toán chuyển khoản</div>
              </div>
              {activeMethod === "bank" && (
                <div className="bank-account-info">
                  <h2>Tài khoản ngân hàng</h2>
                  <div className="info">
                    <p>Tên ngân hàng</p>
                    <div className="bank-line"></div>
                    <p>Chủ tài khoản</p>
                    <div className="bank-line"></div>
                    <p>Số tài khoản</p>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="btn-payment" onClick={handlePayment}>
            Đặt hàng ngay
          </div>
        </div>
      </div>
  );
};

export default ConfirProduct;
