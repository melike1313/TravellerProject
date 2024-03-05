import "../DisneyLand.css"; // Louvre.css dosyasını içe aktar

import Disneyland from '../../images/Disneyland.jpg';
import DisneyL from '../../images/DisneyL.jpg';
import DisneyHotel from '../../images/DisneyHotel.jpg';
import DisneyH from '../../images/DisneyH.jpg';
import Agrabah from '../../images/Agrabah.jpg';
import AgrabahCafe from '../../images/AgrabahCafe.jpg';
import Annettes from '../../images/Annettes.jpg';
import AnnettesDinner from '../../images/AnnettesDinner.jpg';
import WaltDisney from '../../images/WaltDisney.jpg';
import WaltDisneyMap from '../../images/WaltDisneyMap.jpg';


function DisneyLand() {


  return (
    <div className="t-info">
      <h2>
        <span id="diff">R</span>ise Above Ordinary, Ascend The Eiffel Tower
        
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff">U</span>nlock the Magic, Unleash Your Dreams at Disneyland Paris!
                
              </h2>
              <p>
              Disneyland Paris, nestled in the Marne-la-Vallée region of France, stands as one of Europe's largest entertainment complexes. This magical park offers visitors an unforgettable experience, bringing iconic characters and legendary tales to life. From meeting Mickey Mouse and the Disney Princesses to immersing oneself in the world of Star Wars, guests can enjoy a day filled with thrilling attractions and captivating shows. Moreover, with its luxurious hotels, diverse dining options, and shopping facilities, Disneyland Paris ensures guests a comfortable stay and delightful shopping experience.
              </p>
              <p>
          
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Disneyland} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={DisneyL} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">D</span>isneyland Hotel
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Step Into Enchantment: Disney Hotel, Where Every Stay is a Fairy Tale Come True!"
               
              </h2>
              <p>
              The Disney Hotel offers guests unrivalled comfort and convenience during their stay at Disneyland Paris, immersing them in a world of luxury and enchantment. From elegant accommodation to first-class amenities, every detail has been crafted to ensure a truly magical experience. With a variety of room options to suit every preference and budget, guests can enjoy the ultimate Disney getaway without compromise. From $200 per night, you can experience the magic of the Disney Hotel.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={DisneyHotel} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={DisneyH} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">A</span>grabah Café Restaurant
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Savor the Magic of Agrabah: Where Every Bite Tells a Tale!"
               
              </h2>
              <p>
              Transport yourself to the vibrant streets of Agrabah at the Agrabah Café Restaurant, an oasis of flavor and culture nestled within Disneyland Paris. With its exotic ambiance and tantalizing aromas, this culinary haven offers a feast for the senses. From savory Moroccan tagines to delectable Middle Eastern desserts, every dish is a culinary masterpiece inspired by the enchanting tales of Aladdin. Embark on a culinary journey through the mystical land of Agrabah and let your taste buds experience a whole new world of flavors.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Agrabah} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={AgrabahCafe} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

      <h2>
        <span id="diff">A</span>nnette's Dinner
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Stroll into this all-American diner, sit yourself down at the counter and experience the golden age of rock’n’roll."
               
              </h2>
              <p>
              Enjoy the 1950s “Happy Days” atmosphere, featuring giant hamburgers, hot dogs, milkshakes, and real American breakfasts served by waiting staff on roller skates! Visitors are swept back to the time of bebop, rock & roll, the twist, bobby socks and two-tone shoes.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={Annettes} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={AnnettesDinner} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />
      
      <h2>
        <span id="diff">W</span>alt Disney Studios Park
       
      </h2>
      <div className="t-row">
        <div className="infobox module">
          <div className="box">
            <div className="title">
              <h2>
                <span id="diff"></span>
                "Lights, Camera, Magic: Walt Disney Studios Park, Where Dreams Take Center Stage!"
               
              </h2>
              <p>
              Walt Disney Studios Park at Disneyland Paris is where the magic of cinema comes to life. Step onto iconic movie sets, immerse yourself in thrilling attractions, and witness the behind-the-scenes magic of filmmaking. From the heart-pounding action of the Hollywood Tower Hotel to the whimsical world of Toy Story Playland, every corner of this dynamic park offers excitement and adventure for visitors of all ages. Experience the enchantment of Disney storytelling like never before as you journey through the magic of cinema at Walt Disney Studios Park.
              </p>
            </div>
          </div>
        </div>
        <div className="images module">
          <div className="img1">
            <img src={WaltDisney} alt={""} id="port1" />
          </div>
          <div className="img2">
            <img src={WaltDisneyMap} alt={""} id="port2" />
          </div>
        </div>
      </div>
      <hr id="line" />

    </div>
  );
}

export default DisneyLand;
