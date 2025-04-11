import React from 'react';
import { sportsCards } from './data';
import './sportsCards.css';

export default function SportsCards() {
  return (
    <>
      {sportsCards.map((sport, index) => (
        <a 
          className='card'
          href='#'
          key={index}
          style={{ background: `url(${sport.background}) center/cover no-repeat` }}
        >
          <div className='shop-sport'>
            Shop {sport.name}
          </div>
        </a>
      ))}
    </>
  );
}
