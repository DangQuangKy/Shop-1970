import {
  faBasketShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {   useState } from "react";
import Modal from "react-modal";
import { useSelector} from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Login from "../../Pages/LogIn/LogIn";
import "./Header.scss";
import Search from "../../Components/Search/Search";
Modal.setAppElement("#root"); // Thiết lập react modal

function Header() {
  const cartArr = useSelector((state) => state.cart.CartArr);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            src="https://cdn1332.cdn-template-4s.com/media/logo/logo-1970.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="nav-bar">
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/SanPham">Sản phẩm</NavLink>
            </li>
            <li>
              <NavLink to="/GioiThieu">Giới thiệu</NavLink>
            </li>
            <li>
              <NavLink to="/TinTuc">Tin tức</NavLink>
            </li>
            <li>
              <NavLink to="/LienHe">Liên hệ</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-icon">
        <div className="icon-container">
          <Search />
        </div>
        <div className="btn-login">
          <FontAwesomeIcon
            icon={faUser}
            className="login-icon"
            onClick={openModal}
          />
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
        <span className="btn-item">
          <Link to="/cart" className="btn-item-i">
          
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>

          {cartArr.length <= 0 ? (
            ""
          ) : (
            <div className="item-number">{cartArr.length}</div>
          )}
        </span>
      </div>
    </header>
  );
}

export default Header;
