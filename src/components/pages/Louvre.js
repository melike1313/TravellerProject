import React, { useEffect, useRef } from 'react';
import '../Louvre.css'; // Louvre.css dosyasını içe aktar
import LouvreMuseum from '../../images/LouvreM.jpg';
import autoAnimate from '@formkit/auto-animate';
function Louvre() {


    const leftContentRef = useRef(null);
   
    useEffect(() => {
       if (leftContentRef.current) {
         autoAnimate(leftContentRef.current);
       }
    }, []);

    
  return (
    <div class="louvre-page">
    
    <div class="content-wrapper">
        <div class="left-content">
            <h1>Title</h1>
            <p>The Musée du Louvre or officially Grand Louvre – in English, the Louvre Museum or simply the Louvre – is one of the world's largest museums, the most visited art museum in the world and a historic monument. A central landmark of Paris, it is located on the Right Bank of the Seine in the 1st arrondissement (district). Nearly 35,000 objects from prehistory to the 19th century are exhibited over an area of 60,600 square metres (652,300 square feet).

The museum is housed in the Louvre Palace (Palais du Louvre) which began as a fortress built in the late 12th century under Philip II. Remnants of the fortress are still visible</p>
        </div>
        <div class="right-content">
        <img src={LouvreMuseum} alt="Eiffel Tower" />
        </div>
    </div>
    <div class="content-wrapper1">
        <div class="new-left-content">
            <h1>New Title</h1>
            <p>The Musée du Louvre or officially Grand Louvre – in English, the Louvre Museum or simply the Louvre – is one of the world's largest museums, the most visited art museum in the world and a historic monument. A central landmark of Paris, it is located on the Right Bank of the Seine in the 1st arrondissement (district). Nearly 35,000 objects from prehistory to the 19th century are exhibited over an area of 60,600 square metres (652,300 square feet).

The museum is housed in the Louvre Palace (Palais du Louvre) which began as a fortress built in the late 12th century under Philip II. Remnants of the fortress are still visible</p>
        </div>
        <div class="new-right-content">
          
        <img src={LouvreMuseum} alt="Eiffel Tower" />
        </div>
    </div>

   
</div>

  );
}

export default Louvre;
