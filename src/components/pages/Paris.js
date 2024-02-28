import React from "react";
import "../../App.css";
import "../Paris.css";
import { Link } from 'react-router-dom';
import louvreImage from '../../images/Louvre.jpg';
import EyfelKulesi from '../../images/Eyfel.jpg';
import PalaisMuze from '../../images/Palais.jpg';
import Disney from '../../images/Disneyland.jpg';


const Paris = () => {
  
  return (
    <div className="paris-container">
      <div className="paris-video-container">
        <video className="paris-video" src="/videos/ParisVideo.mp4" autoPlay loop muted />
      </div>
      <div className="paris-info">
        <div className="paris-info-left">
          <div className="info-box">
          <Link to="/louvre">
          <img src={louvreImage} alt="Louvre Müzesi" />
            
            </Link>
          </div>
          <div className="info-box">
          <img src={EyfelKulesi} alt="Louvre Müzesi" />
          </div>
        </div>
        <div className="paris-info-right">
          <div className="info-box">
          <img src={PalaisMuze} alt="Palais Müzesi" />
          </div>
          <div className="info-box">
          <img src={Disney} alt="Disneyland" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paris;