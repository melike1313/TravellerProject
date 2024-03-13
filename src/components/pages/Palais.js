import React, { Component } from 'react'


import "../Palais.css"; // Louvre.css dosyasını içe aktar
import Palais1 from "../../images/Palais1.jpg";
import Palais2 from "../../images/Palais2.jpg";
import MonetArt1 from "../../images/monet.jpg";
import MonetArt2 from "../../images/monet1.jpg";
import Artt1 from "../../images/Art1.jpg";
import Artt2 from "../../images/Art2.jpg";
import WomenArtt from "../../images/WomenArt1.jpg";
import WomenArtt1 from "../../images/WomenArt2.jpg";
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
        <span id="diff">T</span>he Little Alms Collector

      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>

                "The Benevolent Guardian: A Portrait of The Little Alms Collector"

              </h2>
              <p>
                The potted plant, a cardamine pratensis, whose flower a young child sitting on a railing offers to the alms collector, is the key to this painting. This common meadow plant, which was unlikely to be depicted as an ornamental plant, is called pinksterbloem in Dutch. The same name, which means “May flower”, is given to the little girl at the head of the processions organised by Catholics on this festival day.

                The hesitation over what title to give to this work stems from the fact that Steen produced a parody of the traditional procession. The little girl dressed as a bride and crowned with flowers who walked the streets collecting alms is replaced by a young boy wearing a cap with a paper flower pinned to it.

                All Steen’s virtuosity can be seen in this picture: his conveying of the particular textures of the different materials; the refinement of the vivid, rich, intense colours; and the composition organised according to a complex network of geometric lines.


              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Artt1} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={Artt2} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      <h2>
        <span id="diff">W</span>oman with Monkey

      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>

                "Symphony of Companionship: Woman and Monkey in Harmony"

              </h2>
              <p>
                Camille Alaphilippe took a keen interest in the possibilities of ceramics during his stay at the Villa Medici in 1901.

                In 1914, he would in fact become the manager of Alexandre Bigot’s fired stoneware factory in Mer (Loir-et-Cher), which mainly produced architectural ceramics.

                Woman with Monkey consists of a daring assembly of gilt bronze elements (the head and hands) and pieces of enamelled stoneware mounted on a wood and iron structure and held together by a mortar of crushed brick, with joints in coloured plaster.

                Hieratic and mysterious, the work owes as much to the symbolist image of the femme fatale holding an admirer in chains as to the neo-medieval inspiration that was special to its author.The ensemble forms a kind of giant art object, and the charm of its silhouette and its shimmering colours make us forget the technical prowess and ingenuity of this artist who deserves to be better known.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={WomenArtt} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={WomenArtt1} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

    </div>
  );
}

export default Palais;

