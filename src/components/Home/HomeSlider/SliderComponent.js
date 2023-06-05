import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true, 
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Adjust this value according to your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Adjust this value according to your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px', // Adjust this value according to your design
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="Home-Slider">
          <h1 className="Home-Slidertitle">Random Astrology Pictures</h1>
          <Slider {...sliderSettings}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Slide 1"
                className="Home-SliderImage"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1529788295308-1eace6f67388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Slide 2"
                className="Home-SliderImage"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Slide 3"
                className="Home-SliderImage"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
