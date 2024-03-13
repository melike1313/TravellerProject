import React, { useState } from 'react';
import '../Louvre.css'; // Louvre.css dosyasını içe aktar
import LouvreImage from '../../images/LouvreM.jpg';
import LouvreImg from '../../images/LouvreImg.jpg';
import Mono from '../../images/MonoLisa.jpg';
import MonoLi from '../../images/MonoLisa1.jpg';
import VictoryStatue from '../../images/Victory.jpg';
import VictoryStatue2 from '../../images/Victory2.jpg';
import SphinxImg from '../../images/Sphinx1.jpg';
import SphinxImg1 from '../../images/sphinx.jpg';

function Louvre() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Yorum:', comment);
    console.log('Puan:', rating);
    setComment('');
    setRating(0);
  };

  const StarRating = ({ value, onClick }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={value >= i ? 'star-filled' : 'star-empty'}
          onClick={() => onClick(i)}
        >
          ★
        </span>
      );
    }
    return <div>{stars}</div>;
  };

  return (
    <div className="t-info">
      <h2>
        <span id="diff">U</span>nveiling the Louvre: Masterpieces Revealed
        
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff">T</span>he Louvre Uncovered: A Journey Through
                Masterpieces
                
              </h2>
              <p>
                "Louvre Unveiled: Revealing the Enchantment of Timeless
                Treasures" - This title captures the essence of uncovering the
                hidden beauty and historical significance within the Louvre
                Museum's collections.
              </p>
              <p>
                "Louvre Uncovered: Unlocking Timeless Beauty" - This title
                conveys the idea of revealing the timeless beauty and cultural
                significance found within the Louvre Museum's vast collection in
                a concise manner.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={LouvreImage} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={LouvreImg} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">M</span>ono Lisa
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Gazing into Mona Lisa's Smile: Unraveling the Mystery"
               
              </h2>
              <p>
                The world’s most famous painting, the Mona Lisa, needs a space
                big enough to welcome its many admirers. It is therefore housed
                in the Louvre’s largest room, the Salle des États, which is also
                home to other remarkable Venetian paintings such as The Wedding
                Feast at Cana by Veronese.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Mono} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MonoLi} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">A</span> STAIRWAY TO VICTORY
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                " A Stairway to Victory: Ascending to Triumph"
              
              </h2>
              <p>
                The Winged Victory of Samothrace, one of the most famous statues
                at the Louvre, graces the top of the monumental Daru staircase.
                This spectacular setting was carefully chosen to showcase the
                masterpiece of Greek Hellenistic art. Ancient sculpture meets
                modern architecture in one of the most emblematic spots of the
                museum.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={VictoryStatue} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={VictoryStatue2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">T</span>he Crypt of the Sphinx
   
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Revealing Enigma: The Crypt of the Sphinx"
                
              </h2>
              <p>
                An enigmatic half-human, half-animal creature with the body of a
                lion and the face of a king stands guard at the entrance to the
                Louvre’s Department of Egyptian Antiquities. Deep down in the
                crypt, the Great Sphinx of Tanis welcomes visitors to a vast
                display of over 6,000 works spanning almost 5,000 years of
                Egyptian history.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={SphinxImg} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={SphinxImg1} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="comment-section">
        <h2>Comment and Rate</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <StarRating value={rating} onClick={handleRatingChange} />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
   

export default Louvre;

