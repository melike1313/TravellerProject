import React from "react";
import "../../App.css";
import "../Paris.css";

const Paris = () => {
  return (
    <div className="paris-container">
    
      <div className="paris-video-container">
        <video className="paris-video" src="/videos/ParisVideo.mp4" autoPlay loop muted />
      </div>
      <div className="paris-info">
        <div className="paris-info-left">
          {/* Diğer turistik geziler buraya eklenebilir */}
        </div>
        <div className="paris-info-right">
          {/* Diğer turistik geziler buraya eklenebilir */}
        </div>
      </div>
    </div>
  );
};

export default Paris;