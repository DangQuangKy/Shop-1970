import {
  faAngleRight,
  faBox,
  faMinus,
  faPenRuler,
  faPlus,
  faRulerCombined,
  faShirt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { addProduct } from "../../Redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../Components/Notification/Notification";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [showNotification, setShowNotification] = useState(false); // Trạng thái thông báo
  const [notificationMessage, setNotificationMessage] = useState(""); // Nội dung thông báo
  const dispatch = useDispatch();
  const CartProducts = useSelector((state) => state.cart.CartArr);
  useDocumentTitle("Trang Sản phẩm")
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3002/products?id=${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // hành động thêm giỏ hàng sẽ hiện ra thông báo
  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
    setNotificationMessage(
      <span>Đã thêm <span style={{ color: '#B22222' }}>{product.name}</span> vào giỏ hàng!</span>
    );
    setShowNotification(true);
  };

  return (
    <div>
      {product.map((product) => {
        const totalPrice = (product.price * (1 - product.discount / 100)) * count;
        const overviewLines = product.overview
          ? product.overview.split("\n")
          : [];
        return (
          <>
            <nav className="nav-product">
              <Link href="/">Trang chủ</Link> &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
              <Link href="/SanPham">Sản phẩm</Link>
              &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
              <Link href={`/SanPham/${product.id}`} className="active">
                {product.name}
              </Link>
            </nav>
            <div className="productdetail">
              <div className="pro-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="pro-title">
                <h2>{product.name}</h2>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="font-size">
                  <p className="price">
                    {product.discount > 0 ? (
                      <>
                        <span className="discount-percentage">{product.discount}%</span>
                        <span className="original-price">{product.price.toLocaleString()} VND</span>
                        <span className="discount-price">{totalPrice.toLocaleString("vi-VN").toLocaleString()} VND</span>
                      </>
                    ) : (
                      <span className="final-price">{((product.price)*count).toLocaleString()} VND</span>
                    )}
                  </p>
                </p>
                <p>Mã sản phẩm: {product.description}</p>
                <div className="pro-buy">
                  <div className="pro-quantity">
                    <span
                      className="btn-quantity btn-quantity-sub"
                      onClick={decrement}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                    <input type="text" value={count} />
                    <span
                      className="btn-quantity btn-quantity-add"
                      onClick={increment}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </div>
                  <div className="btn-buy">
                    <Link onClick={() => handleAddToCart(product)}>
                      Thêm giỏ hàng
                    </Link>
                    <Notification
                      message={notificationMessage}
                      show={showNotification}
                      onClose={() => setShowNotification(false)}
                    />
                  </div>
                </div>
                <div className="list-suite">
                  <div className="suite-1">
                    <FontAwesomeIcon icon={faRulerCombined} />
                    <span>Garment Specifications</span>
                  </div>
                  <div className="suite-2">
                    <FontAwesomeIcon icon={faPenRuler} />
                    <span>Need a hand? Find your size</span>
                  </div>
                  <div className="suite-3">
                    <FontAwesomeIcon icon={faShirt} />
                    <span>Repair Or Replace Guarantee</span>
                  </div>
                  <div className="suite-4">
                    <FontAwesomeIcon icon={faBox} />
                    <span>Free Shipping & Free Returns</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="infor-product">
              <div className="infor-title">Thông tin sản phẩm</div>
              <div className="infor-detail">
                <div className="overview">
                  <h4>Tổng quan:</h4>
                  {overviewLines.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </div>
                <div className="material">
                  <h4>Chất liệu:</h4>
                  <li>{product.material}</li>
                </div>
                <div className="instruct">
                  <h4>Hướng dẫn giặt:</h4>
                  <li>{product.instruct}</li>
                </div>
              </div>
            </div>
            <div className="rating">
              <div className="rating-title">Đánh giá</div>
              <div className="rating-total">
                <div className="rating-1">
                  <h3>Khách hàng đánh giá</h3>
                  <div className="rating-points">5.0</div>
                  <div className="rating-star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ProductDetail;
