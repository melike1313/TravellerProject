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
 const [hoveredItem, setHoveredItem] = useState(null); // Track the currently hovered item

 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-dots-custom",
    responsive: [
      {
        breakpoint: 768,
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
          <div className="info-box" onMouseEnter={() => setHoveredItem('louvre')} onMouseLeave={() => setHoveredItem(null)}>
            <Link to="/louvre">
              <img src={louvreImage} alt="Louvre Museum" />
            </Link>
            {hoveredItem === 'louvre' && <div className="hover-text">Louvre Museum</div>}
          </div>
          <div className="info-box" onMouseEnter={() => setHoveredItem('eyfel')} onMouseLeave={() => setHoveredItem(null)}>
            <Link to="/eyfel">
              <img src={EyfelKulesi} alt="Eifell Tower" />
            </Link>
            {hoveredItem === 'eyfel' && <div className="hover-text">Eiffel Tower</div>}
          </div>
          <div className="info-box" onMouseEnter={() => setHoveredItem('palais')} onMouseLeave={() => setHoveredItem(null)}>
            <Link to="/palais">
              <img src={PalaisMuze} alt="Palais Museum" />
            </Link>
            {hoveredItem === 'palais' && <div className="hover-text">Palais Museum</div>}
          </div>
          <div className="info-box" onMouseEnter={() => setHoveredItem('disney')} onMouseLeave={() => setHoveredItem(null)}>
            <Link to="/disney">
              <img src={Disney} alt="Disneyland" />
            </Link>
            {hoveredItem === 'disney' && <div className="hover-text">Disneyland</div>}
          </div>
        </Slider>
      </div>
    </div>
 );
};

export default Paris;