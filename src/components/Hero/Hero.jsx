import React from 'react';
import './Hero.scss';
import Romantic from '../../assets/Romantic.svg';
import Location from '../../assets/location-pin-svgrepo-com.svg';

export default function Hero() {
  return (
    <main className='hero'>
      <div className='hero__info'>
        <ul className='title'>
          <li>Experience the</li>
          <li>world, one</li>
          <li>adventure at a time</li>
        </ul>

        <ul className='description'>
          <li> Whether you are looking for a relaxing beach vacation</li>
          <li>
            or an adventurous trip to a new city, we have something for
            everyone.
          </li>
        </ul>
      </div>

      <div className='hero__image'>
        <img src={Romantic} className='romanticHero' />
        <ul>
          <li>
            <img src={Location} />
          </li>
          <li>Maui, Hawaii</li>
        </ul>
      </div>
    </main>
  );
}
