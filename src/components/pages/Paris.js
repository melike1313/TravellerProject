import React from "react";
import "../../App.css";
import "../Paris.css";
import { Link } from 'react-router-dom';
import louvreImage from '../../images/Louvre.jpg';


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
            <h2>Louvre Müzesi</h2>
            <p>Louvre Müzesi, dünyanın en büyük sanat müzelerinden biridir.</p>
          </div>
        </div>
        <div className="paris-info-right">
          <div className="info-box">
            <h2>Montmartre</h2>
            <p>Montmartre, sanatçılar ve bohem hayat tarzıyla ünlüdür. </p>
          </div>
          <div className="info-box">
            <h2>Champs-Élysées</h2>
            <p>Champs-Élysées, Paris'in en ünlü caddelerinden biridir.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paris;