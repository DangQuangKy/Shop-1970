import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TitleSlider.scss"

const TitleSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000, 
    autoplay: true,
    autoplaySpeed: 0, 
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false, 
    cssEase: "linear", 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <h2>Tặng 10% khuyến mãi trị giá <span className='title-red'>500,000 VND</span> cho đơn hàng trên <span className='title-red'>10 triệu VND</span></h2>
        </div>
        <div>
          <h2>UP TO <span className='title-red'>55%</span> OFF BLACK FRIDAY <span className='title-red'>SALE</span></h2>
        </div>
        <div>
          <h2><span className='title-red'>Miễn phí</span> vẫn chuyển cho đơn hàng có giá trị trên <span className='title-red'>3 triệu VND</span></h2>
        </div>
      </Slider>
    </div>
  );
};

export default TitleSlider;
