import React from 'react';
import './Trips.scss';

import Location from '../../assets/location-pin-svgrepo-com.svg';
import Venice from '../../assets/Venice.svg';
import Paris from '../../assets/Pariss.svg';
import Agadir from '../../assets/Agadir.svg';

export default function Trips() {
  return (
    <div className='trips'>
      <div className='trips__header'>
        <h4>POPULAR TRIPS</h4>
        <h1>Our Most Popular Trips</h1>
      </div>

      <ul className='trips__selection'>
        <li>Hot Deals</li>
        <li>Honeymoon</li>
        <li>Backpacking</li>
        <li>Europe</li>
        <li>Asia</li>
        <li>More</li>
      </ul>

      <div className='trips__destinations'>
        <div className='card'>
          <img src={Venice} />

          <ul className='info'>
            <ul className='header'>
              <li>7 Days, 6 Nights</li>
              <li>$348 / person</li>
            </ul>

            <h3 className='headline'>Exlore the beauty of Venice</h3>

            <ul className='cardEnd'>
              <ul className='cardEnd__location'>
                <li>
                  <img src={Location} />
                </li>
                <li>Venice, Italy </li>
              </ul>

              <button className='footer__button'>Discover</button>
            </ul>
          </ul>
        </div>

        <div className='card'>
          <img src={Paris} />

          <ul className='info'>
            <ul className='header'>
              <li>5 Days, 4 Nights</li>
              <li>$285 / person</li>
            </ul>

            <h3 className='headline'>Seek the elegance of Paris</h3>

            <ul className='cardEnd'>
              <ul className='cardEnd__location'>
                <li>
                  <img src={Location} />
                </li>
                <li>Paris,France</li>
              </ul>

              <button className='footer__button'>Discover</button>
            </ul>
          </ul>
        </div>

        <div className='card'>
          <img src={Agadir} />

          <ul className='info'>
            <ul className='header'>
              <li>3 Days, 2 Nights</li>
              <li>$176 / person</li>
            </ul>

            <h3 className='headline'>Discover the culture of Agadir</h3>

            <ul className='cardEnd'>
              <ul className='cardEnd__location'>
                <li>
                  <img src={Location} />
                </li>
                <li>Agadir,Morocco</li>
              </ul>

              <button className='lastBtn'>Discover</button>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
