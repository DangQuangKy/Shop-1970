import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import { faEnvelope, faMap, faMobile, } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-1">
        <ul>
          <li>
            <a href="/">
              <img
                src="https://cdn1332.cdn-template-4s.com/media/logo/logo-1970.png"
                alt="#"
              />
            </a>
          </li>
          <li>
            Xu hướng thời trang bị ảnh hưởng bởi một số yếu tố bao gồm điện ảnh,
            người nổi tiếng, khí hậu, sáng tạo khám phá, chính trị, kinh tế, xã
            hội.
          </li>
          <li>
            <address>
              <FontAwesomeIcon icon={faMap} />
              &nbsp;&nbsp;&nbsp;Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà
              Nội (Tòa nhà Petrowaco)
            </address>
          </li>
          <li>
            <FontAwesomeIcon icon={faMobile} />
            &nbsp;&nbsp;&nbsp;0901191616
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;&nbsp;contact@sm4s.vn
          </li>
        </ul>
      </div>
      <div className="footer-2">
        <ul>
          <li>
            <span>Đường dẫn</span>
          </li>
          <li>
            <a href="/">Về chúng tôi</a>
          </li>
          <li>
            <a href="/">Vận chuyển</a>
          </li>
          <li>
            <a href="/">Chính sách</a>
          </li>
          <li>
            <a href="/">Khuyến mãi</a>
          </li>
          <li>
            <a href="/">Hỗ trợ</a>
          </li>
          <li>
            <a href="/">Payment</a>
          </li>
          <li>
            <a href="/">Liên hệ</a>
          </li>
        </ul>
      </div>
      <div className="footer-3">
        <ul>
          <li>
            <span>Đăng kí nhận email</span>
          </li>
          <li>
            <p>Receive 20% off your first purchase</p>
          </li>
          <li>
            <div className="footer-form">
              <input
                required=""
                data-msg="Vui lòng nhập thông tin"
                data-rule-maxlength="255"
                data-msg-maxlength="thong_tin_nhap_qua_dai"
                name="email"
                type="email"
                placeholder="Email"
                aria-invalid="true"
              />
              <Button variant="contained" href="#contained-buttons" className="btn">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </Button>
            </div>
          </li>
          <li>
            <h5>Mạng xã hội</h5>
          </li>
          <li className="mxh">
            <a href="/">
            <EmailIcon />
            </a>
            <a href="/">
            <FacebookIcon />
            </a>
            <a href="/">
            <TwitterIcon />
            </a>
            <a href="/">
            <YouTubeIcon />
            </a>
            <a href="/">
            <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
