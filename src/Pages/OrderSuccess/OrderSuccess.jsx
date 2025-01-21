import { Link, useLocation } from "react-router-dom";
import "./OrderSuccess.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const OrderSuccess = () =>{
    const location = useLocation();
    const { orderDetails } = location.state || {};

    useEffect(() => {
      document.title = "Đơn hàng thành công"
     },[])

    return (
        <div className="success-container">
          <h2>Đặt hàng thành công!</h2>
          <div className="order-details">
          <div className="total-1">
              <strong>Chúc mừng quý khách đã đặt hàng thành công</strong>
              <h4>Phương thức thanh toán</h4>
              <p>{orderDetails.paymentMethod === "cod" ? "Thanh toán khi nhận hàng" : "Thanh toán chuyển khoản"}</p>
            </div>
            <h3>Thông tin khách hàng</h3>
            <p>
              <span>Họ và tên:</span> {orderDetails.customer.full_name}
            </p>
            <p>
              <span>Số điện thoại:</span> {orderDetails.customer.phone}
            </p>
            <p>
              <span>Email:</span> {orderDetails.customer.email}
            </p>
            <p>
              <span>Địa chỉ:</span> {orderDetails.customer.address}
            </p>
            <p>
              <span>Ghi chú:</span> {orderDetails.customer.note}
            </p>
            <h3>Thông tin đặt hàng</h3>
            {orderDetails.cart.map((item) => (
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
                {orderDetails.total.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
            <div className="go-to-home">
            <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;&nbsp;
                <Link to="/SanPham">Về trang sản phẩm</Link>
            </div>
          </div>
        </div>
      );
    };
export default OrderSuccess;
