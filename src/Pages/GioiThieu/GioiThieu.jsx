import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./GioiThieu.scss"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect } from "react";
function GioiThieu() {
    useEffect(() => {
        document.title = "Trang giới thiệu"
      },[])
    return ( 
        <div className="gioi-thieu">
            <nav className="nav-gioi-thieu">
            <a href="/">Trang chủ</a> &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            <a href="/GioiThieu" className="active">
              Giới thiệu
            </a>
            </nav>
            <div className="gioi-thieu-title">
                Về chúng tôi
            </div>
            <div className="gioi-thieu-content">
                <div className="nd-content">
                    <h3>THE 1970 - HÌNH THÀNH & PHÁT TRIỂN</h3>
                    <p><b>The 1970</b> được thành lập từ năm 2012 bởi ba cổ đông là những chàng trai trẻ có niềm đam mê về thời trang, mang hoài bão phát triển thương hiệu và sản phẩm đến khách hàng với những giá trị tốt nhất. Xuất phát từ một cửa hàng nhỏ trên phố Lò Đúc tại Hà Nội, Adam Store trong 10 năm hoạt động trên thị trường hiện giờ đã có hệ thống 60 cửa hàng trên 50 tỉnh thành Việt Nam và vẫn đang tiếp tục mở rộng phủ kín khắp cả nước.</p>
                    <p>Mục tiêu xây dựng thương hiệu thời trang mang xu hướng phong cách đa dạng từ trẻ trung, năng động đến lịch lãm, đẳng cấp; đáp ứng nhu cầu của khách hàng với thời gian ngắn mà chất lượng, hiệu quả ngày càng được nâng cao.</p>
                    <p>Đến nay, The 1970 đã cung cấp hơn 1 triệu bộ vest may sẵn, kết hợp với nhiều doanh nghiệp, tập đoàn, công ty (Techcombank, Viettel, Doji,…) đến tay người tiêu dùng.</p>
                    <h4>ĐA DẠNG SIZE, MẪU MÃ, HÀNG HÓA</h4>
                    <p>Thấu hiểu tâm lý mua sắm của khách hàng thời đại 4.0, việc mua hàng một cách tiện ích, nhanh chóng, vừa ý khách hàng. Tại Adam Store, chúng tôi nghiêm túc đầu tư vào việc nghiên cứu giải phẫu tỉ lệ cơ thể người Việt, từ đó cho ra mắt đến 5 size: 48 - 50 - 52 - 54 - 56, phù hợp với nhiều người từ 48-85kg, với những khách hàng có dáng người đặc biệt chúng tôi có nhận may đo. Ngoài ra, Adam Store có nhiều loại hàng hóa như Suit, quần âu, giày, sơ mi, áo phông, áo khoác, áo len, phụ kiện,..., mẫu mã đa dạng giúp khách hàng dễ dàng lựa chọn được sản phẩm ưng ý.</p>
                    <div className="image"><img src="https://cdn1332.cdn-template-4s.com/media/news/341099778_220047467340497_3255261053040175826_n.jpg" alt="" /></div>
                    <h4>HỆ THỐNG HƠN 60 CỬA HÀNG TRÊN TOÀN QUỐC</h4>
                    <p>The 1970 tự hào là một trong những thương hiệu phát triển, sở hữu nhiều showroom chi nhánh được trải dài trên 50 tỉnh thành khắp cả nước. Chúng tôi vẫn luôn cố gắng để có thể tiếp tục mở rộng hơn phủ kín toàn quốc, giúp khách hàng dễ dàng mua sắm trực tiếp tại tỉnh thành đang sinh sống. Với lợi thế vô cùng lớn này, chúng tôi luôn sẵn sàng là điểm đến của mọi tín đồ yêu thích ăn vận cổ điển, lịch lãm.</p>
                    <div className="image"><img src="https://cdn1332.cdn-template-4s.com/media/news/408422525_754957643344825_6873937132069724965_n.jpg" alt="" /></div>
                    <h4>DỊCH VỤ CHĂM SÓC KHÁCH HÀNG TỐT NHẤT</h4>
                    <p>Luôn hoạt động với tôn chỉ “Vì khách hàng xứng đáng những điều tốt đẹp nhất”, Adam chú trọng đến cảm xúc và trải nghiệm của khách hàng. Chúng tôi luôn nâng cấp, trang bị không gian mua sắm xứng tầm, đội ngũ tư vấn chuyên nghiệp, có gu thẩm mỹ và được đào tạo bài bản nhằm giúp khách hàng có trải nghiệm mua sắm tốt nhất.</p>
                    <div className="image"><img src="https://cdn1332.cdn-template-4s.com/media/news/408538272_755504353290154_5540263847375122093_n.jpg" alt="" /></div>
                </div>
            </div>
                <div className="nd-footer">
                    <span>Chia sẻ : &nbsp;
                        <FacebookIcon /> &nbsp;
                        <TwitterIcon />&nbsp;
                        <GoogleIcon />&nbsp;
                        <PinterestIcon />&nbsp;
                        <LinkedInIcon />
                    </span>
                </div>
        </div>
     );
}

export default GioiThieu;