import React, { useEffect, useState } from "react";
import "./SanPham.scss";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

function SanPham() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isRotated, setIsRotated] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const dispatch = useDispatch();
  const CartProducts = useSelector(state => state.cart.CartArr);
  const navigate = useNavigate()
  useDocumentTitle("Trang sản phẩm")

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      });
  }, []);

  // hiển thị bảng sắp xếp
  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsListVisible(!isListVisible);
  };
  // click vào sẽ hiển thị ra trang tương ứng 
  const handleProductClick = (id) => {
    navigate(`/sanpham/${id}`)
  };
  // sắp xếp theo tiền từ thấp đến cao
  const sortByPriceAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
    setIsListVisible(false);
  };
  // sắp xếp theo tên sản phẩm
  const sortByName = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setSortedProducts(sorted);
    setIsListVisible(false);
  };
  // sắp xếp theo tiền từ cao đến thấp
  const sortByPriceDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
    setIsListVisible(false);
  };

  return (
    <div className="sanpham">
      <div className="wrapper">
        <img
          src="https://cdn1332.cdn-template-4s.com/media/category/bg-1.jpg"
          alt="wrapper"
        />
      </div>
      <div className="product">
        <div className="product-nav">
          <div className="title">
            <a href="/">Trang chủ</a> &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            <a href="/SanPham" className="active">
              Sản phẩm
            </a>
          </div>
          <div className="section">
            <div className="section-1">
              <span>Hiển thị:</span>
              <a href="/">12</a>
              <span>/</span>
              <a href="/">24</a>
              <span>/</span>
              <a href="/">36</a>
            </div>
            <div className="section-2">
              <span onClick={handleClick} className="click">
                Sắp xếp: &nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`arrow ${isRotated ? "rotated" : ""}`}
                />
                {isListVisible && (
                  <ul className="list">
                    <li><p onClick={sortByName}>Sắp xếp theo tên</p></li>
                    <li><p onClick={sortByPriceAscending}>Giá từ thấp đến cao</p></li>
                    <li><p onClick={sortByPriceDescending}>Giá từ cao đến thấp</p></li>
                  </ul>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="main-product">
          <div className="main-left">
            <ul>
              <li><a href="/SanPham">Shirts</a></li>
              <li><a href="/SanPham">Bottoms</a></li>
              <li><a href="/SanPham">Outerwear</a></li>
              <li><a href="/SanPham">Knits</a></li>
              <li><a href="/SanPham">Accessories</a></li>
              <li><a href="/SanPham">Footwear</a></li>
            </ul>
          </div>
          <div className="main-right">
            <Card
              sortedProducts={sortedProducts}
              handleProductClick={handleProductClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SanPham;
