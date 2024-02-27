import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../images/img-9.jpg'; // Resmi içe aktar
import img2 from '../images/new york.jpg'; // Resmi içe aktar
import img3 from '../images/Roma.jpg'; // Resmi içe aktar
import img4 from '../images/img-4.jpg'; // Resmi içe aktar
import img8 from '../images/Maldives.jpg'; // Resmi içe aktar  
function Cards() {
  return (
    <div className='cards'>
      <h1 className='font'>Popular Destinations !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9} // İçe aktarılan resmi kullan
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/countries'
            />
             <CardItem
              src={img2}
              text='Discover the Magic of New York: Where Dreams Take Flight!'
              label='Luxury'
              path='/countries'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Rome: Where History Comes Alive!'
              label='Mystery'
              path='/countries'
            />
            <CardItem
              src={img4}  
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={img8}    
              text='
              Maldives: Paradise Found, Serenity Unleashed!'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;