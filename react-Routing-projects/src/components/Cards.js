import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC Destintions!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem
                src='images/img-9.jpg'
                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                label='Adventure'
                path='/services' 
                />
                 <CardItem
                src='images/img-2.jpg'
                text='Travel through the island od Bali in a Privite Cruise'
                label='Luxury'
                path='/services' 
                />
               
            </ul>
            <ul className="cards__items">
                <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlanic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/services' 
                />
                 <CardItem
                src='images/img-4.jpg'
                text='Experience Football of the Himiliyan Mountains'
                label='Adventure'
                path='/services' 
                />
                  <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Deserts on a guided Camel Tour'
                label='Aderline'
                path='/services' 
                />
               
            </ul>
        </div>
      </div>
    </div>

  )
}

export default Cards
