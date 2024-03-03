import React, { useState } from "react";
import "../../App.css";
import "../Paris.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import louvreImage from '../../images/Louvre.jpg';
import EyfelKulesi from '../../images/Eyfel.jpg';
import PalaisMuze from '../../images/Palais.jpg';
import Disney from '../../images/Disneyland.jpg';

const Paris = () => {
  const [isHovered, setIsHovered] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-dots-custom",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="paris-container">
      <div className="paris-video-container">
        <video className="paris-video" src="/videos/ParisVideo.mp4" autoPlay loop muted />
      </div>
      <div className="paris-info">
        <Slider {...settings}>
          <div className="info-box"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link to="/louvre">
              <img src={louvreImage} alt="Louvre Müzesi" />
            </Link>
            {isHovered && <div className="hover-text"> <p>Louvre Müzesi</p>
              <p>Paris, Fransa</p>
              <p>Dünyanın en büyük sanat müzesi</p>
            </div>}
          </div>
          <div className="info-box">
            <img src={EyfelKulesi} alt="Eyfel Kulesi" />
          </div>
          <div className="info-box">
            <img src={PalaisMuze} alt="Palais Müzesi" />
          </div>
          <div className="info-box">
            <img src={Disney} alt="Disneyland" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Paris;
