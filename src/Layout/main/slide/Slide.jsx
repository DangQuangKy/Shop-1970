import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import "./Slide.scss"

function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return ( 
       <div className="slide">
            <Slider {...settings}>
            <div className="slide-1">
              <img
              src="https://cdn1332.cdn-template-4s.com/media/slide/slide-2.webp"
              alt="wrapper"
            />
             <div className="slide-title">
                <span>Layers for <br/> the long haul</span>
                <h1>The Port Jacket <br/> in Espresso Marl</h1>
                <a href="/SanPham"><Button variant="contained">Mua ngay</Button></a>
             </div>
            </div>
            <div className="slide-1">
              <img
              src="https://cdn1332.cdn-template-4s.com/media/slide/slide-1.webp"
              alt="wrapper"
            />
             <div className="slide-title-1">
                <span>Layers for <br/> the long haul</span>
                <h1>The Port Jacket <br/> in Espresso Marl</h1>
                <a href="/SanPham"><Button variant="contained">Mua ngay</Button></a>
             </div>
            </div>
            <div className="slide-1">
              <img
              src="https://cdn1332.cdn-template-4s.com/media/slide/slide-3.webp"
              alt="wrapper"
            />
             <div className="slide-title">
                <span>Layers for <br/> the long haul</span>
                <h1>The Port Jacket <br/> in Espresso Marl</h1>
                <a href="/SanPham"><Button variant="contained">Mua ngay</Button></a>
             </div>
            </div>
            <div className="slide-1">
              <img
              src="https://cdn1332.cdn-template-4s.com/media/slide/slide-4.webp"
              alt="wrapper"
            />
             <div className="slide-title-1">
                <span>Layers for <br/> the long haul</span>
                <h1>The Port Jacket <br/> in Espresso Marl</h1>
                <a href="/SanPham"><Button variant="contained">Mua ngay</Button></a>
             </div>
            </div>
          </Slider>
       </div>
     );
}

export default Slide;