
import "../Palais.css"; // Louvre.css dosyasını içe aktar

import LouvreImage from "../../images/LouvreM.jpg";
import LouvreImg from "../../images/LouvreImg.jpg";

import VictoryStatue from "../../images/Victory.jpg";
import VictoryStatue2 from "../../images/Victory2.jpg";
import SphinxImg from "../../images/Sphinx1.jpg";
import SphinxImg1 from "../../images/sphinx.jpg";
import Palais1 from "../../images/Palais1.jpg";
import Palais2 from "../../images/Palais2.jpg";
import MonetArt1 from "../../images/monet.jpg";
import MonetArt2 from "../../images/monet1.jpg";

function Palais() {


  return (
    <div className="t-info">
      <h2>
        <span id="diff">L</span>e Petit Palais
        
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff">L</span>e Petit Palais: Journey into the Enchantment of Art
                Masterpieces
                
              </h2>
              <p>
               
Le Petit Palais, meaning "The Little Palace" in French, is a museum located in the 8th arrondissement of Paris. It was built for the 1900 Paris World's Fair. Designed by architect Alexandre Marcel, this building is considered one of the significant architectural landmarks of its time.

Le Petit Palais houses a collection of art from periods before the 20th century. It hosts artworks ranging from ancient times to the Middle Ages, from the Renaissance to the early 20th century. The museum's collection includes paintings, sculptures, decorative arts, and furniture, among other various artworks.
              </p>
              <p>
              Additionally, Le Petit Palais regularly hosts temporary exhibitions. The museum offers visitors the opportunity to explore the history of art and various periods. With its architectural beauty, rich collection, and curated exhibitions, Le Petit Palais is an important part of Paris's cultural life.






              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Palais1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Palais2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">S</span>unset on the Seine at Lavacourt, Winter Effect
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
       
"Winter's Glow: Sunset on the Seine at Lavacourt"
               
              </h2>
              <p>
              Lavacourt is a village in the Paris area, located on the left bank of the Seine, opposite the village of Vétheuil where Monet was based in September 1878. The winter of 1879 was particularly harsh.

Paris and the surrounding area were paralysed by snow and all transport stopped. Despite the intense cold, Monet painted twenty or so paintings during the first months of 1880, observing the ice on the Seine slowly thawing.

At that time, a lack of money drove the painter to try to enter the official Salon again, which he had given up in favour of impressionist exhibitions since it rejected his works in 1870. For the 1880 Salon, Monet prepared a deliberately toned down view of Lavacourt which was selected by the jury, as well as a flooded landscape showing the ice thawing on the Seine - undoubtedly the painting at the Petit Palais - which was rejected. Indeed, in this second work Monet gave freer rein to pictorial experimentation.


              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={MonetArt1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={MonetArt2} alt={""} id="port2" />
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
      
    </div>
  );
}

export default Palais;