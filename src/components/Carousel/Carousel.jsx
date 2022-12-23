import React, { Component } from "react";
import Slider from "react-slick";
import "../Carousel/Carousel.css"

export default class Responsive extends Component {
  render()
   {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
      <div className="slide-item">
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div className="slide">
            <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
          <div className="slide">
          <img src="https://www.fotoget.net/wp-content/uploads/2016/02/man_north-1650x1100.jpg" alt="" width={300} />
          </div>
        </Slider>
      </div>
    );
  }
}